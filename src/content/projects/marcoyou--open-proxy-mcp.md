---
repo: "MarcoYou/open-proxy-mcp"
name: "open-proxy-mcp"
description: "MCP server for Korean DART filings — financials, valuation, ownership, business analysis, and AGM proxy-voting for AI agents."
readmeQualityOk: true
url: "https://github.com/MarcoYou/open-proxy-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["esg", "finance", "governance", "korea", "stewardship", "sustainability", "ai-agent", "claude", "financial-analysis", "fintech"]
stars: 26
forks: 4
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-19T07:05:07Z"
lastCommitAt: "2026-09-06T08:04:28Z"
lastReleaseAt: "2026-07-20T22:31:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 39
maintainers: ["MarcoYou", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/538c7c9e918bda1d86892525d92dcd3e45202f986d47fb551dc82b3325f4dbec/MarcoYou/open-proxy-mcp"
---

# OpenProxy MCP

[English README](https://github.com/MarcoYou/open-proxy-mcp/blob/HEAD/README_ENG.md)

[빠른 시작](#빠른-시작) · [주요 기능](#주요-기능) · [도구 구조](#도구-구조-31개) · [데이터 출처](#데이터-소스)

## Why OpenProxy?

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="screenshot/opm-readme-particle-flow-dark-ko-20260905.png">
  <source media="(prefers-color-scheme: light)" srcset="screenshot/opm-readme-particle-flow-light-ko-20260905.png">
</picture>

**안건은 한 줄이지만, 판단에는 회사 전체가 필요합니다.**

OpenProxy는 주주총회 의결권 분석에서 시작했습니다. 재무제표, 지분 구조, 배당 이력, 이사회와 관련 법령을 함께 읽기 위해 만든 기능은 DART 공시 전반을 분석하는 범용 엔진으로 확장됐습니다. 재무 분석부터 의결권 권고까지, AI가 판단과 원문 근거를 함께 제시합니다.

## 빠른 시작

**설치 없이 DART API 키 하나로 연결합니다.**

### 1. 무료 API 키 받기

DART는 한국 기업의 전자공시 시스템입니다. [DART OpenAPI](https://opendart.fss.or.kr/)에서 회원가입 후 무료 인증키를 신청합니다.

### 2. AI 서비스에 연결하기

커넥터 또는 앱 추가 화면의 서버 주소에 아래 URL을 입력합니다.

```
https://open-proxy-mcp.fly.dev/mcp?opendart=발급받은_OpenDART_API_키
```

> 서버 주소는 커넥터 설정에만 입력하세요. OpenProxy는 키 원문을 저장하지 않으며 로그에서도 가립니다.

| 서비스 | 연결 경로 | 이용 범위 |
|---|---|---|
| [**Claude**](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) | `Customize → Connectors → + → Add custom…
