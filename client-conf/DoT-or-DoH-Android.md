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
[2001:19f0:7001:3259:5400:02ff:fe71:0bc9]::853::DoT
45.32.55.94::853::DoT
[2001:19f0:7001:3259:5400:02ff:fe71:0bc9]::443::DoH::https://doh-jp.blahdns.com/dns-query
45.32.55.94::443::DoH::https://doh-jp.blahdns.com

```


<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/personal-dnsfilter-1.jpg" alt="Your image title" width="250"/>
<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/personal-dns-filter2.jpg" alt="Your image title" width="250"/>


### Solution 3 Android Pie 

For Android 9 Pie user, Go to Setting -> Wi-Fi -> Private DNS 

<img src="http://m.psyself.com/content/images/2018/08/Screenshot_20180807-102253-1.png" alt="Your image title" width="250"/>

