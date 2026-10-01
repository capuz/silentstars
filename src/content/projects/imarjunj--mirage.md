---
repo: "ImArjunJ/mirage"
name: "mirage"
description: "turn any machine into an airplay, google cast, and miracast receiver."
readmeQualityOk: true
url: "https://github.com/ImArjunJ/mirage"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-09T00:22:55Z"
lastCommitAt: "2026-10-01T10:23:24Z"
lastReleaseAt: "2026-06-24T15:42:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 12
maintainers: ["ImArjunJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce1e6a23adeb09e4b0c93d2eb90e0978606475e40fa1a038e0f6acfabac0c11a/ImArjunJ/mirage"
---

# mirage

local-network receiver.

mirage is a small receiver core with adapters for airplay, cast, and
miracast / wi-fi display. the main usable path today is airplay from ios.

## quick start

download the latest release:

<https://github.com/ImArjunJ/mirage/releases/latest>

linux:

```sh
curl -LO https://github.com/ImArjunJ/mirage/releases/download/v0.1.0/mirage-0.1.0-Linux-x86_64.zip
unzip mirage-0.1.0-Linux-x86_64.zip
cd mirage-0.1.0-Linux-x86_64
./install.sh
export PATH="$HOME/.local/bin:$PATH"
mirage doctor
mirage --diagnostics
```

windows powershell:

```powershell
Invoke-WebRequest https://github.com/ImArjunJ/mirage/releases/download/v0.1.0/mirage-0.1.0-Windows-AMD64.zip -OutFile mirage.zip
Expand-Archive .\mirage.zip -DestinationPath .\mirage
cd .\mirage\mirage-0.1.0-Windows-AMD64
.\install.ps1 -AddToPath
mirage doctor
mirage --diagnostics
```

leave `mirage --diagnostics` running, open airplay on an iphone or ipad on the
same network, and choose `Mirage`. press ctrl+c after testing. if it works,
install the background service:

```sh
mirage service install
mirage service start
mirage service status
mirage service logs -f
```

on windows, run the service install…
