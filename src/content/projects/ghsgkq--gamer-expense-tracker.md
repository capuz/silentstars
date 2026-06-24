---
repo: "ghsgkq/Gamer-Expense-Tracker"
name: "Gamer-Expense-Tracker"
description: "게이머의 지출 추적기"
url: "https://github.com/ghsgkq/Gamer-Expense-Tracker"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [54, 31]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-01T23:40:48Z"
lastCommitAt: "2026-06-24T06:35:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 30
maintainers: ["ghsgkq"]
openGraphImageUrl: "https://opengraph.githubassets.com/17f5f00a8248521b4b1c0c59e070876ef801d2175d63cccf73b6e7d72bb2d1c5/ghsgkq/Gamer-Expense-Tracker"
---

# 🎮 게이머 가계부 (Gamer's Expense Tracker)

**게이머 가계부**는 Google과 Apple 양대 스토어의 결제 내역을 한곳에서 통합하여 분석하고 관리할 수 있도록 돕는 웹 애플리케이션입니다. 이제 흩어져 있던 지출 내역을 하나의 대시보드에서 시각적으로 확인하고 자신의 게임 소비 패턴을 손쉽게 파악할 수 있습니다.

## ✨ 주요 기능

### 📊 **통합 분석 대시보드 (핵심 기능)**

  - **하나의 페이지에서 모든 것을\!**: `Google Play(.json)`와 `Apple Store(.html)` 결제 내역 파일을 한 페이지에 모두 업로드하여 모든 지출을 통합된 데이터로 분석할 수 있습니다.
  - **플랫폼별 독립 분석**: 원한다면 Google 또는 Apple 전용 분석 페이지에서 각 스토어의 결제 내역만 따로 확인할 수도 있습니다.

### 🧾 **상세 분석 기능 (공통)**

  - **💱 다중 통화 지원**:

      - 결제 내역에 포함된 원화(₩), 달러($), 엔(¥) 등 다양한 통화를 자동으로 감지합니다.
      - 감지된 통화 목록이 드롭다운 메뉴로 제공되며, 원하는 통화를 선택하면 모든 요약, 차트, 내역이 해당 통화 기준으로 필터링되어 표시됩니다.

  - **📝 사용자 정의 키워드 관리**:

      - '기타'로 분류된 항목을 원하는 앱으로 재분류할 수 있도록 사용자가 직접 키워드를 추가하고 관리할 수 있습니다.
      - 앱 이름과 관련 키워드를 등록하고, 개별 키워드 또는 앱 전체를 삭제할 수 있습니다.
      - 키워드 목록이 길어질 경우를 대비해 실시간 검색 기능도 제공합니다.
      - (참고: 이 기능은 페이지를 새로고침하면 초기화됩니다.)

  - **💰 전체 결제 내역 요약**: 선택된 통화를 기준으로 모든 스토어의 총결제액과 가장 많은 금액을 지출한 '톱 스펜딩 게임'을 한눈에 보여줍니다.

  - **📈 전체 통계 시각화**: 선택된 통화를 기준으로, 지출액 상위 게임들의 누적 결제액 추이를 기간별(상반기/하반기) 라인 그래프로 시각화합니다.

  - **🔍 게임별 상세 분석**:

      - 월별 결제액 요약 및 상세 내역을 아코디언 UI로 제공합니다.
      - 월별 지출액 변동 추이를 막대그래프로 시각화합니다.
      - 상품명 검색 및 최신순 정렬을 지원하는 전체 결제 내역…
