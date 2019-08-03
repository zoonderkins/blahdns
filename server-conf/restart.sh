## Cronjob every 6 hours clear logs and restart services

cd /var/log

rm -rf haproxy.log*
rm -rf daemon.log*
rm -rf messages*
rm -rf syslog*
rm -rf user*
rm -rf kern*
rm -rf debug*

service haproxy restart
service doh-server restart
