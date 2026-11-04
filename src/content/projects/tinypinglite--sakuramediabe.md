---
repo: "tinypinglite/sakuramediabe"
name: "sakuramediabe"
description: "SakuraMedia's server-side project"
originalDescription: "SakuraMedia 的服务端项目"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tinypinglite/sakuramediabe"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["jav", "sakuramedia"]
stars: 87
forks: 19
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-25T08:19:01Z"
lastCommitAt: "2026-11-03T22:12:27Z"
lastReleaseAt: "2026-09-03T06:58:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 36
maintainers: ["tinypinglite"]
openGraphImageUrl: "https://opengraph.githubassets.com/30c59c4b8c40807a14988f27061eae47710cbb188c414632189d8bd0af8d7c01/tinypinglite/sakuramediabe"
---

# SakuraMediaBE

[Simplified Chinese](https://github.com/tinypinglite/sakuramediabe/blob/HEAD/README.zh-CN.md) | English

SakuraMediaBE is the server-side project of SakuraMedia. It provides the backend capabilities of SakuraMedia: media library management, movie metadata, download tasks, video thumbnail generation, moment marking, image-based search, and playback access. The client-side project lives in [sakuramedia](https://github.com/tinypinglite/sakuramedia).

The project is currently built on Python 3.10, FastAPI, Peewee, Pydantic 2 and APScheduler. The code is layered as `api -> service -> model` and targets single-account deployments.

## Acknowledgements

The movie number parsing implementation and its regression tests were inspired by the following open-source projects, and we would like to thank their authors: [JavSP](https://github.com/Yuukiy/JavSP), [JavBoss](https://github.com/Solr159/JavBoss), [Emby.Plugins.JavScraper](https://github.com/JavScraper/Emby.Plugins.JavScraper), [JAVOneStop](https://github.com/ddd354/JAVOneStop), [metatube-sdk-go](https://github.com/metatube-community/metatube-sdk-go), [Movie_Data_Capture](https://github.com/mvdctop/Movie_Data_Capture),…
