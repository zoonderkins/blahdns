#!/bin/bash

CHECK_OS(){
	if [[ -f /etc/redhat-release ]];then
		release="centos"
	elif cat /etc/issue | grep -q -E -i "debian";then
		release="debian"
	elif cat /etc/issue | grep -q -E -i "ubuntu";then
		release="ubuntu"
	elif cat /etc/issue | grep -q -E -i "centos|red hat|redhat";then
		release="centos"
	elif cat /proc/version | grep -q -E -i "debian";then
		release="debian"
	elif cat /proc/version | grep -q -E -i "ubuntu";then
		release="ubuntu"
	elif cat /proc/version | grep -q -E -i "centos|red hat|redhat";then
		release="centos"
	fi
}

GET_SETTING_FAIL2BAN_INFO(){
	read -p "允许SSH登陆失败次数,默认10:" BLOCKING_THRESHOLD
	if [[ ${BLOCKING_THRESHOLD} = "" ]];then
		BLOCKING_THRESHOLD='10'
	fi
	
	read -p "SSH登陆失败次数超过${BLOCKING_THRESHOLD}次时,封禁时长(h),默认8760:" BLOCKING_TIME_H
	if [[ ${BLOCKING_TIME_H} = "" ]];then
		BLOCKING_TIME_H='8760'
	fi

	BLOCKING_TIME_S=$(expr ${BLOCKING_TIME_H} \* 3600)
}

INSTALL_FAIL2BAN(){
	if [ ! -e /etc/fail2ban/jail.local ];then
		CHECK_OS
		case "${release}" in
			centos)
				GET_SETTING_FAIL2BAN_INFO
				yum -y install epel-release
				yum -y install fail2ban;;
			debian|ubuntu)
				GET_SETTING_FAIL2BAN_INFO
				apt-get -y install fail2ban;;
			*)
				echo "请使用CentOS,Debian,Ubuntu系统.";;
		esac
	else
		echo "fail2ban已经安装了.";exit
	fi
}

REMOVE_FAIL2BAN(){
	if [ -e /etc/fail2ban/jail.local ];then
		CHECK_OS
		case "${release}" in
			centos)
				service fail2ban stop
				yum -y remove fail2ban
				rm -rf /etc/fail2ban/jail.local;;
			debian|ubuntu)
				service fail2ban stop
				apt-get -y remove fail2ban
				rm -rf /etc/fail2ban/jail.local;;
		esac
	else
		echo "fail2ban尚未安装.";exit
	fi
}

SETTING_FAIL2BAN(){
	CHECK_OS
	case "${release}" in
		centos)
			echo "[DEFAULT]
ignoreip = 127.0.0.1
bantime = 86400
maxretry = 3
findtime = 1800

[ssh-iptables]
enabled = true
filter = sshd
action = iptables[name=SSH, port=ssh, protocol=tcp]
logpath = /var/log/secure
maxretry = ${BLOCKING_THRESHOLD}
findtime = 3600
bantime = ${BLOCKING_TIME_S}" > /etc/fail2ban/jail.local
			if [ -e /usr/bin/systemctl ];then
				systemctl restart fail2ban
				systemctl enable fail2ban
				systemctl restart sshd
			else
				service fail2ban restart
				chkconfig fail2ban on
				service ssh restart
			fi;;
		debian|ubuntu)
			echo "[DEFAULT]
ignoreip = 127.0.0.1
bantime = 86400
maxretry = ${BLOCKING_THRESHOLD}
findtime = 1800

[ssh-iptables]
enabled = true
filter = sshd
action = iptables[name=SSH, port=ssh, protocol=tcp]
logpath = /var/log/auth.log
maxretry = ${BLOCKING_THRESHOLD}
findtime = 3600
bantime = ${BLOCKING_TIME_S}" > /etc/fail2ban/jail.local
			service fail2ban restart
			service ssh restart;;
	esac
}

VIEW_RUN_LOG(){
	CHECK_OS
	case "${release}" in
		centos)
			tail -f /var/log/secure;;
		debian|ubuntu)
			tail -f /var/log/auth.log;;
	esac
}

case "${1}" in
	install)
		INSTALL_FAIL2BAN
		SETTING_FAIL2BAN;;
	uninstall)
		REMOVE_FAIL2BAN;;
	status)
		echo -e "\033[41;37m【进程】\033[0m";ps aux | grep fail2ban
		echo;echo -e "\033[41;37m【状态】\033[0m";fail2ban-client ping
		echo;echo -e "\033[41;37m【Service】\033[0m";service fail2ban status;;
	blocklist|bl)
		if [ -e /etc/fail2ban/jail.local ];then
			fail2ban-client status ssh-iptables
		else
			echo "fail2ban尚未安装.";exit
		fi;;
	unlock|ul)
		if [ -e /etc/fail2ban/jail.local ];then
			if [[ "${2}" = "" ]];then
				read -p "请输入需要解封的IP:" UNLOCK_IP
				if [[ ${UNLOCK_IP} = "" ]];then
					echo "不允许空值,请重试.";exit
				else
					fail2ban-client set ssh-iptables unbanip ${UNLOCK_IP}
				fi
			else
				fail2ban-client set ssh-iptables unbanip ${2}
			fi
		else
			echo "fail2ban尚未安装.";exit
		fi;;
	more)
		echo "【参考文章】
https://www.fail2ban.org
https://linux.cn/article-5067-1.html

【更多命令】
fail2ban-client -h";;
	runlog)
		VIEW_RUN_LOG;;
	start)
		service fail2ban start;;
	stop)
		service fail2ban stop;;
	restart)
		service fail2ban restart;;
	*)
		echo "bash fail2ban.sh {install|uninstall|runlog|more}"
		echo "bash fail2ban.sh {start|stop|restart|status}"
		echo "bash fail2ban.sh {blocklist|unlock}";;
esac

#END
