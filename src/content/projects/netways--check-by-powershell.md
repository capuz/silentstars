---
repo: "NETWAYS/check_by_powershell"
name: "check_by_powershell"
description: "Icinga check plugin to run checks and other commands directly on any Windows system using WinRM (Windows Remote Management). Main use case would be to call one of the plugins from the Icinga Powershell Framework. This will avoid the requirement of installing an Icinga 2 agent on every Windows system."
url: "https://github.com/NETWAYS/check_by_powershell"
homepage: "https://www.netways.de/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["windows", "powershell", "icinga", "plugin", "winrm", "monitoring"]
stars: 18
forks: 3
openIssues: 2
closedIssues: 12
watchers: 8
contributors: 26
recentReleases: 0
createdAt: "2020-07-06T18:34:13Z"
lastCommitAt: "2026-07-02T06:33:16Z"
lastReleaseAt: "2025-07-14T10:47:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 65
maintainers: ["martialblog", "RincewindsHat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/193d486994049634057bae537b3aa76982520f915ea9f1d416783c4c0d92baba/NETWAYS/check_by_powershell"
---

# check_by_powershell

Icinga check plugin to run checks and other commands directly on any Windows system using
WinRM (Windows Remote Management) and Powershell.

Main use case would be to call one of the [plugins](https://github.com/Icinga/icinga-powershell-plugins)
from the [Icinga Powershell Framework](https://github.com/Icinga/icinga-powershell-framework). This will avoid the
requirement of installing an Icinga 2 agent on every Windows system.

The plugin will require WinRM to be preconfigured for access with a HTTPs or HTTP connection.

Supported authentication methods:

* Basic with local users
* NTLM with local or AD accounts
* TLS client certificate
* (SSH connection)

Not supported at the moment is Kerberos.

## Usage

```
Arguments:
  -H, --host string          Host name, IP Address of the remote host (default "127.0.0.1")
  -p, --port int             Port number WinRM (default: 5985 & 5986 for TLS)
  -U, --user string          Username of the remote host
  -P, --password string      Password of the user
  -k, --insecure             Don't verify the hostname on the returned certificate
      --no-tls               Don't use a TLS connection, use the HTTP protocol…
