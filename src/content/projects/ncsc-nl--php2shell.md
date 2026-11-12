---
repo: "NCSC-NL/php2shell"
name: "php2shell"
description: "Operational information regarding the 2026 php2shell vulnerabilities  "
readmeQualityOk: true
url: "https://github.com/NCSC-NL/php2shell"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 367
forks: 111
openIssues: 0
closedIssues: 15
watchers: 8
contributors: 29
recentReleases: 0
createdAt: "2026-10-21T10:21:40Z"
lastCommitAt: "2026-11-12T11:39:07Z"
status: "newborn"
tags: []
healthScore: 100
undervaluedScore: 27
maintainers: ["NCSC-NL-Sebastiaan", "NCSC-NL-DFIR", "NCSC-NL-Graham"]
openGraphImageUrl: "https://opengraph.githubassets.com/978691e3bde634b43f5698839895f78ddf323ec9336f82ec650862f28da8184f/NCSC-NL/php2shell"
---

# php2shell vulnerabilities (CVE-2026-109618, CVE-2026-109619)

Operational information: 28 October 2026 16:46 CET<br>
Software list last status update: 12 November 2026 08:56 CET<br>
## TLP:CLEAR

This repository contains operational information regarding the critical PHP vulnerabilities tracked by CERT-EU as CVE-2026-109618 and CVE-2026-109619.

PHP is a widely used open-source server-side scripting language, so these vulnerabilities may affect a broad range of internet-facing web applications and products that embed or depend on PHP.

## Current status

This repository tracks **972 products**, including **212 vulnerable** and **213 fixed**.

On 21 October 2026, PHP published fixed releases for CVE-2026-109618 and CVE-2026-109619: PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35. PHP states that both vulnerabilities can allow unauthenticated remote code execution and that all PHP installations serving web requests are at risk, including PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP and LiteSpeed. PHP considers the risk highest for mod_php, where an unauthenticated request can trigger exploitation before application code runs.

PHP describes CVE-2026-109618 as remote code execution via…
