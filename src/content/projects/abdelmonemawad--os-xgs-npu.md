---
repo: "AbdelmonemAwad/os-xgs-npu"
name: "os-xgs-npu"
description: "FreeBSD drivers and an OPNsense plugin that bring Sophos XGS appliances back as open firewalls: every front port, with connections and IPsec offloaded to the coprocessor. XGS 136 and XGS 3300. Alpha."
readmeQualityOk: true
url: "https://github.com/AbdelmonemAwad/os-xgs-npu"
homepage: "https://npuforge.org"
language: "C"
languages: ["C", "Python"]
languagePcts: [56, 20]
topics: ["device-driver", "firewall", "freebsd", "kernel-module", "marvell", "networking", "opnsense", "pcie", "reverse-engineering", "sophos"]
stars: 9
forks: 0
openIssues: 21
closedIssues: 147
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-25T00:15:11Z"
lastCommitAt: "2026-10-25T02:47:39Z"
lastReleaseAt: "2026-10-20T18:02:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 61
maintainers: ["AbdelmonemAwad"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1386512748/3cd85746-1b07-44ea-9eaa-fdbdf880edf5"
fundingLinks: ["GITHUB:https://github.com/AbdelmonemAwad"]
discussionCount: 2
---

> [!CAUTION]
> **Update OPNsense now, on every appliance - a test one too. PHP2Shell, 2026-10-21.** PHP fixed two
> critical flaws, CVE-2026-109618 and CVE-2026-109619, which [php.net](https://www.php.net/archive/2026.php)
> says can allow remote code execution without a login, and OPNsense's web interface runs on PHP.
> OPNsense delivers the fix, **PHP 8.5.12**, to 26.7.7 as an out-of-band package update, so **the
> version still reads 26.7.7 afterwards** ([its announcement](https://forum.opnsense.org/index.php?topic=53191.0)):
> on 2026-10-25 one of this project's own test appliances still ran PHP 8.5.11 under "OPNsense 26.7.7".
>
> - **Update:** System: Firmware: Status - *Check for updates*, then *Update*.
> - **Check:** in a shell (the console's option 8, or SSH), `php -v` reads **8.5.12** or later.
> - **The captive portal**, if you run it: restart it after the update, as OPNsense advises.
> - **The [ready-made images](https://github.com/AbdelmonemAwad/xgs-image-builder/releases)** start from
>   OPNsense 26.7's own image and carry its older PHP: update right after installing, before the web
>   interface can be reached from a network you do not trust.

> [!NOTE]
> **Still…
