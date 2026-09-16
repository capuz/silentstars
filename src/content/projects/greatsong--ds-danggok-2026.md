---
repo: "greatsong/ds-danggok-2026"
name: "ds-danggok-2026"
description: "당곡고 데이터 과학 웹 교재 (2026 2학기) — 바이브 코딩·서울 데이터 3부작"
readmeQualityOk: true
url: "https://github.com/greatsong/ds-danggok-2026"
language: "HTML"
languages: ["HTML"]
languagePcts: [79]
stars: 6
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-18T00:19:18Z"
lastCommitAt: "2026-09-16T08:48:19Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 62
maintainers: ["greatsong"]
openGraphImageUrl: "https://opengraph.githubassets.com/976c7e07f026c5900f19d23f360c27b457f48605d260a02739e35a2a48726562/greatsong/ds-danggok-2026"
---

# 데이터 과학 웹 교재 (고등학교 2022 개정)

당곡고등학교 2026학년도 2학기 『데이터 과학』 수업에서 실제로 쓰는 학생용·교사용 웹 교재입니다. 코드는 AI에게 맡기고 학생은 **질문 설정·데이터 감식·결과 해석·한계 인식**을 배우는 바이브 코딩 수업으로 설계했습니다.

**교재 보기** → <https://greatsong.github.io/ds-danggok-2026/>
**다른 학교에서 쓰기** → [포크와 커스텀 안내서](https://greatsong.github.io/ds-danggok-2026/fork-guide.html)

빌드 도구가 없습니다. HTML·CSS·JavaScript 파일을 GitHub Pages가 그대로 서빙합니다. 파일을 고치고 커밋하면 1~3분 뒤 반영됩니다.

---

## 선생님을 위한 안내

### 무엇이 들어 있나

| 폴더·파일 | 내용 |
|---|---|
| `lesson01~14.html` | 학생용 14차시. 각 차시는 개념 → 실습(①샘플 프롬프트 → ②AI가 준 코드 → ③개선) → 발견 → 판단 → 정리 → 확인 문제 구조 |
| `lessonNN-deep.html` | 같은 차시의 자세한 판. 본문이 거의 같고 설명이 더 붙습니다 |
| `extra-*.html` | 심화·자유 실습 (영화 API, 모델 도감, 가설 검증) |
| `concepts·glossary·study-guide·eval-workbook.html` | 시험 대비 자료 4종 |
| `teacher/` | 차시별 진행안 14개, 이론 지도서, 수업용 슬라이드, 개강 전 안내 |
| `gallery/` | 학생 작품 갤러리 (수파베이스 연동, 안 쓰면 데모 모드) |
| `assets/` | 스타일과 스크립트. 차시 공개 잠금(`release.js`·`gate.js`) 포함 |

### 수업 데이터

기온·영화·야구 데이터는 [greatsong/modudata](https://github.com/greatsong/modudata)에 있고 교재가 주소로 직접 읽습니다. 급식은 나이스 API를 실시간으로 호출합니다. **급식만 학교마다 다르고 나머지는 전국 공개 자료**라 어느 학교에서든 그대로 쓸 수 있습니다.

### 차시 공개 잠금

진도보다 앞선 차시는 학생 화면에서 잠깁니다. `assets/release.js`의 숫자 한 줄이 공개 범위를 정합니다.

```js…
