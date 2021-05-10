# AdGuard DNSProxy Example for Linux / Mac OSX

## Configuration sample

```
./dnsproxy -l ::1 -l 127.0.0.1 -p 53 -u quic://dot-jp.blahdns.com:784 -f 1.0.0.2:53 -b 1.0.0.2:53 --refuse-any
```

Configuration above listen to localhost `ipv4` and `ipv6`, use `quic` as upstream, `-f` as fallback server, `-b` as bootstrap lookup (only affected when using DoT, DoH, DoQ)

Additional setup

* `--refuse-any`: refuse `ANY` type
* `-r 10`: rate limit `10` per second
* `-p 53`: listen to port `53`
* If you want to setup a secured DNS local server, please use something like this `./dnsproxy -p=0 --tls-key=/.acme.sh/xxx.com/xxx.key --tls-cert=/.acme.sh/xxx.com/fullchain.cer --tls-port=853`
