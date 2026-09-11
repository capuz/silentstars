---
repo: "antibrow/antibrow"
name: "antibrow"
description: "Kernel-level antidetect browser with the Playwright API you already write. Python + Node SDKs, MCP-ready, unlimited local profiles. Linux x64 + arm64, macOS Intel + Apple Silicon, Windows x64."
readmeQualityOk: true
url: "https://github.com/antibrow/antibrow"
homepage: "https://antibrow.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [52, 47]
topics: ["anti-detect-browser", "antidetect-browser", "bot-detection", "browser-automation", "browser-fingerprinting", "chromium", "cloudflare-bypass", "crawler", "fingerprint-browser", "nodejs"]
stars: 334
forks: 0
openIssues: 68
closedIssues: 0
watchers: 330
contributors: 1
recentReleases: 10
createdAt: "2026-07-29T06:20:37Z"
lastCommitAt: "2026-09-11T08:14:55Z"
lastReleaseAt: "2026-08-28T02:58:09Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 69
undervaluedScore: 16
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/17160414ac40f42da0b5bf2e97e7ba720fbdc346ab2e0f8d7535f8d8b25fa837/antibrow/antibrow"
---

<strong>AntiBrow</strong><br>
  <em>The antidetect browser your AI agent can drive.</em>
</p>

**English** | [Русский](https://github.com/antibrow/antibrow/blob/HEAD/README.ru.md)

</p>

---

Kernel-level fingerprint spoofing, driven by the **standard Playwright API you already
write**. Every profile carries a coherent real-device fingerprint — canvas, WebGL, WebGPU,
audio, fonts, WebRTC and the protocol layer all agree, because they were sampled from one
real machine rather than randomized independently.

This repository holds the **open-source SDKs**. See [Licensing](#licensing) for what is and
isn't open.

```
python/       →  PyPI: antibrow
js/           →  npm:  anti-detect-browser
ai-sdk-tool/  →  npm:  ai-sdk-tool-antibrow  (Vercel AI SDK tools)
```

## Install

**Python**

```bash
pip install antibrow
```

```python
from antibrow import launch

browser = launch()                      # engine downloads on first run
page = browser.new_page()
page.goto("https://example.com")
browser.close()
```

**JavaScript / TypeScript**

```bash
npm install anti-detect-browser playwright-core
```

```js
import { openProfile } from 'anti-detect-browser'

const session = await openProfile({…
