---
repo: "kims6305-bjk/reflection-probe-gate"
name: "reflection-probe-gate"
description: "Reflection probe verification subgraph for citation-grounded QA — with the A/B gate that rejected its own main probe (pre-registered, blinded, McNemar)"
readmeQualityOk: true
url: "https://github.com/kims6305-bjk/reflection-probe-gate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-28T00:12:12Z"
lastCommitAt: "2026-08-03T06:42:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["noreply"]
openGraphImageUrl: "https://opengraph.githubassets.com/39895e990196bf53c976dc9006ed500b159630274e838cf2049d8955670af5e1/kims6305-bjk/reflection-probe-gate"
---

# probe-graph — Reflection Probe Verification Subgraph for Citation-Grounded QA

[English](https://github.com/kims6305-bjk/reflection-probe-gate/blob/HEAD/README.en.md) | **한국어** | [中文](https://github.com/kims6305-bjk/reflection-probe-gate/blob/HEAD/README.zh-CN.md)

인용 기반 QA 파이프라인(RAG 봇)에 꽂는 **검증 서브그래프** 스킬과,
그 효과를 판정한 **A/B 실측 하네스** 전체를 담은 레포입니다.

핵심이 되는 결과부터 밝힙니다: **본 레포의 메인 프로브(P1)는 자체 실측 게이트에서
폐기 판정을 받았습니다.** 이 레포의 가치는 "만능 검증 프롬프트"가 아니라,
①문헌 근거로 설계한 프로브 3종과 ②그것을 **채택하기 전에 걸러낸 판정 절차**
(사전 등록 → 블라인드 채점 → McNemar)의 재현 가능한 전 과정입니다.

그리고 그 이후 4단계(Phase 1~3 + 계기 검침)에서 게이트는 **자기 자신의 실패까지
잡아냈습니다.** 재사용 가치가 가장 높은 수치는 프로브가 아니라 게이트 쪽에 있습니다:

| 게이트 지표 | 실측값 | 의미 |
|---|---|---|
| 계기 검침 검출 회수율 | **81.8%** (9/11) | 측정 도구가 신호를 잡는지 본 실행 **전에** 확인 |
| 계기 검침 3판 재현성 | **SPLIT 0건** / 55 | 판정이 흔들리지 않음 |
| 옆방 검증 (영어·생의학 / 한국어·비회계) | **2/2 PASS**, recall 100% | 도메인·언어·라벨러를 바꿔도 절차가 작동 |
| 진단 비용 | **1,650콜 → 165콜** | 실패 원인 규명을 10분의 1 비용으로 |
| 프로브 3표 합의 (Phase 1) | 회수율 90% 유지, 검토부담 38.9%→35.2%, **자동 오탐 0** | 붙이지 않고 **걷어내서** 얻은 파레토 바깥이동 |

> 📖 이 레포가 만들어진 하루의 전 과정(설계 근거·4연속 실패·게이트가 저자의 오진을 잡은
> 기록)은 [케이스 스터디](https://github.com/kims6305-bjk/reflection-probe-gate/blob/HEAD/docs/CASE_STUDY.md)에 순서대로…
