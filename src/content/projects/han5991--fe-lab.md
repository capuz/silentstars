---
repo: "Han5991/fe-lab"
name: "fe-lab"
description: "fe 공부하기 위한 모노레포"
readmeQualityOk: true
url: "https://github.com/Han5991/fe-lab"
homepage: "https://blog.sangwook.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 7
forks: 1
openIssues: 4
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-23T02:12:31Z"
lastCommitAt: "2026-08-17T04:18:46Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 76
maintainers: ["renovate[bot]", "Han5991", "claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/23b18254c74732514308de457008553b5602c567a43c9ff56abbdffaecccbeeb/Han5991/fe-lab"
discussionCount: 12
---

# 🧪 fe-lab

> **공부하고 실험하며 기록하는 프론트엔드 실험실**

프론트엔드 기술을 직접 부딪혀 보고, 실험 결과를 글로 정리해 두는 개인 작업장입니다. Turborepo 기반 모노레포로 운영 중인 기술 블로그(`blog.sangwook.dev`)와, 새 기술/패턴을 시도해 보는 실험용 앱·패키지가 한 저장소 안에 함께 있습니다.

---

## 🎯 이 저장소의 두 가지 목적

| 목적                         | 어디                                                            | 자세히                                                                                                                            |
| ---------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **🚀 운영 중인 기술 블로그** | `apps/blog/web` + `apps/blog/posts`                             | Next.js SSG → GitHub Pages 배포, Supabase로 조회수/Admin/Analytics 처리. 콘텐츠 파이프라인이 깨지지 않도록 회귀 테스트로 잠가 둠. |
| **🧪 새 기술/패턴 실험실**   | `apps/{react,next.js,typescript,socket-server}` + `packages/**` | 한 가지 주제에 한 앱을 붙여 두고, 디자인 시스템·번들러·실시간 통신·타입 설계 등을 자유롭게 시도.                                  |

블로그는 실제로 쓰는 자산이라 신중하게, 그 외 워크스페이스는 부담 없이 실험합니다.

---

## 📁 워크스페이스

### apps/

| 이름            | 종류             | 핵심 스택…
