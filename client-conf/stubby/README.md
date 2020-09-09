# MacOS guide

Install: `brew install stubby `

Restart: `sudo brew services restart stubby`

Just run: `sudo stubby -C /usr/local/etc/stubby/stubby.yml`

Check log: `sudo tail -f /usr/local/var/log/stubby/stubby.log`

Stubby dir: `/usr/local/etc/stubby`

Stubby config example: [HERE](https://github.com/ookangzheng/blahdns/blob/master/client-conf/stubby/stubby.yml)

For more about Stubby, [HERE](https://dnsprivacy.org/wiki/pages/viewpage.action?pageId=3145812)
