---
repo: "BSofDeath/radio.bsod.kr"
name: "radio.bsod.kr"
description: "A webpage that compiles internet stream URLs for all radio stations in South Korea (runs on a serverless app built on Cloudflare Workers)"
originalDescription: "대한민국의 모든 라디오 방송국들에 대한 인터넷 스트림 URL을 엮은 웹페이지 (Cloudflare Workers에 구축한 서버리스 앱을 기반으로 작동)"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/BSofDeath/radio.bsod.kr"
homepage: "https://radio.bsod.kr"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [59, 34]
stars: 67
forks: 18
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-07-02T13:38:23Z"
lastCommitAt: "2026-11-10T14:49:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 52
maintainers: ["BSofDeath"]
openGraphImageUrl: "https://opengraph.githubassets.com/32354e9e3479db9dc6a5ec8749efbefa74a1cd1e94243b54b52978563849a977/BSofDeath/radio.bsod.kr"
---

# radio.bsod.kr
This project collects and compiles the stream URLs of all radio stations in South Korea to build a **radio player** web app that lets you listen to the broadcast you want in real time with a single click on the web.

To help people planning derivative projects, the README outlines part of the **actual production operating structure** and the **stream URL acquisition methods for major stations** gathered during development.

> Written as of November 2026. Applicability may differ from reality due to changes in station policies and other factors.

## Production operating structure
* This repository stores the static files that make up the web app. In the [production](https://radio.bsod.kr) environment, these are deployed and hosted on **Cloudflare Pages**.
* The [template](https://github.com/BSofDeath/radio.bsod.kr/blob/HEAD/functions/api/template) of predefined URLs and the logic for fetching stream URLs from station servers are handled by Cloudflare's serverless functions (**Pages Functions**). The web app uses the URLs obtained this way to play broadcasts (using libraries such as hls.js where necessary).

## How stream URLs are obtained
* Most stations serve HLS…
