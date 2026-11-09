---
repo: "kakaotechcampus-4/ktc4-kangwon-4"
name: "ktc4-kangwon-4"
description: "카카오테크 캠퍼스 4기 2단계 팀 프로젝트 — 강원대 4팀"
readmeQualityOk: true
url: "https://github.com/kakaotechcampus-4/ktc4-kangwon-4"
homepage: "https://ktc4-kangwon-4.vercel.app"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 32]
stars: 5
forks: 0
openIssues: 21
closedIssues: 25
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-08-20T01:00:31Z"
lastCommitAt: "2026-11-09T00:54:20Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 52
maintainers: ["tokengeoji", "healthy27", "blackwellSW"]
openGraphImageUrl: "https://opengraph.githubassets.com/7208844f4b3b17d0c3bfcb1cafb22cdd784dff0fb6d58aafd7dee4aa5c92dacf/kakaotechcampus-4/ktc4-kangwon-4"
---

# RE:BORN

카카오테크 캠퍼스 4기 강원대 4팀의 폐업 준비 도우미입니다. 가게 상황을 확인하고, 지금 할 일 하나를 안내한 뒤 실행 결과에 따라 같은 Case의 다음 할 일을 다시 판단합니다.

- [서비스 화면](https://ktc4-kangwon-4.vercel.app) · [대표 사용자 흐름](https://github.com/kakaotechcampus-4/ktc4-kangwon-4/blob/HEAD/docs/hero-scenario.md)
- 현재 지원 범위는 비프랜차이즈 개인 카페입니다. 지원금 자격을 확정하거나 기관에 대신 신청·제출하지 않습니다.
- 상황 진단 → 지금 할 일 → 결과 제출 → 변경 내용·충돌 확인 → 다음 할 일로 이어집니다. 서류는 업로드·확인·누락 점검 뒤 제출용 ZIP을 준비합니다.
- 지원금 Agent는 현재 판단 실행 경로에서 호출하지 않습니다. [Agent 구조와 범위](https://github.com/kakaotechcampus-4/ktc4-kangwon-4/blob/HEAD/docs/agent/architecture.md)를 참고하세요.

## 로컬 실행

- FE: Node.js 버전·설치·로컬 API 연결은 [Frontend README](https://github.com/kakaotechcampus-4/ktc4-kangwon-4/blob/HEAD/frontend/README.md)를 따릅니다.
- BE: Python 3.12에서 `backend/requirements.txt`를 설치하고, 서류 기능은 `backend/`에서 `python scripts/setup_agent_ocr.py`를 실행해 OCR을 준비합니다. 루트의 `docker compose up -d db`는 개발용 MySQL만 실행합니다.
- 설정: AI 연결은 [루트 환경변수 예시](https://github.com/kakaotechcampus-4/ktc4-kangwon-4/blob/HEAD/.env.example), 서버 인증·DB는 [backend 환경변수 예시](https://github.com/kakaotechcampus-4/ktc4-kangwon-4/blob/HEAD/backend/.env.example)를 참고해 각각 `.env`와 `backend/.env`를 채웁니다. 비밀값은 커밋하지 않습니다.
- BE는 `backend/`에서 `uvicorn app.main:app…
