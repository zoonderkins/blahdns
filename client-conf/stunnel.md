## Stunnel
stunnel is an open-source multi-platform application used to provide a universal TLS/SSL tunneling service. stunnel can be used to provide secure encrypted connections for clients or servers that do not speak TLS or SSL natively.

```bash
$ sudo apt install stunnel4
$ sudo sed -i -e "s/ENABLED=0/ENABLED=1/" /etc/default/stunnel4 

cd /etc/stunnel
nano blahdns.conf

// blahdns.conf
debug = err
[blahdns-dns]
client = yes
accept = 127.0.0.1:5353
connect = 139.162.112.47 #Japan

verifyChain = yes
CApath = /etc/ssl/certs

checkHost = dot-jp.blahdns.com
````

### Test
```bash
dig @127.0.0.1 -p 5353 www.google.com +tcp
```
