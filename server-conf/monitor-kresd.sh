#if lsof -Pi :50 -sUDP:LISTEN -t >/dev/null ; then
#    echo "running"
#else
#    echo "not running"
#fi

#netstat -ln | grep ":50 " 2>&1 > /dev/null
#if [ $? -eq 1 ]; then
#     echo Starting Meteor;
#fi

!/bin/bash

# Check if gedit is running
# -x flag only match processes whose name (or command line if -f is
# specified) exactly match the pattern.

if ps -e | grep dnscrypt-wrap
then
    echo "Dnscrypt wrapper is running"
else
    /root/dns/dnscrypt-start.sh
    echo "Dnscrypt is Stopped"
fi

if pgrep -x "kresd"
then
    echo "kresd is Running"
else
    echo "kresd is Stopped and restart service "
    /root/kresd.sh
    #service knot-tls stop
    #service knot-tls start
fi
