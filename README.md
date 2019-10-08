## Announcements

**Japan/Germany servers now enable to resolve `.eth` tld.(TRY: `dig almonit.eth or dig matoken.eth`)--BETA**

**All dnscryptV2 expired certificate has been replaced. Enjoy (2019-10-02 23:45 GMT+8)**

* If you are developer using those services, both are blocked by default. 
`data.mob.com, google-analytics, googleadservices, amazon-adsystem, crashlytics.com analytics.yahoo, doubleclick.net, hm.baidu.com, etc.. `

* Germany server certs expired at November 29, 2019

* Japan server certs both renewed at August 2, 2019

* Japan & Germany server has been reinstall and Japan server updated to Vultr High frequency VPS for faster speed at August 2, 2019 🥳

* Switzerland server is online, DoT added Port 443, 853 (July 19, 2019) 🥂 

* For more old announcements, go [here](https://github.com/ookangzheng/blahdns/issues/36)


## Our features
* Block Trackers, Ads, Malware, Phishing
* No ECS, DNSSEC ready, No logs, OpenNIC 

## Server status
* Server status [UpTimeRobot](https://stats.blahdns.com) | [Dnsprivacy.org](https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/)

## Server architecture

```bash
Server (August 2, 2019 -- Germany, Japan)
|-- Let's Encrypt SSL
|-- Knot-resolver (OpenNIC, ICANN)
|   |-- DNSCryptv2 (dnsdist, port 8443)
|   |-- doh-server (DoH, GET, POST -- m13253)
|   |-- |-- DoH (HAProxy, port 443, TLS 1.3, require SNI)
|-- DoT (HAProxy, port 853, 443, TLS 1.3, require SNI)

Server (August 2, 2019 -- Switzerland)
|-- Let's Encrypt SSL
|-- Knot-resolver (OpenNIC, ICANN, forward-upstream to https://www.switch.ch/security/info/public-dns/)
|   |-- DNSCryptv2 (dnsdist, port 8443)
|   |-- doh-server (DoH, GET, POST -- m13253)
|   |-- |-- DoH (HAProxy, port 443, TLS 1.3, require SNI)
|-- DoT (HAProxy, port 853, 443, TLS 1.3, require SNI)
```

## Config file / Client
* Android DoH/DoT: [Nebulo App](https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen) | [personalDNSfilter App](https://zenz-solutions.de/personaldnsfilter/) | [Intra](https://play.google.com/store/apps/details?id=app.intra)
* iOS Dnscryptv2/DoH: [Dnscloak](https://itunes.apple.com/app/dnscloak-secure-dns-client/id1452162351)
* Dnscryptv2: [dnscrypt-proxy](https://github.com/jedisct1/dnscrypt-proxy/)
* Config files: [ Client config example ](https://github.com/ookangzheng/blahdns/tree/master/client-conf)

## Server information
- Switzerland🇨🇭(DoT, DoH, Dnscryptv2), Provider: ungleich.ch, Ipv6 only Hosting, BETA
  * IP: 2a0a:e5c0:2:2:0:c8ff:fe68:bf48
  * DNS-over-HTTPS:
    * https://doh-ch.blahdns.com/dns-query
    * IPv6: sdns://AgMAAAAAAAAAIFsyYTBhOmU1YzA6MjoyOjA6YzhmZjpmZTY4OmJmNDhdABJkb2gtY2guYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-ch.blahdns.com, ports 853, 443 
  * DNSCrypt v2, port 8443:
    * IPv6: sdns://AQMAAAAAAAAAJVsyYTBhOmU1YzA6MjoyOjA6YzhmZjpmZTY4OmJmNDhdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
    
- Japan🇯🇵(DoT, DoH, Dnscryptv2), Provider: Vultr
  * IP: 108.61.201.119, 2001:19f0:7001:1ded:5400:01ff:fe90:945b
  * DNS-over-HTTPS: 
    * https://doh-jp.blahdns.com/dns-query
    * IPv4 sdns://AgMAAAAAAAAADjEwOC42MS4yMDEuMTE5ABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6 sdns://AgMAAAAAAAAAKVsyMDAxOjE5ZjA6NzAwMToxZGVkOjU0MDA6MDFmZjpmZTkwOjk0NWJdABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-jp.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4:  sdns://AQMAAAAAAAAAEzEwOC42MS4yMDEuMTE5Ojg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
    * IPv6:
sdns://AQMAAAAAAAAALlsyMDAxOjE5ZjA6NzAwMToxZGVkOjU0MDA6MDFmZjpmZTkwOjk0NWJdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

- Germany🇩🇪(DoT, DoH, Dnscryptv2), Provider: Hetzner
  * IP: 159.69.198.101, 2a01:4f8:1c1c:6b4b::1
  * DNS-over-HTTPS: 
    * https://doh-de.blahdns.com/dns-query
    * IPv4 sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6 sdns://AgMAAAAAAAAAF1syYTAxOjRmODoxYzFjOjZiNGI6OjFdABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-de.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4:    sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t 
    * IPv6: sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

## Default blocked wildcard domain
* `*.wpad`

* `+.glassbox.+ `# https://techcrunch.com/2019/02/06/iphone-session-replay-screenshots

* `.+(xn--).+ ` # Blocking IDN and Non-ASCii Domain name, eg: `kdig xn--80ak6aa92e.com` (apple.com) 
1. https://www.reddit.com/r/pihole/comments/ap6ecf/regex_blocking_idn_and_nonascii_domain_names/
2. http://blog.netlab.360.com/idn_measurement_netlab/
3. https://github.com/mmotti/pihole-regex

## Awesome dns-resolver
https://gist.github.com/ookangzheng/c8fba46fe1dbcc8152e3231f53f91e86

## Huge thanks to those OSS and ORG
1. [Knot-resolver](https://github.com/CZ-NIC/knot-resolver)
2. [m13253](https://github.com/m13253/dns-over-https)
3. [DNSPrivacy.org](https://dnsprivacy.org)

## Site found which try to block DoH / DoT / Dnscrypt
1. https://forum.opnsense.org/index.php?PHPSESSID=s1mi1kp08r1c5lrr57rfklbtu0&topic=12238.0 (opensense)

## Disclaimer
* This is an experimental service, I'm not responsible for any down-time.
* Be sure you have agree with our [POLICY](https://github.com/ookangzheng/blahdns/#policy) before start to use. 
* This service is for PERSONAL use, huge traffic are not welcome, will drop PTR, ANY by default.
* We can't block some ads with Apps inside your phone (Youtube official app Ads, Facebook app Ads, Twitter app Ads... )

## Policy
* Use at your own risk. Under no circumstances will the operator be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from accessing or otherwise using this service (Blahdns server).
* The operator does not guarantee in any way the access, availability and continuity of the functioning of this service. 
* By using this website and service you consent to the disclaimer and agree to its terms and conditions.

## Donate

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KC33GK5CT2Q9Y&source=url)
|
<a href='https://ko-fi.com/P5P4GPQ8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
