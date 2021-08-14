
 <p align="center">
  &nbsp;&nbsp;
  All donations are welcome and any amount of money will help me to maintain this project 🥰 
  <br> Around 65 EUR per month 
</p> 

## Announcements

* iOS 14 and Big Sur native DoT / DoH config file, check out [https://encrypted-dns.party/](https://encrypted-dns.party/) | Credit to: [@nitrohorse](https://gitlab.com/nitrohorse/ios14-encrypted-dns-mobileconfigs/-/tree/master)
* For more old announcements, go [here](https://github.com/ookangzheng/blahdns/issues/36)

## Our features

* Block Trackers, Ads, Malwares, Phishing
* No ECS, DNSSEC ready, No logs, OpenNIC, Eth TLD, Yggdrasil 
* Here are blocked by default on BlahDNS
`data.mob.com, google-analytics, googleadservices, amazon-adsystem, crashlytics.com, analytics.yahoo, bugsnag, sentry, etc.. `
* Support http://matoken.eth/ | http://mesh.ygg/ | http://i2pd.ygg/ | http://blahdns.oss/ | https://i❤.ws/
* BlahDNS status [Status Page](https://stats.blahdns.com) | [Dnsprivacy.org](https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/)

## DoH CDN (provider: bunny.net)

```
https://doh1.blahdns.com/uncensor 
https://doh2.blahdns.com/uncensor 
https://doh1.blahdns.com/dns-query (censored)
https://doh2.blahdns.com/dns-query (censored)
```

## DNS-over-HTTPS example 

`curl` DNS-over-HTTP/2 TCP

```
// Censored 
curl --doh-url https://doh-jp.blahdns.com/dns-query https://ssl.google-analytics.com
// Return 
curl: (7) Failed to connect to ssl.google-analytics.com port 443: Connection refused

// Uncensor
curl --doh-url https://doh-jp.blahdns.com/uncensor https://ssl.google-analytics.com
// Return
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/analytics/">here</A>.
</BODY></HTML>
```

`curl` DNS-over-HTTP/3 UDP with QUIC protocol example on Mac OSX 

```
curl --http3 -H 'accept: application/dns-message' -v 'https://doh-jp.blahdns.com/dns-query?dns=q80BAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB' | hexdump -C
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 139.162.112.47:443...
* Connect socket 5 over QUIC to 139.162.112.47:443
* Sent QUIC client Initial, ALPN: h3,h3-29,h3-28,h3-27
* Connected to doh-jp.blahdns.com () port 443 (#0)
* h3 [:method: GET]
* h3 [:path: /dns-query?dns=q80BAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB]
* h3 [:scheme: https]
* h3 [:authority: doh-jp.blahdns.com]
* h3 [user-agent: curl/7.78.0-DEV]
* h3 [accept: application/dns-message]
* Using HTTP/3 Stream ID: 0 (easy handle 0x7f9e6e00c200)
> GET /dns-query?dns=q80BAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB HTTP/3
> Host: doh-jp.blahdns.com
> user-agent: curl/7.78.0-DEV
> accept: application/dns-message
>
< HTTP/3 200
< content-type: application/dns-message
<
{ [75 bytes data]
100    75    0    75    0     0    326      0 --:--:-- --:--:-- --:--:--   331
* Connection #0 to host doh-jp.blahdns.com left intact
00000000  ab cd 81 a0 00 01 00 01  00 00 00 01 03 77 77 77  |.............www|
00000010  07 65 78 61 6d 70 6c 65  03 63 6f 6d 00 00 01 00  |.example.com....|
00000020  01 03 77 77 77 07 65 78  61 6d 70 6c 65 03 63 6f  |..www.example.co|
00000030  6d 00 00 01 00 01 00 00  34 a0 00 04 5d b8 d8 22  |m.......4...].."|
00000040  00 00 29 10 00 00 00 80  00 00 00                 |..)........|
0000004b

```

## How to setup / config DoH DoT Dnscrypt 👇
Config: [HERE for more details](https://github.com/ookangzheng/blahdns/tree/master/server-conf)


## Server architecture

```bash
Server (Switzerland, Germany, Finland, Japan, Singapore)

|-- Knot-resolver (DNS resolver, OpenNIC, ICANN, Yggdrasil, ETH)
|-- Dnsdist (cache, loadbalance)
|   |   |-- DNSCryptv2 (encrypted-dns-server, port 8443)
|   |   |-- Dnsproxy (DoQ, port 784)
|   |-- DoH/http3 (port 443/udp)
|   |-- doh-server (DoH, GET, POST -- m13253)
|   |   |-- |-- DoH (HAProxy, port 443, TLS 1.3, require SNI)
|-- DoT (HAProxy, port 853, TLS 1.3, require SNI)

```

## Config file / Client
* Collection of blocklist use in BlahDNS: [Source](https://github.com/ookangzheng/blahdns/raw/master/hosts/source.txt) 
* Yggdrasil IPv6 Network: [Setup guide](https://github.com/ookangzheng/blahdns/blob/master/client-conf/yggdrasil.md)
* Android DoH/DoT: [Nebulo App](https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen) | [personalDNSfilter App](https://zenz-solutions.de/personaldnsfilter/) | [Intra](https://play.google.com/store/apps/details?id=app.intra)
* iOS Dnscryptv2/DoH: [Dnscloak](https://itunes.apple.com/app/dnscloak-secure-dns-client/id1452162351)
* Dnscryptv2: [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)
* Config files: [ Client config example ](https://github.com/ookangzheng/blahdns/tree/master/client-conf)

## Awesome dns-resolver
https://gist.github.com/ookangzheng/c8fba46fe1dbcc8152e3231f53f91e86

## Huge thanks to those OSS and ORG
1. [Knot-resolver](https://github.com/CZ-NIC/knot-resolver)
2. [m13253](https://github.com/m13253/dns-over-https)
3. [DNSPrivacy.org](https://dnsprivacy.org)

## Buy me some coffee :coffee: 

<p align="center">  
  <a href="https://www.paypal.com/paypalme/okz5289tw?locale.x=en_GB"><img alt="Donate using Paypal" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"></a>
  &nbsp;&nbsp;
  <a href='https://ko-fi.com/P5P4GPQ8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>

## DISCLAIMER
* This is a HOBBY service. The operator does not guarantee in any way the access, availability and continuity of the functioning of this service. 
* Use at your own risk. Under no circumstances will the operator be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from accessing or otherwise using this service (Blahdns server).
* By using this website and service you consent to the disclaimer and agree to its terms and conditions.

[![Stargazers over time](https://starchart.cc/ookangzheng/blahdns.svg)](https://starchart.cc/ookangzheng/blahdns)
