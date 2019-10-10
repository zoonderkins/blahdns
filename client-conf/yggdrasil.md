## DNS-over-TLS for Yggdrasil (IPv6 only)

**Unbound conf**

```
forward-zone:
    name: "."
    forward-tls-upstream: yes
    # Yggdrasil
    forward-addr: 201:742c:871d:24ef:c850:e1ff:41c7:12bc@443#dot-de.blahdns.com
    forward-addr: 201:4a30:a6f7:e766:84bb:f6b4:bcd8:3483@443#dot-ch.blahdns.com
    forward-addr: 202:f97c:46c8:d7b4:71f1:7e8b:2e64:353d@443#dot-jp.blahdns.com
    
```

**Server IPv6**
```
Japan: 202:f97c:46c8:d7b4:71f1:7e8b:2e64:353d 
Germany: 201:742c:871d:24ef:c850:e1ff:41c7:12bc
Switzerland: 201:4a30:a6f7:e766:84bb:f6b4:bcd8:3483
```
