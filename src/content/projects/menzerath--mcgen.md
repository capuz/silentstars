---
repo: "menzerath/mcgen"
name: "mcgen"
description: "Golang JSON web API for generating custom Minecraft achievements"
readmeQualityOk: true
url: "https://github.com/menzerath/mcgen"
homepage: "https://mcgen.menzerath.eu"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [62, 22]
topics: ["achievements", "minecraft", "minecraft-achievements"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-04T13:21:58Z"
lastCommitAt: "2026-07-16T05:59:41Z"
lastReleaseAt: "2026-03-03T11:31:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 51
maintainers: ["renovate[bot]", "menzerath"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d809e2119acbc904f4bbbc76308cbef3da3a17d44dfbefa42a1c0d71a02e628/menzerath/mcgen"
---

# mcgen - Minecraft Achievement Generator
mcgen is a Golang-based JSON web API for generating custom Minecraft achievements.

## Usage
A demo of the UI and API is available at https://mcgen.menzerath.eu.

### UI
A simple UI is available at the base URL.  
It allows you to generate achievements with a live preview using the API.

### API

#### GET `/api/v1/achievement`
```
/api/v1/achievement?background=sword_diamond&title=Achievement%20Title&text=Achievement%20Text
```

#### POST `/api/v1/achievement`
```json
{
    "background": "sword_diamond",
    "title": "Achievement Title",
    "text": "Achievement Text"
}
```

#### GET `a.php`
We also support the legacy api of https://github.com/menzerath/minecraft-achievement-generator.
```
/a.php?i=3&h=Achievement%20Title&t=Achievement%20Text
```

#### GET `/a/:background/:title/:text`
We also support the legacy api of https://github.com/menzerath/minecraft-achievement-generator.
```
/a/3/Achievement%20Title/Achievement%20Text
```

### Icons
Available icons are listed in [this](https://github.com/menzerath/mcgen/blob/HEAD/assets/backgrounds) directory.  
Use their filename without the `.png` extension as the `background` parameter.

###…
