
 <p align="center">
  &nbsp;&nbsp;
  <br> All donations are welcome and any amount of money will help me to maintain this project 🥰 
</p> 

## Announcements

* We had migrated SSL CA from Buypass GO to Google CA. (2025/09/27)
* We had migrated DNS Stack to Knot-resolver + dnsdist
* Beta support `alfis.name` tld. `.anon, .btn, .conf, .index, .merch, .mirror, .mob, .screen, .srv, .ygg`
* For more old announcements, go [here](https://github.com/zoonderkins/blahdns/issues/36)


## Our features

* Block Trackers, Ads, Malwares, Phishing
* No ECS, DNSSEC ready, No logs, OpenNIC, Eth TLD, Yggdrasil 
* Support http://matoken.eth/ | http://mesh.ygg/ | http://i2pd.ygg/ | http://blahdns.oss/ | https://i❤.ws/
* BlahDNS status [Status Page](https://stats.blahdns.com) | [Dnsprivacy.org]([https://dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/](https://monitor.dnsprivacy.org/jenkins/job/dnsprivacy-monitoring/))


## How to setup / config DoH DoT Dnscrypt 👇
Config: [HERE for more details](https://github.com/zoonderkins/blahdns/tree/master/server-conf)


## Server architecture

```bash
Server

|-- Knot-resolver (DNS resolver, OpenNIC, ICANN, Alfis)
|-- Dnsdist
|   |   |-- DNSCryptv2 (encrypted-dns-server, port 8443 TCP/UDP)
|   |   |-- DoQ, port 784
|   |   |-- DoH/2, DoH/3 UDP port 443 (Post, Get)
|   |   |-- DoT, port 853 TCP

```

## Config file / Client
* Collection of blocklist use in BlahDNS: [Source](https://github.com/zoonderkins/blahdns/raw/master/hosts/source.txt) 
* Yggdrasil IPv6 Network: [Setup guide](https://github.com/zoonderkins/blahdns/blob/master/client-conf/yggdrasil.md)
* Android DoH/DoT: [Nebulo App](https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen) | [personalDNSfilter App](https://zenz-solutions.de/personaldnsfilter/) | [Intra](https://play.google.com/store/apps/details?id=app.intra)
* iOS Dnscryptv2/DoH: [Dnscloak](https://itunes.apple.com/app/dnscloak-secure-dns-client/id1452162351)
* Dnscryptv2: [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)
* Config files: [ Client config example ](https://github.com/zoonderkins/blahdns/tree/master/client-conf)

## Awesome dns-resolver
https://gist.github.com/zoonderkins/c8fba46fe1dbcc8152e3231f53f91e86

## Huge thanks to those OSS and ORG
1. [Knot-resolver](https://github.com/CZ-NIC/knot-resolver)
2. [DNSPrivacy.org](https://dnsprivacy.org)

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

[![Stargazers over time](https://starchart.cc/zoonderkins/blahdns.svg)](https://starchart.cc/zoonderkins/blahdns)
