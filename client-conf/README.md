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

-- To disable DNSSEC validation, uncomment the following line (not recommended)
trust_anchors.remove('.')

-- Forward queries to Blahdns
policy.add(policy.all(policy.TLS_FORWARD({{'159.69.198.101@443', hostname='dot-de.blahdns.com', ca_file='/etc/ssl/certs/ca-certificates.crt'}})))
policy.add(policy.all(policy.TLS_FORWARD({{'45.32.55.94@853', hostname='dot-jp.blahdns.com', ca_file='/etc/ssl/certs/ca-certificates.crt'}})))
policy.add(policy.all(policy.TLS_FORWARD({{'2001:19f0:7001:3259:5400:02ff:fe71:0bc9@853', hostname='dot-jp.blahdns.com', ca_file='/etc/ssl/certs/ca-certificates.crt'}})))

```

## Unbound 

```bash
# /etc/unbound/unbound.conf

    include: "/etc/unbound/unbound.conf.d/*.conf"
    verbosity: 1
    tls-cert-bundle: "/etc/ssl/certs/ca-certificates.crt"
    interface: 127.0.0.1@53
    interface: 0::1@53
    harden-dnssec-stripped: no # disable DNSSEC
    do-not-query-localhost: no

forward-zone:
  name: "."
  forward-tls-upstream: yes
  forward-addr: 95.216.212.177@443#dot-fi.blahdns.com
  forward-addr: 2a01:4f9:c010:43ce::1@853#dot-fi.blahdns.com
  forward-addr: 45.32.55.94@853#dot-jp.blahdns.com
  forward-addr: 2001:19f0:7001:3259:5400:02ff:fe71:0bc9@443#dot-jp.blahdns.com
  forward-addr: 159.69.198.101@853#dot-de.blahdns.com
  forward-addr: 2a01:4f8:1c1c:6b4b::1@443#dot-de.blahdns.com
  
```

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
getdns_query @45.32.55.94 -s -L -A www.google.com
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

DNS=45.32.55.94 159.69.198.101
DNSOverTLS=opportunistic

// Save and restart service
sudo systemctl restart systemd-resolved
// Check settings
resolvectl status
resolvectl query dot-jp.blahdns.com -t A
```


