---
repo: "IvanMaestroGTR/TrueMDC-9M2RTX-Losehu-UVK5-Firmware"
name: "TrueMDC-9M2RTX-Losehu-UVK5-Firmware"
description: "Based on Losehu Firmware, with extended support on MDC1200 and Fleetsync"
readmeQualityOk: true
url: "https://github.com/IvanMaestroGTR/TrueMDC-9M2RTX-Losehu-UVK5-Firmware"
language: "C++"
languages: ["C++", "C"]
languagePcts: [56, 38]
stars: 5
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-02-03T10:19:47Z"
lastCommitAt: "2026-09-28T10:06:14Z"
lastReleaseAt: "2026-09-15T13:48:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 72
maintainers: ["IvanMaestroGTR"]
openGraphImageUrl: "https://opengraph.githubassets.com/d356d885e02fd591ffd9a585d792f90b298dca03de6c24653296ae6f2461b463/IvanMaestroGTR/TrueMDC-9M2RTX-Losehu-UVK5-Firmware"
---

# Note: This firmware is currently compatible with v1 hardware only. Support for other hardware versions is planned for the future.

This firmware is based on the LOSEHU132E firmware (see: https://github.com/losehu/uv-k5-firmware-custom), with several changes made to differentiate it from the original 132E build.
Please refer to the releases for the changelog.

CHIRP support is included; the CHIRP module for this repository can be found in the CHIRP Module folder.

SNS Group for this firmware, for discussion and bug reports:
https://chat.whatsapp.com/ILSZVD0Unua4ATllDHVcUB
Feel free to join us!

## Custom Features

### MDC1200

MDC1200 signalling includes:

- User-configurable MDC1200 ID.
- Contact list and contact aliases.
- Motorola-style extended wobble preamble.
- Configurable additional preamble duration.
- Configurable preamble placement: Pre, Post, or Both.
- Signalling-based Roger modes.

MDC ID notes:

- Personal IDs: `0001-D999`
- `E001-E999` is reserved for group calling. Avoid using this range for a personal ID.
- `FFFF` is used for All Call. Avoid using `FFFF` for a personal ID.

Selective calling is not included due to firmware size limitations.

### FleetSync…
