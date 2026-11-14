---
repo: "Ajnasz/wolweb"
name: "wolweb"
description: "Wake on LAN web application. WolWeb allows you to remotely wake up devices on your network using their MAC addresses. This is particularly useful for managing devices that support Wake-on-LAN (WoL) functionality."
readmeQualityOk: true
url: "https://github.com/Ajnasz/wolweb"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [41, 35]
stars: 25
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-28T16:59:37Z"
lastCommitAt: "2026-11-14T10:46:31Z"
lastReleaseAt: "2024-12-31T10:37:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 49
maintainers: ["Ajnasz"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6805168da9084e19fb1bbe0fba86ffaeb644055a7d28605cb90ef053e7df4bb/Ajnasz/wolweb"
---

# WolWeb

Wake on LAN web application. WolWeb allows you to remotely wake up devices on your network using their MAC addresses. This is particularly useful for managing devices that support Wake-on-LAN (WoL) functionality.

## Configuration

To configure WolWeb, create a YAML file with the following structure. This file contains the MAC addresses of the devices you want to wake up.
If you set the `host` field, you will be able to ping the device to check if it is online.

config.yaml

```yaml
PrivilegedPing: false
MacAddresses:
  - name: "NAS"
    address: "00:11:22:00:00:00"
    host: "no.such.host.org"
  - name: "Home Server"
    address: "00:11:22:00:00:01"
    host: "192.168.60.2"
  - name: "File Server"
    address: "00:11:22:00:00:02"
    host: "192.168.60.3"
  - name: "Media Center PC"
    address: "00:11:22:00:00:03"
```

## Usage

```bash
$ wolweb -config /path/to/config.yaml
```

### Customizing the listening address and port

You can customize the address and port on which the WolWeb application listens by using the `-address` flag. The default address is `:8951`.

```bash
$ wolweb -config /path/to/config.yaml -address :8080
```

## Building the Golang App

To build the…
