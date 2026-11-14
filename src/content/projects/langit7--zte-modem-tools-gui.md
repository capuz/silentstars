---
repo: "langit7/zte-modem-tools-gui"
name: "zte-modem-tools-gui"
description: "Cross-platform Avalonia GUI for ZTE GPON ONT factory-mode Telnet and serial control."
readmeQualityOk: true
url: "https://github.com/langit7/zte-modem-tools-gui"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 8
forks: 5
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-10-05T00:44:54Z"
lastCommitAt: "2026-11-14T10:43:07Z"
lastReleaseAt: "2026-11-14T10:44:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 61
undervaluedScore: 22
maintainers: ["langit7"]
openGraphImageUrl: "https://opengraph.githubassets.com/c08855a64e091e3ac9a262228edad1a3f5893dd92218bc3d7463e51230d050d9/langit7/zte-modem-tools-gui"
---

# ZTE Factory Mode GUI

Windows, macOS, and Linux GUI for factory access on supported ZTE GPON ONU/ONT devices. Native C# / Avalonia port of [zte_modem_tools](https://github.com/langit7/zte_modem_tools); Python is not required.

## Supported functions

- Open or close temporary factory-mode Telnet and display verified login credentials.
- Open or close temporary F1611A SSH and verify SSH authentication using the returned credentials.
- Save permanent Telnet settings, then restart the service or reboot the modem.
- Open or close serial access (`/proc/serial`).
- Automatically detect three factory protocol generations; support `rerand34` and `rerand22` MAC proofs and version61/time authentication.
- Use manual factory credentials or try built-in known credentials; detect the client MAC or accept an explicit MAC/interface.

## Supported models

| Model | Firmware | GUI access |
| --- | --- | --- |
| F6600P | `V9.0.10P5N23`, `V9.0.10P6N33B` | Standard Telnet profile |
| F6201B | `V9.3.10P4N3` | Standard Telnet profile |
| F670L | `V9.0.11P` | Standard Telnet profile |
| F1611A | Version unknown | Temporary SSH (experimental) |

Compatibility depends on firmware. Hardcode-file…
