---
repo: "Alexjr2/Frida_Termux_Installation"
name: "Frida_Termux_Installation"
description: "build frida for android arch : arm, arm64, x86 and x86_64"
readmeQualityOk: true
url: "https://github.com/Alexjr2/Frida_Termux_Installation"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["android", "debugging", "frida", "frida-termux", "frida-tools", "hooking", "kernelsu", "magisk", "reverse-engineering", "termux"]
stars: 45
forks: 15
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-01-09T17:40:36Z"
lastCommitAt: "2026-07-20T06:32:26Z"
lastReleaseAt: "2025-04-18T23:27:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 38
maintainers: ["Alexjr2"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e36ea947ba746ec14782009f6de69050c69d2de8eaae3db3e102dfd374527a1/Alexjr2/Frida_Termux_Installation"
---

> [!NOTE]
> Only For Termux User (Android) support arm, arm64, x86 and x86_64

## Installing Python
```bash
apt update && apt upgrade && apt install build-essential python python-pip git curl binutils openssl && pip cache purge
```
## Installing frida
```
cd $TMPDIR && curl -fsSL https://raw.githubusercontent.com/Alexjr2/Frida_Termux_Installation/main/frida-python.sh | bash && cd
```
## Installing dependencies
```
pip install frida-tools --no-deps && pip install colorama prompt_toolkit pygments && pip cache purge
```
# Credits
- [frida](https://github.com/frida/frida) : Official Frida Repository
- [frida-python](https://github.com/frida/frida-python.git) : For frida-python installation and script
