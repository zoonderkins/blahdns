## IP / DNS leak test

1. [bash.ws/dnsleak](https://bash.ws/dnsleak)
2. [https://browserleaks.com/ip](https://browserleaks.com/ip)
3. [ipleak.org](https://ipleak.org/)
4. [ipleak.com](http://ipleak.com/full-report)

- [What is my IP](https://ifconfig.co/)
```
curl -4 https://ifconfig.co
curl -6 https://ifconfig.co
```

## Prevent DNS leaking from Chrome browser on Android phone

1. Type `chrome://flags`
2. search for keyword: `async dns`
3. set value to `DISABLED`
4. restart Chrome

<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/disable-async-dns-on-android-chrome.jpg" alt="Your image title" width="250"/>


## Troubleshoot 


```
// Browser test: 
https://doh-de.blahdns.com/dns-query?name=example.net
https://doh-jp.blahdns.com/dns-query?name=example.net
https://doh-ch.blahdns.com/dns-query?name=example.net

// curl with DoH 
curl -H 'content-type: application/dns-message' -vL -v 'https://doh-jp.blahdns.com/dns-query?dns=AAABAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB' | hexdump -C

curl -H 'content-type: application/dns-message' -vL -v 'https://doh-de.blahdns.com/dns-query?dns=AAABAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB' | hexdump -C

curl -H 'content-type: application/dns-message' -vL -v 'https://doh-ch.blahdns.com/dns-query?dns=AAABAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB' | hexdump -C

// Kdig on Ubuntu, Debian
apt install knot-dnsutils

// Kdig TLS with port 853, port 443 force include SNI (updated on August 1, 2019)

kdig @108.61.201.119 +tls example.com
kdig @2001:19f0:7001:1ded:5400:1ff:fe90:945b +tls example.com 
kdig @159.69.198.101 +tls example.com 
kdig @2a01:4f8:1c1c:6b4b::1 +tls example.com 
kdig @2a0a:e5c0:2:2:0:c8ff:fe68:bf48 +tls example.com 

kdig @108.61.201.119 +tls -p 443 +tls-sni=dot-jp.blahdns.com example.com 
kdig @159.69.198.101 +tls -p 443 +tls-sni=dot-de.blahdns.com example.com 
kdig @2a01:4f8:1c1c:6b4b::1 +tls -p 443 +tls-sni=dot-de.blahdns.com example.com 
kdig @2a0a:e5c0:2:2:0:c8ff:fe68:bf48 +tls +tls-sni=dot-ch.blahdns.com example.com 

// TLS certificate validation 
kdig -d @2a0a:e5c0:2:2:0:c8ff:fe68:bf48 +tls-sni=dot-ch.blahdns.com +tls-ca +tls-host=dot-ch.blahdns.com example.com
kdig -d @108.61.201.119 -p 443 +tls-sni=dot-jp.blahdns.com +tls-ca +tls-host=dot-jp.blahdns.com example.com
kdig -d @2001:19f0:7001:1ded:5400:1ff:fe90:945b -p 443 +tls-sni=dot-jp.blahdns.com +tls-ca +tls-host=dot-jp.blahdns.com example.com
kdig -d @159.69.198.101 -p 443 +tls-sni=dot-de.blahdns.com +tls-ca +tls-host=dot-de.blahdns.com example.com
kdig -d @2a0a:e5c0:2:2:0:c8ff:fe68:bf48 -p 443 +tls-sni=dot-de.blahdns.com +tls-ca +tls-host=dot-de.blahdns.com example.com

```

## Mac OSX Mojave use Openssl TLS 1.3 

```
brew upgrade
brew install openssl@1.1

// Put openssl tls 1.3 as first choice on zsh, paste it and restart terminal
echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

// Debug DoH with TLS 1.3
openssl s_client -state -debug -msg -connect doh-jp.blahdns.com:443 -tls1_3
```

## DNSSEC validation test

Use `dig` to test, this will return with header `AD`

```
dig blahdns.com +dnssec +multi
```

This will failed, should only return a `SERVFAIL`

```
dig www.dnssec-failed.org 

```


## DNS alternative

### Censored DNS
1. https://doh.tiar.app/ (DoT, DoH, Dnscrypt, Singapore)
2. https://doh.dnswarden.com/adblock (DoH, Germany)
3. adblock-dot.dnswarden.com (DoT, Port: 443, 853, Germany)
4. fdns1.dismail.de (DoT, Port: 853, Germany)
5. https://dns.brahma.world/ (DoH, DoT, Plain, Port 853, India)

### Uncensored DNS
1. dot.securedns.eu, https://doh.securedns.eu/dns-query (DoT, DoH, Dnscrypt)
2. https://doh.dnswarden.com/uncensored (DoH)
3. uncensored-dot.dnswarden.com (DoT, Port: 443, 853)
4. dns-tls.openbsd.se (DoT)
5. dot1.appliedprivacy.net
6. dns.neutopia.org (DoT)
7. ns1.dnsprivacy.at, ns2.dnsprivacy.at (DoT, Dnscrypt, Port: 853)
8. dns.cmrg.net (DoT, Canada, TCP port: 853 or 443 or 53053)
9. unicast.censurfridns.dk (DoT, Denmark)
10. doh.defaultroutes.de, https://doh.defaultroutes.de/dns-query (DoT, DoH, Port: 853, Germany)

## Server Benchmark
1. [bench.sh](https://cdn.statically.io/gh/teddysun/across/master/bench.sh)
```
// Method 1 ** Recommend 
wget -qO- https://oooo.b-cdn.net/bench.sh | bash

// Method 2
wget -qO- https://cdn.statically.io/gh/teddysun/across/master/bench.sh | bash
```

2. [Unixbench](https://cdn.statically.io/gh/teddysun/across/master/unixbench.sh)
```
// Method 1 ** Recommend 
wget https://oooo.b-cdn.net/unixbench.sh
chmod +x unixbench.sh
./unixbench.sh

// Method 2 (If your server only has IPv6, use Method 1)
wget https://cdn.statically.io/gh/teddysun/across/master/unixbench.sh
chmod +x unixbench.sh
./unixbench.sh
```
1. IPtables DNS DDOs attack: https://github.com/justvanbloom/dns-iptables-rules/blob/master/update_domain_blacklist.sh
Vultr Cloudcompute vs High frequency -- [gist](https://gist.github.com/ookangzheng/3b3494af632c19699f2cd1bb0ea1685e)
