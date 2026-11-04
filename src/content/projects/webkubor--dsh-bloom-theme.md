---
repo: "webkubor/dsh-bloom-theme"
name: "dsh-bloom-theme"
description: "A DSH theme plugin: Bloom Morandi-style Chinese palettes, OKLCH color tuning, light/dark modes, one-click switching in the top bar, verified to WCAG AA. / A DSH theme plugin: Morandi Chinese-style palettes, OKLCH, light/dark, WCAG AA."
originalDescription: "DSH 主题插件：Bloom 莫兰迪中国风配色，OKLCH 调色、明暗双主题、顶栏一键切换，实测达 WCAG AA。 / A DSH theme plugin: Morandi Chinese-style palettes, OKLCH, light/dark, WCAG AA."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/webkubor/dsh-bloom-theme"
homepage: "https://www.npmjs.com/package/dsh-bloom-theme"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [61, 39]
topics: ["accessibility", "color-scheme", "dark-theme", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "morandi", "oklch", "theme"]
stars: 46
forks: 3
openIssues: 11
closedIssues: 10
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-18T05:25:21Z"
lastCommitAt: "2026-11-04T13:04:37Z"
lastReleaseAt: "2026-08-24T09:59:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 41
maintainers: ["webkubor", "dependabot[bot]", "siertum"]
openGraphImageUrl: "https://opengraph.githubassets.com/940d414ad8de027f2577cb8dab430909351df2c2a7e3fc34b6a4c77f49d7863c/webkubor/dsh-bloom-theme"
discussionCount: 3
---

Bringing the Morandi texture of <a href="https://github.com/webkubor/typora-Bloom-theme">Bloom</a> (a 90★ Typora theme) into DSH, so that even the wait while the AI thinks breathes along with the theme.

## 📌 Desktop First: About the DSH Web UI

**Conclusion: Upcoming Bloom iterations will prioritize compatibility with the DSH desktop app. The Web UI will no longer be actively adapted and will gradually be phased out.**

(Versions 0.16.0 and earlier were built for the DSH Web UI. **Starting with 0.17.0, it targets the desktop app.** This release added selector adaptation for DSH 0.2.0 and a drift gate that automatically detects this kind of breakage.) When the current desktop app uses 0.2.1-rc.5, the switcher's version hint reads the desktop app version rather than the older version of the bundled DSH package. The drift gate also checks the locally installed desktop version first.

DSH now has a desktop app, and I have already switched to it for daily use. A theme's value lives in the UI: as the host changes the interface, the palettes and glass have to evolve with it. So the focus of iteration is shifting to the desktop app.

Concretely, here's what you'll experience:

| What…
