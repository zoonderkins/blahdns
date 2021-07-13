## DoH over HTTP/3, UDP (protocol QUIC)

### Via `curl --http3` 
Mac OSX, installation guide: https://developers.cloudflare.com/http3/curl-brew
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

### Via Docker curl

```
docker run -it --rm ymuski/curl-http3 curl --http3 -H 'accept: application/dns-message' -v 'https://doh-jp.blahdns.com/dns-query?dns=q80BAAABAAAAAAAAA3d3dwdleGFtcGxlA2NvbQAAAQAB' | hexdump -C
```

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
139.162.112.47::443::DOH::https://doh-jp.blahdns.com/dns-query
78.46.244.143::443::DOH::https://doh-de.blahdns.com/dns-query
45.91.92.121::443::DOH::https://doh-ch.blahdns.com/dns-query
192.53.175.149::443::DOH::https://doh-sg.blahdns.com/dns-query

## DoT 
95.216.212.177::853::DOT::dot-fi.blahdns.com
139.162.112.47::853::DOT::dot-jp.blahdns.com
78.46.244.143::853::DOT::dot-de.blahdns.com
45.91.92.121::853::DOT::dot-ch.blahdns.com
192.53.175.149::853::DOT::dot-sg.blahdns.com

## Ipv6 DoT
[2a01:4f9:c010:43ce::1]::853::DOT::dot-fi.blahdns.com
[2400:8902::f03c:92ff:fe27:344b]::853::DOT::dot-jp.blahdns.com
[2a01:4f8:c17:ec67::1]::853::DOT::dot-de.blahdns.com
[2400:8901::f03c:92ff:fe27:870a]::853::DOT::dot-sg.blahdns.com
[2a0e:dc0:6:23::2]::853::DOT::dot-ch.blahdns.com

## Ipv6 DoH
[2a01:4f9:c010:43ce::1]::443::DOH::https://doh-fi.blahdns.com/dns-query
[2400:8902::f03c:92ff:fe27:344b]::443::DOH::https://doh-jp.blahdns.com/dns-query
[2a01:4f8:c17:ec67::1]::443::DOH::https://doh-de.blahdns.com/dns-query
[2400:8901::f03c:92ff:fe27:870a]::443::DOH::https://doh-sg.blahdns.com/dns-query
[2a0e:dc0:6:23::2]::443::DOH::https://doh-ch.blahdns.com/dns-query
```


<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/personal-dnsfilter-1.jpg" alt="Your image title" width="250"/>
<img src="https://github.com/ookangzheng/blahdns/raw/master/client-conf/img-source/personal-dns-filter2.jpg" alt="Your image title" width="250"/>


### Solution 3 Android Pie 

For Android 9 Pie user, Go to Setting -> Wi-Fi -> Private DNS 

