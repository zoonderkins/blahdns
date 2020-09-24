 [![HitCount](http://hits.dwyl.io/ookangzheng/blahdns.svg)](http://hits.dwyl.io/ookangzheng/blahdns) 
 
<p align="center">
  &nbsp;&nbsp;
  All donations are welcome and any amount of money will help me to maintain this project 🥰 
</p> 


<p align="center">  
  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KC33GK5CT2Q9Y&source=url"><img alt="Donate using Paypal" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"></a>
  &nbsp;&nbsp;
  <a href="https://liberapay.com/ookangzheng/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
  &nbsp;&nbsp;
  <a href='https://ko-fi.com/P5P4GPQ8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</p>


## Announcements
* Singapore server will be announced to public soon.
* For more old announcements, go [here](https://github.com/ookangzheng/blahdns/issues/36)
* Blahdns blacklist [Hosts](https://oooo.b-cdn.net/blahdns/adsblock.txt) or [RPZ](https://oooo.b-cdn.net/blahdns/rpz.txt) (Need some refactor and auto CI/CD)

## Our features

* Block Trackers, Ads, Malwares
* No ECS, DNSSEC ready, No logs, OpenNIC, Eth TLD, Yggdrasil 
* Both trackers are blocked by default. 
`data.mob.com, google-analytics, googleadservices, amazon-adsystem, crashlytics.com analytics.yahoo, doubleclick.net, hm.baidu.com, etc.. `
* Support http://matoken.eth/ | http://mesh.ygg/ | http://i2pd.ygg/ | http://blahdns.oss/ | https://i❤.ws/

## Beta DoH CDN

```
https://doh1.blahdns.com/uncensor 
https://doh2.blahdns.com/uncensor 
https://doh1.blahdns.com/dns-query (censored)
https://doh2.blahdns.com/dns-query (censored)
```

## Curl with DoH for testing purpose
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

## How to setup / config DoH DoT Dnscrypt 👇
Config: [HERE for more details](https://github.com/ookangzheng/blahdns/tree/master/server-conf)

## Server status
* Server status [UpTimeRobot](https://stats.blahdns.com) | [Dnsprivacy.org](https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/)

## Server architecture

```bash
Server (Germany, Finland, Japan, Singapore)
|-- Let's Encrypt SSL
|-- Knot-resolver (OpenNIC, ICANN, Yggdrasil, ETH)
|   |-- DNSCryptv2 (dnsdist, port 8443)
|   |-- doh-server (DoH, GET, POST -- m13253)
|   |-- |-- DoH (HAProxy, port 443, TLS 1.3, require SNI)
|-- DoT (HAProxy, port 853, 443, TLS 1.3, require SNI)

## Japan, Singapore use Quad9 as upstream
```

## Config file / Client
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

## Disclaimer
* This is an experimental service, I'm not responsible for any down-time.
* Make sure to agree with our [POLICY](https://github.com/ookangzheng/blahdns/#policy) before using the service. 
* This service is for PERSONAL use, huge traffic is not welcomed, will drop PTR, ANY by default.
* We can't block some ads within Apps inside your phone (Youtube official app Ads, Facebook app Ads, Twitter app Ads... )

## Policy
* Use at your own risk. Under no circumstances will the operator be held responsible or liable in any way for any claims, damages, losses, expenses, costs or liabilities whatsoever (including, without limitation, any direct or indirect damages for loss of profits, business interruption or loss of information) resulting or arising directly or indirectly from accessing or otherwise using this service (Blahdns server).
* The operator does not guarantee in any way the access, availability and continuity of the functioning of this service. 
* By using this website and service you consent to the disclaimer and agree to its terms and conditions.

[![Stargazers over time](https://starchart.cc/ookangzheng/blahdns.svg)](https://starchart.cc/ookangzheng/blahdns)
