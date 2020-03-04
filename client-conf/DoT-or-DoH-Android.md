## DoT and DoH on Android

### Solution 1 with Nebulo app

1. Use app [Nebulo](https://play.google.com/store/apps/details?id=com.frostnerd.smokescreen)
2. Follow tutorial down below to setup blahdns
  1. Manually type or download a server config file from [HERE](https://smokescreen.app/servers/adblockers)

**DoH**


<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/nebulo-doh.jpg" alt="Your image title" width="250"/>


**DoT**


<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/nebulo-dot.jpg" alt="Your image title" width="250"/>


### Solution 2 with personalDNSfilter app (Android)

App download: [https://zenz-solutions.de/personaldnsfilter](https://zenz-solutions.de/personaldnsfilter)


**Config file**

```
## DoH with Adsblock, change dns-query to uncensor no filter DNS

95.216.212.177::443::DOH::https://doh-fi.blahdns.com/dns-query
45.32.55.94::443::DOH::https://doh-jp.blahdns.com/dns-query
159.69.198.101::443::DOH::https://doh-de.blahdns.com/dns-query

## DoT 
95.216.212.177::853::DOT::dot-fi.blahdns.com
45.32.55.94::853::DOT::dot-jp.blahdns.com
159.69.198.101::853::DOT::dot-de.blahdns.com

## Ipv6 DoT
[2a01:4f9:c010:43ce::1]::853::DOT::dot-fi.blahdns.com
[2001:19f0:7001:3259:5400:02ff:fe71:0bc9]::853::DOT::dot-jp.blahdns.com
[2a01:4f8:1c1c:6b4b::1]::853::DOT::dot-de.blahdns.com

## Ipv6 DoH
[2a01:4f9:c010:43ce::1]::443::DOH::https://doh-fi.blahdns.com/dns-query
[2001:19f0:7001:3259:5400:02ff:fe71:0bc9]::443::DOH::https://doh-jp.blahdns.com/dns-query
[2a01:4f8:1c1c:6b4b::1]::443::DOH::https://doh-de.blahdns.com/dns-query

```


<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/personal-dnsfilter-1.jpg" alt="Your image title" width="250"/>
<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/personal-dns-filter2.jpg" alt="Your image title" width="250"/>


### Solution 3 Android Pie 

For Android 9 Pie user, Go to Setting -> Wi-Fi -> Private DNS 

<img src="http://m.psyself.com/content/images/2018/08/Screenshot_20180807-102253-1.png" alt="Your image title" width="250"/>

