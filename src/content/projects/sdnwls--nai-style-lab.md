---
repo: "sdnwls/nai-style-lab"
name: "nai-style-lab"
description: "A Windows app that finds and refines your own art style by combining NovelAI artist tags"
originalDescription: "NovelAI 작가 조합으로 내 취향의 그림체를 찾고 다듬는 Windows 앱"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/sdnwls/nai-style-lab"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [57, 31]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-04T07:46:47Z"
lastCommitAt: "2026-11-06T11:24:07Z"
lastReleaseAt: "2026-11-03T16:32:24Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 33
maintainers: ["sdnwls"]
openGraphImageUrl: "https://opengraph.githubassets.com/987b2a4c024a9e126c1a9bbabcb149afbcc2c9fed68b81fecc5aa8be8d178123/sdnwls/nai-style-lab"
---

# NAI Style Lab

An app that creates NovelAI artist tag combinations and finds and refines your own art style simply by choosing whichever of two options you prefer.

## Running

Double-click `run.bat` to open the window. When you close the window, your data is saved and the app exits automatically.
If you close the window while an image is being generated, the in-progress generation stops without waiting. The one result already sent to NovelAI is not received and is discarded, but everything created up to that point is saved.

- Data: `data/` (state.json, the previous backup state.json.bak kept from each run, images/, api_key.txt, thumbnail cache thumbs/)
- Error log: `data/app.log`

### Versions and Updates

Each time the app starts, it checks once for a new version on GitHub Releases. If one is available, a notice appears in the sidebar. Installing from Settings → Data → Update downloads the new version, closes the app, and reopens it as the new version.

- The `data/` folder is not touched during updates.
- File replacement happens after the app closes, and it either fully succeeds or fully fails. If it fails midway, the previous files are restored and the previous version is…
