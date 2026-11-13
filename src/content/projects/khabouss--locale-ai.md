---
repo: "khabouss/locale-ai"
name: "locale-ai"
description: "Translate i18n JSON locale files locally, on CPU, for free with AI"
readmeQualityOk: true
url: "https://github.com/khabouss/locale-ai"
homepage: "https://www.npmjs.com/package/locale-ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-11-10T15:11:03Z"
lastCommitAt: "2026-11-13T18:32:17Z"
lastReleaseAt: "2026-11-12T22:30:57Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["ifndefuser", "khabouss"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d59e67ef073aa4ed611d32d999207f2fc4dbd8b74475d8a723ab54f5aae7590/khabouss/locale-ai"
---

# locale-ai

Translate your i18n locale files **locally, on CPU, for free**. No API keys, no Python, nothing leaves your machine.

```bash
npx locale-ai translate --from en --to fr,es,de
```

```
locale-ai 0.6.3
Found 3 en files in locales/en/
Models to download (one time, then cached for every project):
  en-fr         345 MB  khabouss/opus-mt-tc-big-en-fr-onnx
  ...
Download 577 MB? (Y/n)
✓ fr         43 strings translated, 3 files written in 2.7s, 1 plural forms added
✓ es         43 strings translated, 3 files written in 2.5s, 1 plural forms added
✓ de         43 strings translated, 3 files written in 2.1s
```

> **Behind a proxy or in locked-down CI?** `npm install` pulls in `onnxruntime-node`, which tries to download a ~260&nbsp;MB CUDA provider locale-ai never uses (it only ever runs on CPU) — on a network that can't reach `api.nuget.org`, that download failing takes the whole install down with it. Skip it with:
> ```bash
> ONNXRUNTIME_NODE_INSTALL=skip npm install locale-ai
> ```
> That's also the faster way to install even with a good connection — about 51&nbsp;MB and 3 seconds instead of several hundred MB. locale-ai re-checks for (and removes) that CUDA provider on…
