---
repo: "singrum/ggeugle"
name: "ggeugle"
description: "가장 강력한 끝말잇기 엔진"
url: "https://github.com/singrum/ggeugle"
homepage: "https://engine.ikki.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "game", "geography", "javascript", "korean", "minimax", "webapp", "wordchain", "engine", "game-ai"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-07-18T06:24:30Z"
lastCommitAt: "2026-06-29T07:21:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 60
maintainers: ["singrum"]
openGraphImageUrl: "https://opengraph.githubassets.com/c967bfc4ee71e1c50d50cbfe7af0c7b8a1cfe44ea3b225e2f5eb939e0ac2dd4a/singrum/ggeugle"
---

# 끝말잇기 엔진

끝말잇기 엔진은 끝말잇기 단어 검색과 끝말잇기 게임 분석을 위한 웹 서비스입니다. (구 끄글)

[https://engine.ikki.app](https://engine.ikki.app)

## 설치/실행

아래 명령어로 로컬에서 프로젝트를 바로 실행할 수 있습니다.

```bash
git clone -b dev https://github.com/singrum/ggeugle.git
cd ggeugle
npm install
npm run dev
```

## 기술 스택

- Vite, React, Typescript, React Router v7
- 스타일링 : TailwindCSS, shadcn/ui
- indexed db : Dexie.js
- 상태 관리 : Zustand
- 워커 쓰레드 : Comlink
- 배포 : Vercel

## 주요 기능

- 승패에 따른 음절 및 단어 분류
- 고전적 인공지능 기반의 필승 전략 탐색 알고리즘 적용
- 컴퓨터(AI)와의 실시간 대결 인터페이스
- 게임 규칙 맞춤 설정 지원

## 탐색 성능 벤치마크

총 루트 단어 : **587개**  
승패 여부 탐색 성공 : **225개**

| 시작 단어 | 승패 여부 | 탐색 시간(sec) |
| --------- | --------- | -------------- |
| 겁결      | 패        | 3.5            |
| 견득      | 패        | 12.19          |
| 견효      | 패        | 0.33           |
| 견묘      | 패        | 0.3            |
| 견습      | 패        | 0.52           |
| 견이불식  | 패        | 0.33           |
| 견방직    | 패        | 0.36           |
| 결벽      | 패        | 0.37           |
| 결획      | 승        | 5.8            |
| 결단식    | 패        | 0.52           |
| 결결      | 패        | 5.19           |
| 결가부좌  | 패        | 0.37           |
| 겸업      | 승        | 0.29           |
| 겸지우겸  | 패…
