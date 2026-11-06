---
repo: "murre87/energywizard"
name: "energywizard"
description: "HEMS - Energi och kostnadsoptimering av ditt hem"
readmeQualityOk: true
url: "https://github.com/murre87/energywizard"
homepage: "https://murre87.github.io/energywizard/"
language: "Python"
languages: ["Python", "Lua"]
languagePcts: [55, 39]
topics: ["batterie", "batteries", "batteries-included", "elbil", "solceller", "spabad", "ems", "hems"]
stars: 19
forks: 4
openIssues: 7
closedIssues: 79
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-23T14:43:59Z"
lastCommitAt: "2026-11-06T11:23:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 50
maintainers: ["murre87", "github-actions[bot]", "lazgeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd2455b01a17c0f04f3bc0fc033ff535d0b2d78c0d3f3ec281189a10115a67a2/murre87/energywizard"
fundingLinks: ["GITHUB:https://github.com/murre87"]
---

# EnergyWizard Open

**🇸🇪 Svenska · 🇬🇧 [English](https://github.com/murre87/energywizard/blob/HEAD/README.en.md)**

**Ett öppet styrsystem som fattar minut-för-minut-beslut för hela huset efter
elpriset** - inte en punktlösning för en enda sak. Elbilsladdning, värmepump,
solcellsexport, husbatteri, spabad och huvudsäkringen koordineras tillsammans, byggt
ovanpå [Home Assistant](https://www.home-assistant.io/) så det pratar med
hårdvara som redan fungerar där istället för att uppfinna ny protokollkod.
Öppen källkod, gratis, inget abonnemang.

- 🚗 **Elbil** - laddar till vald tid/nivå på de billigaste timmarna.
- 🌡️ **Värmepump** - sänker värmen automatiskt när elen är dyr, "laddar"
  husets egen värmetröghet när den är billig.
- 🔋 **Husbatteri** - dygnsplan kvart för kvart: när det ska ladda, spara och ladda ur.
- ☀️ **Solcellsexport** - stänger av exporten automatiskt vid minuspris,
  släpper den igen när priset går över 0.
- 🛁 **Spabad** - värmer under de billiga timmarna.
- ⚡ **Effektvakt** - håller koll på huvudsäkringen så du slipper överträdelser.
- 📱 **Egen app** (`ewapp`, mobil/PWA) och **dator-/surfplattevy**
  (`webdashboard`) med full styrning, inte bara…
