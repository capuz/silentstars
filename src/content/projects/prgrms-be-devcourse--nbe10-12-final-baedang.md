---
repo: "prgrms-be-devcourse/NBE10-12-final-BAEDANG"
name: "NBE10-12-final-BAEDANG"
description: "프로그래머스 백엔드 10기 12회차 \"배당의민족\"팀의 최종 프로젝트"
readmeQualityOk: true
url: "https://github.com/prgrms-be-devcourse/NBE10-12-final-BAEDANG"
homepage: "https://nbe-10-12-final-baedang.vercel.app"
language: "Java"
languages: ["Java"]
languagePcts: [75]
stars: 5
forks: 0
openIssues: 12
closedIssues: 58
watchers: 0
contributors: 89
recentReleases: 10
createdAt: "2026-08-21T08:25:05Z"
lastCommitAt: "2026-09-04T08:10:19Z"
lastReleaseAt: "2026-09-01T00:48:58Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 65
maintainers: ["NextWave-Dev-Space", "oxcm07", "SOL4R1S"]
openGraphImageUrl: "https://opengraph.githubassets.com/52f2ca729faf5d9071cc6ff4389f80bc75acf45f2c225c1e45b205fb154af8c4/prgrms-be-devcourse/NBE10-12-final-BAEDANG"
---

# 모의 주식 트레이딩 서비스

주식 초보자를 위한 교육형 모의투자 서비스입니다.
실제 시세로 거래하되 돈은 가상이고, 수수료와 세금까지 반영해 **"산 가격에 팔면 본전"이 아니라는 것**을 체감하게 하는 것이 목표입니다.

가입하면 모의투자금 5,000만원을 받아 거래대금 상위 100종목(국내·미국)을 사고팔 수 있습니다.

|            |                                                |
| ---------- | ---------------------------------------------- |
| **백엔드** | Java 21 · Spring Boot 3.5.16 · Spring Data JPA |
| **프론트** | Next.js 16.3 (Node 20.9+)                      |
| **DB**     | PostgreSQL 18 + TimescaleDB                    |
| **시세**   | 토스증권 Open API                              |

---

## 폴더 구조

```
.
├── front/    Next.js 화면
├── back/     Spring Boot API
├── infra/    DB 스키마 · 로컬 Docker(local/) · AWS Terraform(development/)
└── docs/     설계 문서 (ERD · 와이어프레임 · API 명세)
```

`docs/` 안의 HTML 은 브라우저로 바로 열면 됩니다.

| 문서                  | 내용                                |
| --------------------- | ----------------------------------- |
| `docs/erd.html`       | 테이블 12개 · 컬럼 사전 · 배치 일정 |
| `docs/wireframe.html` | 화면 6개                            |
| `docs/api-spec.html`  | 엔드포인트 17개                     |
| [공용 구성요소 사용…
