---
repo: "soranerai/vpnhide_next"
name: "vpnhide_next"
description: "VPNHide Next (VPNHide with many improvements)"
originalDescription: "VPNHide Next (VPNHide with many improvements)"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/soranerai/vpnhide_next"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [74]
stars: 58
forks: 2
openIssues: 2
closedIssues: 28
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-01T14:16:04Z"
lastCommitAt: "2026-07-04T22:52:34Z"
lastReleaseAt: "2026-05-30T09:47:44Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 18
maintainers: ["soranerai"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b2e26b558e78fb5b974db8f8c4e648374e5988098dc5db16807bacbae624c90/soranerai/vpnhide_next"
discussionCount: 0
---

<h1 align="center">VPNHide Next</h1>

> [!WARNING]
> **This fork uses extremely aggressive hiding methods at the kernel and framework level**
> Stable operation on absolutely all devices, firmware, and kernel versions **is not guaranteed and cannot be guaranteed**.
> According to the MIT license, the software is provided "as is" (AS IS), without any warranties. The author is not responsible for any failures, bootloops, or kernel panics.

---
### Project Information
This is a fork of the project [okhsunrog/vpnhide](https://github.com/okhsunrog/vpnhide/). The project was separated from upstream due to significant changes and differing philosophies.
The philosophy of this project is to block ALL direct and indirect vectors at the root.

**Main differences from the original (in brief):**
*   **Port blocking at the kernel level**: Blocking loopback connections has been moved from iptables to the kernel hook `security_socket_connect`.
*   **16+ new advanced protection vectors**: Hides everything that can be hidden.
*   **Different data exchange architecture**: Complete abandonment of ProcFS (files in `/proc/`) in favor of the misc device `/dev/vpnhide_ctrl`.
*   **Support for working…
