---
repo: "rashiq/mcbroken-archive"
name: "mcbroken-archive"
description: "🍦 Historical Archive of my website mcbroken.com"
readmeQualityOk: true
url: "https://github.com/rashiq/mcbroken-archive"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 45
forks: 3
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2021-03-18T00:40:00Z"
lastCommitAt: "2026-07-18T05:46:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 43
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9c03fd710598e19cb73113d9880b6a0fc3c21cdaaaa414951ca4b549251a3354/rashiq/mcbroken-archive"
---

# mcbroken-archive
Archive for data from [mcbroken.com](https://mcbroken.com). It updates the `mcbroken.json` file every hour.

Mirror of [this repository](https://github.com/MrFlynn/mcbroken-archive).

# How do I get historical data?

If you want to find historical data of ice cream machine failures you can dump all past reversions of the `mcbroken.json` file with the `list-revisions.sh` script.

```
$ ./list-revisions.sh mcbroken.json
```

This will create a folder called `revisions` with a separate file for each version of the file:

```
$ ls ./revisions

0001.13-Apr-2021.689154f175c488b91fa6d8fcc05d34c61bd5a9a4.mcbroken.json
0002.13-Apr-2021.73865f3df4ac11a76482d404a703d612072b4f0d.mcbroken.json
0003.13-Apr-2021.3a3d40091f8f0092a5e6f4758c7c5e0d1c93ea65.mcbroken.json
0004.13-Apr-2021.956eec0bb0978ebd6cab8381135a5722844fabc4.mcbroken.json
0005.13-Apr-2021.66becde8497ac3242c36cbacc7515f027548618b.mcbroken.json
0006.13-Apr-2021.58025c9722d735b7cc8f93eaac70e0258ebd8f8e.mcbroken.json
0007.13-Apr-2021.8b1ce44b6f541f1a0c3462a0e9f7ba0e715b15da.mcbroken.json
0008.13-Apr-2021.a0b5190b51b928c6ed3f6f67c81ec5ea0da0669f.mcbroken.json
[...]…
