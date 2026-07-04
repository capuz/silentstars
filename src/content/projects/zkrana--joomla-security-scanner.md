---
repo: "zkrana/joomla-security-scanner"
name: "joomla-security-scanner"
description: "Joomla security scanner for detecting malware, webshells, rogue admins, and exploit artifacts from SP Page Builder and JCE vulnerabilities."
url: "https://github.com/zkrana/joomla-security-scanner"
homepage: "https://github.com/zkrana/joomla-security-scanner"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["cms-tool", "joomla-security", "malware-detection", "security-scanner", "security-tool", "sp-page-builder", "webshell-scan"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-24T09:13:01Z"
lastCommitAt: "2026-07-04T06:11:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 32
maintainers: ["zkrana"]
openGraphImageUrl: "https://opengraph.githubassets.com/33620aa93911c48cefe3dae9cadc457e6a1991b2bcedd2049f81d00775d647c5/zkrana/joomla-security-scanner"
---

# 🛡️ SP Page Builder Infection Scanner

A self-contained PHP scanner for Joomla sites that detects and helps remove malware left behind by the **SP Page Builder `uploadCustomIcon` unauthenticated RCE vulnerability** (versions prior to 6.6.2). It also checks the **JCE editor component (`com_jce`)**, which has been reported as a secondary infection vector on sites compromised through SPPB.

No dependencies. No installation. Upload one file, scan, clean up, delete.

---

## ⚠️ Critical security notice

In June 2026, a critical unauthenticated RCE was disclosed in SP Page Builder versions below 6.6.2. The flaw allowed attackers to upload PHP webshells without any login, read `configuration.php`, and create rogue Super User accounts — often within minutes of finding a vulnerable site.

**Before doing anything else:**

1. **Update SP Page Builder to 6.6.2 or later.** Scanning a site that's still vulnerable just means cleaning up the same infection again tomorrow.
2. **Update or remove JCE** if installed. Several hosts have reported malware appearing inside `com_jce` on sites also hit by the SPPB exploit — most likely the same attacker reusing JCE's file-browser upload path as a…
