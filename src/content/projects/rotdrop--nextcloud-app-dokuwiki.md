---
repo: "rotdrop/nextcloud-app-dokuwiki"
name: "nextcloud-app-dokuwiki"
description: "NextCloud \"app\" which embeds an existing DokuWiki instance into NextCloud. Intended for SSO."
readmeQualityOk: true
url: "https://github.com/rotdrop/nextcloud-app-dokuwiki"
language: "PHP"
languages: ["PHP"]
languagePcts: [71]
stars: 11
forks: 6
openIssues: 2
closedIssues: 7
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2013-11-18T23:10:28Z"
lastCommitAt: "2026-09-17T08:50:39Z"
lastReleaseAt: "2025-04-08T09:27:54Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 75
maintainers: ["rotdrop", "nextcloud-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa0f7010707ebd9e36f3db4c2aba583a6d5761ac1079e22429346fa8fddfa95/rotdrop/nextcloud-app-dokuwiki"
---

DokuWiki Integration for Nextcloud
==================================

**Table of Contents**

- [Intro](#intro)
- [Installation](#installation)
- [Single Sign On](#single-sign-on)
  - [Using LDAP](#using-ldap)
  - [Using a DokuWiki Authentication Plugin](#using-a-dokuwiki-authentication-plugin)
- [Configuration](#configuration)
  - [Adminstration, Web-Server Setup](#adminstration-web-server-setup)
    - [TL;DR](#tldr)
    - [NC Domain equals DW Domain](#nc-domain-equals-dw-domain)
    - [Different Domains, but same Web-Server](#different-domains-but-same-web-server)
      - [Example for Apache](#example-for-apache)
      - [Example for NGINX](#example-for-nginx)
    - [Different Domains, different Web-Server](#different-domains-different-web-server)
      - [Example for Apache](#example-for-apache-1)
      - [Example for NGINX](#example-for-nginx-1)
- [jQuery Popup](#jquery-popup)
- [More Documentation should follow ...](#more-documentation-should-follow-)
- [Screenshots](#screenshots)
  - [Start Page](#start-page)
  - [Admin Settings](#admin-settings)
  - [JQuery Popup](#jquery-popup)

# Intro

This is a Nextcloud app which embeds a Dokuwiki instance into a
Nextcloud server…
