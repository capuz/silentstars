---
repo: "Hankaws/aperture"
name: "aperture"
description: "An AI code editor that checks its own work."
readmeQualityOk: true
url: "https://github.com/Hankaws/aperture"
homepage: "https://aperturesais.grok.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 8
forks: 0
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-10-03T06:44:06Z"
lastCommitAt: "2026-10-24T08:21:38Z"
lastReleaseAt: "2026-10-06T15:03:29Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["Hankaws", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c3ed7b738832746340b19e9e8d99aa40cbe1acdd66cae53bde96631273fbff6/Hankaws/aperture"
---

# Aperture

An AI code editor that checks its own work. Composer plans a change and
stages it as a diff. Every staged change is then checked before you apply it:
it parses, its imports resolve, the TypeScript compiler passes, the page
renders, and the tests pass. The tests run in your browser tab, free, in about a second.

**[▶ Watch the 30-second demo on YouTube](https://www.youtube.com/watch?v=4nLOAsB6W8A)**

**Demo:** [aperturesais.grok.me](https://aperturesais.grok.me). It plays recorded runs. It does not call Grok, so it does not spend anyone's API quota. A key you add in Settings is yours alone.

## Try it in a minute, no API key needed

Needs Node 22.6 or newer.

```sh
git clone https://github.com/Hankaws/aperture.git
cd aperture
npm ci
APERTURE_MODEL=replay VITE_AUTH_ENABLED=false npm run dev
```

Open <http://localhost:8080/app> and click **Fix the off-by-one in listTasks**,
then **Build it**. Watch the plan, the staged diff and the checks. The demo
project ships with three known bugs and one failing test for each. The fix
makes its own test pass, and the other two still fail, so the Tests check is
amber: "already failing before this change", not blamed on the edit. Click…
