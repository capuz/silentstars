---
repo: "Saekisui/hidden-letters-map"
name: "hidden-letters-map"
description: "Treasure Map: hide letters, voice messages, and achievements in real places, so they can only be retrieved when the recipient walks nearby."
originalDescription: "藏宝地图：把信、语音、成就藏在真实的地方，对方走到附近才拿得到"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Saekisui/hidden-letters-map"
homepage: "https://saekisui.github.io/hidden-letters-map/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 51
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-09T11:47:17Z"
lastCommitAt: "2026-10-31T19:01:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 15
maintainers: ["Saekisui"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68ebb88a296ca293357e0117e79a234e97f929430ef5e51fa8bbda101d04ec0/Saekisui/hidden-letters-map"
---

# Treasure Map · hidden-letters-map

Hide a letter, a voice message, or an achievement in a real place. On the recipient's map, they only see a blurry circle and a riddle. The item can only be retrieved once they walk nearby.

- **Treasure hider**: hides things at a place, draws travel routes, and publishes achievements directly. Operates through an MCP client such as Claude Code / Claude Desktop, or directly via curl.
- **Treasure seeker**: opens a web page on their phone (added to the home screen and used like an app). The map shows the planned route, their own position and footprints, fog circles, and riddles. Walking into a circle lets them open the envelope. Opened items go to the detail page. Earned achievements hang on the achievement wall. They can also pin an “I was here” marker at their current spot and leave a message.

Sealed letters: the data the page receives contains no place names, coordinates, or body text, and it cannot be peeked at in the developer tools either.

---

## Getting it running

Requires Node 20.6 or above.

```bash
npm install
cp .env.example .env     # At minimum, change PASSWORD, and fill in the two people's names too
npm run build            #…
