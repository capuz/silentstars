---
repo: "ExtSentry/ExtSentry.github.io"
name: "ExtSentry.github.io"
description: "Browser Extension Threat Intelligence feed  - extsentry.github.io"
readmeQualityOk: true
url: "https://github.com/ExtSentry/ExtSentry.github.io"
homepage: "https://extsentry.github.io/"
language: "HTML"
languages: ["HTML", "YARA"]
languagePcts: [48, 41]
stars: 38
forks: 1
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-25T19:23:52Z"
lastCommitAt: "2026-07-04T22:52:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 36
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1191983714/033c9390-5969-464a-adb2-e42860fa8711"
fundingLinks: ["GITHUB:https://github.com/mthcht"]
discussionCount: 1
---

# ExtSentry

</p>

  <strong>Threat intelligence feed for browser extensions</strong>
</p>

  Track suspicious, malicious, and risky browser extensions in one place.
</p>

</p>

</p>

**Browser Extension Threat Intelligence**

ExtSentry transforms the community-curated [browser extension threat list](https://github.com/mthcht/awesome-lists) into ready-to-import feeds for 16+ security platforms. Point your SIEM, SOAR, or threat intel platform at the output and start detecting malicious, suspicious, and unwanted browser extensions.
Also include a remediation guide and forensic traces details for browser addons installations.

---

## Landing Page

`index.html` is a standalone React single-page app that serves as the project's documentation and feed download hub.

## Threat Intelligence Feeds

| Feed File | Platform / Format |
|---|---|
| `stix2_bundle.json` | STIX 2.1 Bundle - OpenCTI, TAXII, any CTI platform |
| `misp_event.json` | MISP Event (attributes + objects) |
| `misp_warninglist.json` | MISP Warning List |
| `sigma_rules_browser_extensions.yml` | Sigma Rules - process, file, registry + per-category |
| `yara_browser_extensions.yar` | YARA Rules - per-category + CRX hash…
