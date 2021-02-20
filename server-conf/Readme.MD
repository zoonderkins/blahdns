## Configuration details 

**If you need uncensored DoH, please use `/uncensor` instead of `/dns-query`**
```
https://doh-jp.blahdns.com/uncensor ( uncensor )
https://doh-jp.blahdns.com/dns-query ( censored )
```


- Switzerland 🇨🇭(DoT, DoH, Dnscrypt, DoQ), Provider: ISPlevel
  * IP: 45.90.57.121, 2a05:9406::175
  * DNS-over-QUIC: `quic://dot-ch.blahdns.com:784`
  * DNS-over-HTTPS (port 4443):
    * https://doh-ch.blahdns.com:4443/dns-query
    * IPv4: sdns://AgMAAAAAAAAAETQ1LjkwLjU3LjEyMTo0NDQzABJkb2gtY2guYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6: sdns://AgMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjQ0NDMAEmRvaC1jaC5ibGFoZG5zLmNvbQovZG5zLXF1ZXJ5
  * DNS-over-TLS: dot-ch.blahdns.com, ports 853, 4443
  * DNSCrypt v2, port 8443:
    * IPv4: sdns://AQMAAAAAAAAAETQ1LjkwLjU3LjEyMTo4NDQzIGwtSBHT3HesNLSJKRuzyT4LBhtDvQWV_oH9ISdBP0i1GzIuZG5zY3J5cHQtY2VydC5ibGFoZG5zLmNvbQ
    * IPv6: sdns://AQMAAAAAAAAAFVsyYTA1Ojk0MDY6OjE3NV06ODQ0MyBsLUgR09x3rDS0iSkbs8k-CwYbQ70Flf6B_SEnQT9ItRsyLmRuc2NyeXB0LWNlcnQuYmxhaGRucy5jb20

- Finland 🇫🇮(DoT,DoH,Dnscryptv2), Provider: Hetzner
  * IP: 95.216.212.177, 2a01:4f9:c010:43ce::1
  * DNS-over-HTTPS:
    * https://doh-fi.blahdns.com/dns-query
    * IPv4: sdns://AgMAAAAAAAAADjk1LjIxNi4yMTIuMTc3ABJkb2gtZmkuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6: sdns://AgMAAAAAAAAAF1syYTAxOjRmOTpjMDEwOjQzY2U6OjFdABJkb2gtZmkuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-fi.blahdns.com, ports 853, 443 
  * DNSCrypt v2, port 8443:
    * IPv4: sdns://AQMAAAAAAAAAFVs5NS4yMTYuMjEyLjE3N106ODQ0MyDImNtJLgiBNj_Yofc1UYbQM0iAE_MsSp_yvTScBtxTFBsyLmRuc2NyeXB0LWNlcnQuYmxhaGRucy5jb20
    * IPv6: sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

- Germany 🇩🇪(DoT, DoH, Dnscryptv2), Provider: Hetzner
  * IP: 78.46.244.143, 2a01:4f8:c17:ec67::1
  * DNS-over-HTTPS: 
    * https://doh-de.blahdns.com/dns-query
    * IPv4: sdns://AgMAAAAAAAAADTc4LjQ2LjI0NC4xNDMAEmRvaC1kZS5ibGFoZG5zLmNvbQovZG5zLXF1ZXJ5
    * IPv6: sdns://AgMAAAAAAAAAFlsyYTAxOjRmODpjMTc6ZWM2Nzo6MV0AEmRvaC1kZS5ibGFoZG5zLmNvbQovZG5zLXF1ZXJ5
  * DNS-over-TLS: dot-de.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4: sdns://AQMAAAAAAAAAEjc4LjQ2LjI0NC4xNDM6ODQ0MyBThOgUQxQpPlbdGxQKHvFyrUe9uheZyJVylJU9A061xxsyLmRuc2NyeXB0LWNlcnQuYmxhaGRucy5jb20
    * IPv6: sdns://AQMAAAAAAAAAG1syYTAxOjRmODpjMTc6ZWM2Nzo6MV06ODQ0MyDImNtJLgiBNj_Yofc1UYbQM0iAE_MsSp_yvTScBtxTFBsyLmRuc2NyeXB0LWNlcnQuYmxhaGRucy5jb20

- Japan 🇯🇵(DoT, DoH, Dnscrypt, DoQ), Provider: Linode
  * IP: 139.162.112.47, 2400:8902::f03c:92ff:fe27:344b
  * DNS-over-QUIC: `quic://dot-jp.blahdns.com:784`
  * DNS-over-HTTPS: 
    * https://doh-jp.blahdns.com/dns-query
    * IPv4: sdns://AgMAAAAAAAAADjEzOS4xNjIuMTEyLjQ3ABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6: sdns://AgMAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-jp.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4: sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
    * IPv6: sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t

- Singapore 🇸🇬(DoT, DoH, Dnscrypt, DoQ), Provider: Linode
  * IP: 192.53.175.149, 2400:8901::f03c:92ff:fe27:870a
  * DNS-over-QUIC: `quic://dot-sg.blahdns.com:784`
  * DNS-over-HTTPS: 
    * https://doh-sg.blahdns.com/dns-query
    * IPv4: sdns://AgMAAAAAAAAADjE5Mi41My4xNzUuMTQ5ABJkb2gtc2cuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
    * IPv6: sdns://AgMAAAAAAAAAIFsyNDAwOjg5MDE6OmYwM2M6OTJmZjpmZTI3Ojg3MGFdABJkb2gtc2cuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ
  * DNS-over-TLS: dot-sg.blahdns.com, ports 853, 443
  * DNSCrypt v2, port 8443:
    * IPv4: sdns://AQMAAAAAAAAAEzE5Mi41My4xNzUuMTQ5Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
    * IPv6: sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDE6OmYwM2M6OTJmZjpmZTI3Ojg3MGFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t
