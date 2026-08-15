---
repo: "chitoku-k/HomoChecker"
name: "HomoChecker"
description: "PHP + Riot.js Experiment"
readmeQualityOk: true
url: "https://github.com/chitoku-k/HomoChecker"
homepage: "https://homo.chitoku.jp:4545/"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["php", "riot", "docker", "http3"]
stars: 25
forks: 3
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2016-06-29T14:36:03Z"
lastCommitAt: "2026-08-15T04:03:23Z"
lastReleaseAt: "2020-04-25T15:04:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["renovate[bot]", "dependabot[bot]", "chitoku-k"]
openGraphImageUrl: "https://opengraph.githubassets.com/c381ffc11b5b213111080ba4d1faba32d2887287a37b4fd89c3d1aa1a81fc610/chitoku-k/HomoChecker"
---

HomoChecker
===========

HomoChecker はホモ（[@mpyw](https://x.com/mpyw)）にリダイレクトするホモのためのホモの輪です。

## 目次

- [ホモへの手引き](#ホモへの手引き)
- [本番環境](#本番環境)
- [開発環境](#開発環境)
- [テスト](#テスト)
- [API](https://github.com/chitoku-k/HomoChecker/blob/HEAD/api/README.md)

## ホモへの手引き

[@java\_shit](https://x.com/java_shit) にカミングアウトしてください。[@mpyw](https://x.com/mpyw) と関係があってもなくても構いません。

### 設定方法

DNS を適切に設定したあと、お使いの Web サーバーに合わせて設定を行います。  
HomoChecker は HTTP/1.1、HTTP/2、HTTP/3 に対応しています。

#### Apache

```apache
<VirtualHost *:80>
    ServerName homo.example.com
    Redirect permanent / https://x.com/mpyw
</VirtualHost>
```

#### nginx

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name homo.example.com;
    return 301 https://x.com/mpyw;
}
```

#### H2O

```yaml
hosts:
    "homo.example.com:80":
        listen:
            port: 80
        paths:
            "/":
                redirect:
                    url: https://x.com/mpyw
                    status: 301
```

#### Cloudflare

1. DNS \> Records で `homo.example.com` が Cloudflare に Proxy されるよう設定します。
2. Rules \> Redirect Rules を作成します。
   - Rule name に任意の名前を入力します。
   - Custom filter expression を選択します。
   - Field に `Hostname`、Operator に…
