---
repo: "JaehwanPark/KORStockScan"
name: "KORStockScan"
description: "🚀 KORStockScan - AI 기반 코스피 퀀트 자동매매 스나이퍼 KORStockScan은 키움증권 REST API+와 머신러닝(Stacking Ensemble)을 활용하여 코스피(KOSPI) 우량주를 스캐닝하고, 실시간 웹소켓을 통해 최적의 타점을 잡아내어 완전 자동매매를 수행하는 퀀트 트레이딩 봇입니다.  단순한 기술적 지표를 넘어 **'스마트 머니 가속도(외인/기관 매집 속도)'**와 **'시장 상태(Regime) 판독'**을 통해 폭락장에서도 살아남는 강력한 생존력을 목표로 설계되었습니다."
url: "https://github.com/JaehwanPark/KORStockScan"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["kiwoom", "kiwoom-api", "kiwoom-open-api", "kiwoom-rest-api", "kospi", "krx-client"]
stars: 7
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-02T11:14:30Z"
lastCommitAt: "2026-06-24T23:39:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["JaehwanPark"]
openGraphImageUrl: "https://opengraph.githubassets.com/1955691c09e81164b13a53508c7943bbc4fc89604835e5c630a01198972ce337/JaehwanPark/KORStockScan"
---

# KORStockScan

KORStockScan은 한국 주식 매매를 자동으로 관찰하고, 장중 판단과 장후 복기를 이어 붙여 다음 장전의 실행 후보를 준비하는 개인용 리서치/운영 시스템입니다.

짧게 말하면 세 가지를 함께 합니다. 장중에는 키움 시세와 계좌 상태를 보며 스캘핑 후보를 평가하고, 장후에는 실제 매매와 시뮬레이션 결과를 비교해 무엇이 나았는지 계산합니다. 그리고 그 결과를 다음 장전의 제한된 실행 후보로만 넘겨, 실계좌 변경이 조용히 커지지 않도록 막습니다.

이 저장소의 현재 기준 문서는 [Plan Rebase](docs/plan-korStockScanPerformanceOptimization.rebase.md)입니다. 날짜별 실행 항목은 [stage2 checklist](docs/checklists/README.md)가 소유하고, 시간대별 운영 절차는 [Time-Based Operations Runbook](docs/time-based-operations-runbook.md)을 따릅니다.

현재 기준일: `2026-05-24 KST`

## 무엇을 하는가

KORStockScan은 단순한 매수/매도 봇이 아니라, 매매 판단을 계속 검증하는 자동화 체인에 가깝습니다.

장중에는 키움 REST/WebSocket 데이터, 호가와 체결, 계좌 상태, 보유 포지션, AI 판단을 모아 후보를 평가합니다. 스캘핑은 빠른 진입과 보유/청산 품질을 중점적으로 보고, 스윙은 추천부터 진입, 보유, 추가매수, 청산까지의 흐름을 dry-run 중심으로 추적합니다.

장후에는 하루 동안의 이벤트를 다시 엮습니다. 실제 주문이 들어간 경우와 시뮬레이션으로만 남긴 경우를 분리하고, 놓친 진입이나 피한 손실도 따로 복기합니다. 여기서 중요한 기준은 단순 승률이 아니라 기대값과 순이익입니다.

다음 장전에는 장후 산출물 중 안전장치와 검증을 통과한 항목만 제한적으로 runtime env에 반영합니다. 장중에 임의로 한계값을 바꾸거나, 리포트 하나만 보고 실주문 범위를 넓히는 방식은 사용하지 않습니다.

## 주요 기능

**스캘핑 엔진**

장중 후보를 감시하고, AI 점수, 유동성, 호가 품질, 지연 상태, 과열 여부, 수급 맥락을 함께 봅니다. 점수는 중요한 특징값이지만 단독 매수 명령은 아닙니다. stale quote, 브로커 제출 가드, 계좌/수량/쿨다운 같은 안전장치는 항상 우선합니다.

**스윙…
