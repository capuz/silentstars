---
repo: "AndreyBarmaley/linux-terminal-service-manager"
name: "linux-terminal-service-manager"
description: "Linux Terminal Service Manager (LTSM) is a set of service programs that allows remote computers to connect to a Linux operating system computer using a remote terminal session (over VNC or RDP)"
url: "https://github.com/AndreyBarmaley/linux-terminal-service-manager"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["linux", "remote-desktop", "server-side"]
stars: 55
forks: 3
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2021-05-14T08:46:37Z"
lastCommitAt: "2026-06-27T00:48:47Z"
lastReleaseAt: "2026-02-01T09:17:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 47
maintainers: ["AndreyBarmaley"]
openGraphImageUrl: "https://opengraph.githubassets.com/5015d8030fa5ba2fc6650ddbdafeb1fd1c65a79a2d35fcaa33203902264147cc/AndreyBarmaley/linux-terminal-service-manager"
---

# linux-terminal-service-manager
Linux Terminal Service Manager (LTSM) is a set of service programs that allows remote computers to connect to a Linux operating system computer using a remote terminal session (over VNC or RDP)

# Linux Only!
main dependencies:  
  - systemd, sd-bus  
  - [sdbus-cpp](https://github.com/Kistler-Group/sdbus-cpp)  
  - system libs: gnutls, xcb, zlib  

## Developer indicators

# Demo access
You can connect via HTML5 [right now](https://ltsm-soft.ru/novnc)
```
--- vnc
vncviewer 62.109.12.152
--- rdp
xfreerdp /v:62.109.12.152

logins: demo1, demo2, demo3, demo4
pass: demo
```

# Docker demonstration
```
docker pull docker.io/ltsm/devel
docker run -i -t docker.io/ltsm/devel
```

# The scheme of interaction of components  
  
The following components are implemented:  

# LTSM_service
The main service, dbus owner *ltsm.service.manager*, receives commands from LTSM_connector, and starts login and users sessions based on Xvfb (GPLv3 license)  
see also: [wiki: LTSM service](https://github.com/AndreyBarmaley/linux-terminal-service-manager/wiki/LTSM-service)  

# LTSM_connector
It is just a graphics protocol handler, and the main network part is handled by…
