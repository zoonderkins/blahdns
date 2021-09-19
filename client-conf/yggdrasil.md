## DNS-over-TLS for Yggdrasil (IPv6 only)

**Unbound conf**

```
forward-zone:
    name: "."
    forward-tls-upstream: yes
    # Yggdrasil
    forward-addr: 201:7eab:6f9a:514b:7b8e:f4b1:e376:afd1@853#dot-sg.blahdns.com
    forward-addr: 201:abf1:ba14:9efd:8975:9e9e:9636:786b@853#dot-de.blahdns.com
    forward-addr: 200:e338:984b:9635:503b:36ef:f56a:5b51@853#dot-fi.blahdns.com
    forward-addr: 201:b09c:4dc1:8d15:e34:3f68:679:73b8@853#dot-jp.blahdns.com
    forward-addr: 202:83df:29be:662e:c3f2:13df:813d:c3d1@853#dot-ch.blahdns.com
    
```

**Server IPv6**
```
Singapore: 201:7eab:6f9a:514b:7b8e:f4b1:e376:afd1
Japan: 201:b09c:4dc1:8d15:e34:3f68:679:73b8
Germany: 201:abf1:ba14:9efd:8975:9e9e:9636:786b
Finland: 200:e338:984b:9635:503b:36ef:f56a:5b51
Switzerland: 202:83df:29be:662e:c3f2:13df:813d:c3d1
```
