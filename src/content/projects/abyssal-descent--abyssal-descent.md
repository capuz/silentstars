---
repo: "abyssal-descent/abyssal-descent"
name: "abyssal-descent"
description: "Official repo for Abyssal Descent Modpack"
readmeQualityOk: true
url: "https://github.com/abyssal-descent/abyssal-descent"
language: "GLSL"
languages: ["GLSL"]
languagePcts: [95]
stars: 41
forks: 6
openIssues: 0
closedIssues: 18
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2024-09-20T23:23:30Z"
lastCommitAt: "2026-09-13T08:30:26Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 56
maintainers: ["Eclipse-Ilx", "slbsh", "sketchystudios12"]
openGraphImageUrl: "https://opengraph.githubassets.com/f800b272e93cb82d451ffe46ac109741eaf6a5a516f53ab0760f182be6931266/abyssal-descent/abyssal-descent"
---

# Abyssal Descent
Run on `forge 47.4.10`

Join the [Discord](https://discord.gg/S43xbbHAe2) for more information  

> **Note:**  
> This project is still in development, read [Known Issues](https://github.com/abyssal-descent/abyssal-descent/blob/HEAD/KNOWN-ISSUES.md)

PR's and Issues welcome! Please read [CONTRIBUTING.md](https://github.com/abyssal-descent/abyssal-descent/blob/HEAD/CONTRIBUTING.md)

## Building
**Dependencies:** raku, JDK 17

```bash
git clone --recursive https://github.com/abyssal-descent/abyssal-descent
cd abyssal-descent
zef install JSON::Fast File::Directory::Tree
raku build.raku
```

**Install Raku (Windows):**
```powershell
. {iwr -useb https://rakubrew.org/install-on-powershell.ps1 } | iex
New-Item -Path (Split-Path $PROFILE) -ItemType "Directory" -Force
Add-Content -Force -Path $PROFILE -Value '. "C:\rakubrew\bin\rakubrew.exe" init PowerShell | Out-String | Invoke-Expression'
rakubrew install
```

**Install Raku (Linux)**
```bash
curl https://rakubrew.org/install-on-perl.sh | sh
rakubrew install
```
