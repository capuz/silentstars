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
stars: 22
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-19T07:05:07Z"
lastCommitAt: "2026-08-23T04:08:29Z"
lastReleaseAt: "2026-07-20T22:31:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["MarcoYou", "HojiPark", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00cb21c614d62bda17c13ef051c11743f46d90d986c9fa3aaeeca33fc9247a9e/MarcoYou/open-proxy-mcp"
---

# OpenProxy MCP

[English README](https://github.com/MarcoYou/open-proxy-mcp/blob/HEAD/README_ENG.md)

## Why OpenProxy?

**주총 안건에 제대로 투표하려면, 그 회사의 모든 것을 알아야 합니다.**

OpenProxy는 주주총회 의결권 분석을 위해 태어났습니다. 그런데 안건 하나를 판단하려면 재무제표, 지분 구조, 배당 이력, 이사회, 법령까지 전부 필요했습니다. 그걸 다 만들다 보니 — **DART 공시분석 범용 엔진**이 됐습니다. 재무 분석부터 의결권 판단까지, AI에게 물어보면 몇 초 안에 공시 근거와 함께 답합니다.

*사업보고서·감사보고서 등 공시를 근거로 재무를 분석합니다 — OpenProxy를 연결한 AI 대화 예시*

## 주요 기능

각 기능을 클릭하면 상세 설명 페이지로 이동합니다.

- **[주총 의결권 보조](https://github.com/MarcoYou/open-proxy-mcp/blob/HEAD/docs/features/proxy-voting.md)**: 소집공고 안건을 구조화하고 안건별 FOR/AGAINST/REVIEW 권고와 근거를 제시합니다.
- **[재무지표](https://github.com/MarcoYou/open-proxy-mcp/blob/HEAD/docs/features/financials.md)**: 수익성·안정성·현금흐름 + 듀퐁 분해·감사의견 추이. 분기는 누적(YTD)·당기(3개월) 두 기준으로 QoQ·YoY 제공.
- **[밸류에이션](https://github.com/MarcoYou/open-proxy-mcp/blob/HEAD/docs/features/valuation.md)**: PER·PBR·배당수익률(기업 심층) + 시장·산업·종목 히스토리. `scope="explain"`으로 계산 과정·출처까지 답합니다.
- **[자산주 스크리닝](https://github.com/MarcoYou/open-proxy-mcp/blob/HEAD/docs/features/asset-holdings.md)**: 보유 자산(현금성·투자부동산·지분증권)을 티어로 나누고 상장 보유지분은 시가로 마킹 — 시총 대비 잉여자산·지분NAV 배수로 "숨은 자산"을 찾습니다.
- **[사업의…
