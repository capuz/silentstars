---
repo: "kgcrom/cluefin"
name: "cluefin"
description: "Your financial investment assistant"
readmeQualityOk: true
url: "https://github.com/kgcrom/cluefin"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [80, 20]
stars: 125
forks: 28
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-12T05:16:36Z"
lastCommitAt: "2026-07-12T06:17:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 40
maintainers: ["kgcrom", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1d072b387022e44582d97b2be4b5a82996201841a85029e48b33a2a9363186d/kgcrom/cluefin"
---

# Cluefin

한국 금융 투자 분석 툴킷. 키움/KIS/DART API 클라이언트, 기술적 분석, ML 예측을 제공합니다.

> 이 프로젝트는 교육 및 연구 목적으로만 제공됩니다. 금융 자문을 구성하지 않으며 어떤 결과도 보장하지 않습니다.

## 빠른 시작

```bash
brew install lightgbm          # macOS 시스템 의존성
git clone https://github.com/kgcrom/cluefin.git && cd cluefin
uv sync --all-packages
cp apps/cluefin-cli/.env.sample .env  # API 키 설정
```

**사전 요구사항**: [uv](https://github.com/astral-sh/uv), Python 3.10+

## 프로젝트 구조

uv 워크스페이스 모노레포:

| 패키지 | 설명 |
|--------|------|
| [cluefin-openapi](https://github.com/kgcrom/cluefin/blob/HEAD/packages/cluefin-openapi/) | 키움/KIS/DART Python API 클라이언트 (Pydantic, 속도 제한, 인증) |
| [cluefin-openapi-ts](https://github.com/kgcrom/cluefin/blob/HEAD/packages/cluefin-openapi-ts/) | KIS/키움 TypeScript API 클라이언트 (Node 20+, Zod, ESM/CJS) |
| [cluefin-ta](https://github.com/kgcrom/cluefin/blob/HEAD/packages/cluefin-ta/) | 순수 Python 기술적 분석 (TA-Lib 호환, 45개 지표) |
| [cluefin-xbrl](https://github.com/kgcrom/cluefin/blob/HEAD/packages/cluefin-xbrl/) | DART XBRL 재무제표 파서 |
| [cluefin-cli](https://github.com/kgcrom/cluefin/blob/HEAD/apps/cluefin-cli/) | Rich 기반 CLI (기술적 분석, LightGBM + SHAP 예측) |
|…
