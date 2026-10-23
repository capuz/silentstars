---
repo: "HOSTED-POWER/php_uploadprogress_guard"
name: "php_uploadprogress_guard"
description: "Protects an unpatched PHP against php2shell (CVE-2026-109618 / CVE-2026-109619): a small extension that mirrors the official fix component by component and steps aside once the engine carries it. PHP 5.6-8.5; Sury, cPanel EA4, DirectAdmin, Docker, Windows."
readmeQualityOk: true
url: "https://github.com/HOSTED-POWER/php_uploadprogress_guard"
homepage: "https://www.hosted-power.com"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["cve-2026-109618", "cve-2026-109619", "mitigation", "php", "php-extension", "php2shell", "security"]
stars: 130
forks: 9
openIssues: 3
closedIssues: 16
watchers: 5
contributors: 1
recentReleases: 2
createdAt: "2026-10-21T09:00:12Z"
lastCommitAt: "2026-10-23T12:04:25Z"
lastReleaseAt: "2026-10-23T07:39:52Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 33
maintainers: ["jogoossens"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b389f3f95dabb41a0207cd12de7cba2af299c12e304de38fe10990f0e6eef88/HOSTED-POWER/php_uploadprogress_guard"
---

# hp_uploadprogress_guard

**v3.2.4, 23 October 2026: two protections PHP itself does not ship yet.** Since the php2shell releases, two
more problems have surfaced in current PHP. This module now covers both, on patched and unpatched PHP alike,
so **keep it installed after you upgrade.**

* **`unserialize()` use-after-free, in every current release.** When `unserialize()` cleans up, it frees its
  bookkeeping first and then runs object destructors; a destructor that calls `unserialize()` again works on
  freed memory. This is the bug behind the "PHP 8.5.12 patch is incomplete" claims. Present in 8.5.12,
  8.4.27, 8.3.36, 8.2.35 and older; reachable when an application unserializes attacker-controlled data, or
  by code already running on the host. Not fixed in any PHP release, no CVE (PHP does not assign CVEs to
  `unserialize()` bugs): [php-src#24481](https://github.com/php/php-src/issues/24481).
  **Closed by the module since v3.2.0**: such nested calls get their own state. Verified with Valgrind on all
  five releases named here: freed-memory reads without the module, none with it.
* **SimpleXML crashes, introduced by 8.4.27 and 8.5.12.** The security release changed the…
