---
repo: "DustyArmstrong/xen-orchestra-arm"
name: "xen-orchestra-arm"
description: "Xen Orchestra for Docker"
readmeQualityOk: true
url: "https://github.com/DustyArmstrong/xen-orchestra-arm"
language: "Dockerfile"
languages: ["Dockerfile", "Jinja"]
languagePcts: [43, 43]
topics: ["xen-orchestra", "raspberry-pi", "docker", "xcp-ng", "aarch64", "dockerfile", "arm"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-04-03T20:29:17Z"
lastCommitAt: "2026-11-07T13:53:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 46
maintainers: ["DustyArmstrong"]
openGraphImageUrl: "https://opengraph.githubassets.com/cad20382aaa386b2b89fe39febd211b26f632c30c1c6b3091b73469dcbc594f9/DustyArmstrong/xen-orchestra-arm"
---

# Xen Orchestra ARM (Raspberry Pi)

This is a repository for a dockerized Xen Orchestra. Built using Bookworm as a base, for Raspberry Pi 64-bit (tested on a Raspberry Pi 4 2026/07/11).

If you are using an Nginx proxy, ensure `http2` is enabled to use V6.  

This image is semi-actively maintained and will continue to be updated periodically. The image itself is available on Dockerhub.

## Getting Started

You can get this immediately using this docker-compose file. This brings up the service on port 80. For SSL, read on.

```
version: '3'
services:
    xen-orchestra:
        restart: unless-stopped
        image: dustyarmstrong/arm-xoa:latest
        container_name: xoa
        stop_grace_period: 1m
        ports:
            - "80:80"
            #- "443:443"
        environment:
            - HTTP_PORT=80
            #- HTTPS_PORT=443

            #redirect takes effect only if HTTPS_PORT is defined
            #- REDIRECT_TO_HTTPS=true

            #if HTTPS_PORT is defined and CERT/KEY paths are empty, a self-signed certificate will be generated 
            #- CERT_PATH='/cert.pem'
            #- KEY_PATH='/cert.key'
        # capabilities are needed for NFS mount…
