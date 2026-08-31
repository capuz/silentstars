---
repo: "fankimm/dst-craft"
name: "dst-craft"
description: "dstcraft.com"
readmeQualityOk: true
url: "https://github.com/fankimm/dst-craft"
homepage: "https://dstcraft.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 9
forks: 0
openIssues: 4
closedIssues: 86
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-25T10:09:21Z"
lastCommitAt: "2026-08-31T09:59:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 54
maintainers: ["fankimm"]
openGraphImageUrl: "https://opengraph.githubassets.com/474d29828357cef8a210685740a379c137ede83a20c6b09c7a415e1c2272d690/fankimm/dst-craft"
---

# DST Crafting Guide

Don't Starve Together 크래프팅 레시피 가이드 웹앱.

🔗 **Live**: [dstcraft.com](https://www.dstcraft.com)

## Features

- **카테고리 드릴다운 네비게이션**: 카테고리 그리드 → 아이템 목록 → 아이템 상세. URL 쿼리 파라미터 기반으로 브라우저 뒤로가기/앞으로가기 지원 (Safari 스와이프 제스처 포함)
- **21개 카테고리**: 캐릭터 고유, 도구, 조명, 제작대, 정제 재료, 무기, 갑옷, 의상, 치유, 마법, 장식, 건축물, 저장, 요리, 식량/원예, 낚시, 항해, 비팔로, 겨울, 여름, 방수
- **100+ 크래프팅 아이템**: 재료, 제작대, 카테고리 정보 포함. 다중 카테고리 지원 (예: 눈우산 → 방수/의상/여름)
- **30개 캐릭터 고유 아이템**: Willow, Wolfgang, Wendy, Wickerbottom, Maxwell, Wigfrid, Webber, Warly, Wormwood, Winona, Walter, Wanda
- **19명 캐릭터 필터**: 캐릭터별 고유 아이템 필터링
- **다크/라이트/시스템 테마**: 설정 버튼으로 전환. CSS 변수 기반 시맨틱 컬러 토큰
- **한국어/영어 지원**: 브라우저 언어 자동 감지 (시스템 설정) 또는 수동 선택
- **PWA**: 오프라인 지원, 홈 화면에 추가 가능
- **반응형 디자인**: 모바일 바텀시트 + 데스크탑 하단 패널

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router, Static Export)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) (Button, Input, ScrollArea, Tooltip, Sheet, Badge)
- [Lucide React](https://lucide.dev) (아이콘)

## Getting Started

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인.

## Build

```bash
npm run build
```

`out/` 디렉토리에 정적 파일…
