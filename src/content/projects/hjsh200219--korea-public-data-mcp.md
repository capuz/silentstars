---
repo: "hjsh200219/korea-public-data-mcp"
name: "korea-public-data-mcp"
description: "대한민국 공공데이터 MCP(Model Context Protocol) 서버입니다. 법제처 국가법령정보센터, DART 전자공시시스템, 공공데이터포털 API를 통합하여 법령·판례·기업공시·생활정보를 검색/조회합니다."
readmeQualityOk: true
url: "https://github.com/hjsh200219/korea-public-data-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T16:36:24Z"
lastCommitAt: "2026-08-12T05:14:37Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 78
undervaluedScore: 48
maintainers: ["hjsh200219"]
openGraphImageUrl: "https://opengraph.githubassets.com/b37715bca931194399d448e444e687450528ccddcc406b4ddfb015b1650bc339/hjsh200219/korea-public-data-mcp"
fundingLinks: ["GITHUB:https://github.com/hjsh200219"]
---

# K Public Data MCP

대한민국 공공데이터 MCP(Model Context Protocol) 서버입니다.
법제처 국가법령정보센터, DART 전자공시시스템, 공공데이터포털, 관세청 UNI-PASS, 수출입은행 환율, 농림축산식품부, 금융감독원 금융상품 비교공시, 금융위원회 보험상품 공시, 조달청 나라장터, YouTube 자막·메타데이터, 한국관광공사 KorService2, 쿠팡 파트너스, 국회 Open API, 정부24 plus AI 민원 검색, 해외 판례(CourtListener·OpenLegalData) API를 통합합니다.

---

## 조회 가능 항목

### 법제처 국가법령정보센터 (21개 도구)

| # | 분류 | 검색 도구 | 상세 조회 도구 | 설명 |
|---|------|-----------|----------------|------|
| 1 | 법령 | `search_laws` | `get_law_detail` | 법률, 대통령령, 총리령, 부령 등 |
| 2 | 판례 | `search_cases` | `get_case_detail` | 대법원 및 하급법원 판례 |
| 3 | 헌재결정례 | `search_constitutional` | `get_constitutional_detail` | 헌법재판소 결정례 |
| 4 | 법령해석례 | `search_interpretations` | `get_interpretation_detail` | 법제처 법령해석 |
| 5 | 행정규칙 | `search_admin_rules` | `get_admin_rule_detail` | 훈령, 예규, 고시, 공고 등 |
| 6 | 자치법규 | `search_ordinances` | `get_ordinance_detail` | 지방자치단체 조례 및 규칙 |
| 7 | 조약 | `search_treaties` | `get_treaty_detail` | 대한민국 체결 조약 |
| 8 | 법령용어 | `search_legal_terms` | `get_legal_term_detail` | 법령에서 사용되는 용어 정의 |
| 9 | 영문법령 | `search_english_laws` | `get_english_law_detail` | 한국 법령의 영문 번역본 |
| 10 | 위원회 결정문 | `search_committee_decisions` | `get_committee_decision_detail` |…
