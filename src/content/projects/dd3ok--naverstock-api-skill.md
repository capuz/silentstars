---
repo: "dd3ok/naverstock-api-skill"
name: "naverstock-api-skill"
description: "비공식 네이버증권 API Skill: 인증 없이 주식·시장 데이터를 조회하는 경량 스킬"
readmeQualityOk: true
url: "https://github.com/dd3ok/naverstock-api-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["naverstock", "naverstock-api", "naverstock-skill", "agent-skill", "codex-skill", "stock-api", "claude-skill", "korean-stocks", "market-data", "stock-naver-com"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-27T01:13:13Z"
lastCommitAt: "2026-09-07T08:35:36Z"
lastReleaseAt: "2026-07-17T04:21:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 37
maintainers: ["dd3ok"]
openGraphImageUrl: "https://opengraph.githubassets.com/23d08a6756332b1babd44f719e5f9b013a3af0f89e36c73b9b276c6596fdc4a9/dd3ok/naverstock-api-skill"
---

# 비공식 네이버 증권 API / Naver Stock API Skill

`stock.naver.com` 공개 데이터를 에이전트와 Python CLI에서 읽기 전용으로 조회하는 비공식 Agent Skill입니다.

네이버 증권 공식 Open API, 거래 API 또는 투자 조언 도구가 아닙니다. 로그인, OAuth 토큰, 쿠키, 계좌 정보 없이 공개 데이터만 조회합니다.

## 지원 범위

- 국내 주식의 시세·차트·호가·공시·IR·리서치, ETF·ETN·시장 랭킹과 펀드 상세
- 해외 주식의 시세·재무·뉴스, 해외 ETF 구성 종목과 지수·업종 정보
- 국내외 지수, 환율, 금리, 원자재, 경제 일정과 KRX 금 시세
- 업비트·빗썸 가상자산의 가격, 차트, 랭킹, 뉴스와 관련 콘텐츠
- 통합 검색, 시장 브리핑, 뉴스, 공지, 리서치와 공개 종목·코인 토론
- WiseReport 기업분석과 현재 화면에 없는 일부 레거시 조건검색

세부 기능과 확인 상태는 [API 카탈로그](https://github.com/dd3ok/naverstock-api-skill/blob/HEAD/references/api-catalog.md), 외부 HTML 범위는 [외부 공개 소스](https://github.com/dd3ok/naverstock-api-skill/blob/HEAD/references/external-sources.md)에서 확인할 수 있습니다.

## 설치

스킬 폴더명은 `naverstock-web-api`를 권장합니다.

### Codex

GitHub URL로 설치를 요청할 수 있습니다.

```text
https://github.com/dd3ok/naverstock-api-skill 에서 스킬을 설치해줘.
```

직접 설치하려면 개인 스킬 경로에 clone합니다.

```bash
mkdir -p ~/.agents/skills
git clone --depth 1 https://github.com/dd3ok/naverstock-api-skill.git ~/.agents/skills/naverstock-web-api
```

프로젝트에서만 사용하려면 `.agents/skills/naverstock-web-api`에 설치하세요. 자세한 탐색 경로는 [Codex Build skills 문서](https://learn.chatgpt.com/docs/build-skills)를 참고하세요.

### Claude…
