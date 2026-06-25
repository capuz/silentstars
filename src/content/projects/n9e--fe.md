---
repo: "n9e/fe"
name: "fe"
description: "Nightingale frontend"
url: "https://github.com/n9e/fe"
language: "TypeScript"
languages: ["TypeScript", "Less"]
languagePcts: [77, 23]
stars: 294
forks: 144
openIssues: 17
closedIssues: 118
watchers: 9
contributors: 32
recentReleases: 0
createdAt: "2023-03-09T09:39:00Z"
lastCommitAt: "2026-06-25T06:40:46Z"
lastReleaseAt: "2023-04-20T11:12:18Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 41
maintainers: ["jsers", "Fiona2016", "guguji5"]
openGraphImageUrl: "https://opengraph.githubassets.com/e373ef042a839a52389d8c21109bb4e801a7e5718a2264c9eea516b01f593b39/n9e/fe"
---

# n9e-fe

This is the web project for N9E

## Usage

The built pub folder can work in the [n9e](https://github.com/ccfos/nightingale/).

you can deploy the front-end code independently, just replace the pub with the new release.

## Dependencies

```
node: v16.x <= v16.15.0
npm: 8.x <= 8.5.5
```

## Installation

```
npm install
```

## Start

```
npm run dev
```

The back-end api proxy config is https://github.com/n9e/fe/blob/main/vite.config.ts#L41

Trouble shooting: https://answer.flashcat.cloud/questions/10010000000003759

## Build

```
npm run build
```

## Nginx Server

```
server {
    listen       8765;
    server_name  _;

    add_header Access-Control-Allow-Origin *;
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    root   front-end/page/path;    # e.g. /root/n9e/pub;

    location / {
        root front-end/page/path;    # e.g. /root/n9e/pub;
        try_files $uri /index.html;
    }
   location /api/ {
        proxy_pass http://n9e.api.server;   # e.g. 127.0.0.1:18000
    }
}
```

## Notice

- `vite.config.js` and `tsconfig.json` should both configure to make sure alias works
- Add…
