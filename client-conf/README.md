## Android DoT / DoH config

Go [HERE](https://github.com/ookangzheng/blahdns/blob/master/client-conf/DoT-or-DoH-Android.md)

## Dnscrypt-proxy

Go [HERE](https://github.com/ookangzheng/blahdns/tree/master/client-conf/dnscrypt)

## Knot-resolver

```bash
-- Load useful modules
modules = {
        'policy',
        'hints > iterate',  -- Load /etc/hosts and allow custom root hints
--      'stats',            -- Track internal statistics
--      'predict',          -- Prefetch expiring/frequent records
}
net.listen({'::1', '127.0.0.1'}, 53)
-- Cache size
cache.size = 100 * MB

-- Forward queries to Blahdns
policy.add(policy.all(policy.TLS_FORWARD({{'139.162.112.47@853', hostname='dot-jp.blahdns.com', ca_file='/etc/ssl/certs/ca-certificates.crt'}})))

```

## Unbound 

Go [HERE](https://github.com/zoonderkins/blahdns/blob/master/client-conf/unbound.conf)

## Stubby

Go [HERE](https://github.com/ookangzheng/blahdns/tree/master/client-conf/stubby)


## Windows
Simplednscrypt -> https://simplednscrypt.org/ and install

![](https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/blahdns-1.png?raw=true)
![](https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/blahdns-2.png?raw=true)

## Kdig
```bash
kdig google.com @dot-jp.blahdns.com +tls
```
## getdns
```bash
sudo apt install getdns-utils
getdns_query @139.162.112.47 -s -L -A www.google.com
```

## Curl
```bash
curl -H 'accept: application/dns-json' 'https://doh-jp.blahdns.com/dns-query?name=www.google.com&type=A'
```

## Facebook python doh-proxy
```bash
sudo apt install python3-pip python3-setuptools python3-wheel
sudo -H pip3 install doh-proxy
doh-client --domain doh-jp.blahdns.com --qname google.com --qtype A
```

## Linux-systemd
```bash
nano /etc/systemd/resolved.conf

DNS=4139.162.112.47
DNSOverTLS=opportunistic

// Save and restart service
sudo systemctl restart systemd-resolved
// Check settings
resolvectl status
resolvectl query dot-jp.blahdns.com -t A
```


