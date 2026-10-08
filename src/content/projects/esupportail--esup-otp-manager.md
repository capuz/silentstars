---
repo: "EsupPortail/esup-otp-manager"
name: "esup-otp-manager"
description: "web application for managing esup-otp multi-factor authentication (for users & admins)"
readmeQualityOk: true
url: "https://github.com/EsupPortail/esup-otp-manager"
homepage: "https://www.esup-portail.org/wiki/display/esupotp"
language: "JavaScript"
languages: ["JavaScript", "Pug"]
languagePcts: [74, 20]
stars: 9
forks: 11
openIssues: 4
closedIssues: 30
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2016-03-17T08:42:49Z"
lastCommitAt: "2026-10-08T10:51:08Z"
lastReleaseAt: "2024-02-29T11:29:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 78
maintainers: ["floriannari", "dependabot[bot]", "auxepaul"]
openGraphImageUrl: "https://opengraph.githubassets.com/71757ce1dc92270e898a8ba1d3cdb9d68fcd438eb5cd928935075853564973da/EsupPortail/esup-otp-manager"
---

# esup-otp-manager

Manager for the esup-otp-api. Allow users to edit their preferences and admins to administrate ;)

## Version

2.0 **Require `npm install`**

## Requirements

- [esup-otp-api](https://github.com/EsupPortail/esup-otp-api)

## Installation

```sh
# Download esup-otp-manager
git clone https://github.com/EsupPortail/esup-otp-manager.git
# Install required libraries
npm install
# change the fields values in properties/esup.json to your installation, some explanations are in `#how_to` attributes
# Start server
npm start
```

### Behind Apache

- https

```apache
RequestHeader set X-Forwarded-Proto https
RequestHeader set X-Forwarded-Port 443

RewriteEngine On

RewriteCond %{QUERY_STRING} transport=websocket [NC]
RewriteRule /(.*) ws://127.0.0.1:4000/$1 [P]

<Location />
ProxyPass http://127.0.0.1:4000/ retry=1
ProxyPassReverse http://127.0.0.1:4000/
</Location>
```

### Systemd

```ini
[Unit]
Description=esup-otp-manager nodejs app
Documentation=https://github.com/EsupPortail/esup-otp-manager
After=network.target

[Service]
Type=simple
User=esup
WorkingDirectory=/opt/esup-otp-manager
ExecStart=/usr/bin/node run
Restart=on-failure

[Install]
WantedBy=multi-user.target…
