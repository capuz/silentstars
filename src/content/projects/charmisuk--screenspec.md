---
repo: "charmisuk/screenspec"
name: "screenspec"
description: "ScreenSpec - HTML 프로토타입에 script 한 줄을 붙여 화면정의서로 바꾸는 단일 파일 라이브러리. 단일 파일·의존성 0·MIT (wrap·overlay·frame)"
readmeQualityOk: true
url: "https://github.com/charmisuk/screenspec"
homepage: "https://charmisuk.github.io/screenspec/examples/shop.html"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["documentation", "korean", "overlay", "planning", "product-management", "prototype", "specification", "ux", "vanilla-js", "screen-spec"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 33
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-21T13:54:58Z"
lastCommitAt: "2026-08-28T12:24:08Z"
lastReleaseAt: "2026-08-24T08:50:21Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["charmisuk", "claude", "jasonjung-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/0528652fc16b0ec7c177b582f6452e494704e8e858336e73efd6c28c21bb034f/charmisuk/screenspec"
---

# ScreenSpec

**HTML 프로토타입에 `<script>` 한 줄을 붙여 화면정의서로 바꾸는 단일 파일 라이브러리.**
캡처 떠서 노션·컨플루언스에 번호 붙이고 설명 다는 작업을 없앤다.

▶ **[라이브 데모 열기](https://charmisuk.github.io/screenspec/examples/shop.html)** · 상단 "화면정의서" 버튼을 눌러보면 된다

| 프로토타입 모드 | 화면정의서 모드 |
|---|---|
|  |  |

- **단일 파일 · 의존성 0** — `<script>` 한 줄. 빌드·설치·계정 없음
- **프로토타입은 살아 있다** — 정의서 모드에서도 버튼이 눌리고 화면이 넘어간다
- **화면이 바뀌면 문서도 따라간다** — 헤더·기능 설명·목차가 자동 전환
- **React·Next도 지원** — DOM을 건드리지 않는 오버레이 모드, 또는 앱을 액자(iframe)에 넣고 모바일/PC 폭을 실제로 바꿔 보는 frame 모드
- **실무 화면정의서 문법 그대로** — 하위 항목 `1a·1b` 자동 번호, 사양과 이유 분리, 빈 상태·로딩·오류를 빠뜨리면 목차에 ⚠
- **보이지 않는 상태도 실물로** — 빈 상태·오류를 정의서에서 스위치로 켜서 화면에 직접 재현 (`preview`)
- **AI가 대신 붙인다** — [SKILL.md](https://github.com/charmisuk/screenspec/blob/HEAD/SKILL.md)를 읽히면 번호·설명까지 알아서
- **초안을 받은 뒤 직접 고친다** — 정의서 패널에서 문구를 눌러 수정하고 파일로 저장. 코드를 안 봐도 된다 (`readonly`로 잠글 수도)
- **PNG 한 장으로 뽑는다** — 화면 전체 높이 + 번호 + 머리말(화면 ID·경로·일시). 컨플·노션에 그대로 붙는다. 라이브러리 추가 없이
- **개발 정의를 같은 자리에** — 개발 PM 이 항목 옆에 정책·API를 적고(`layer:"dev"`), 리뷰어는 «기획만» 칩으로 걸러 본다
- **MIT** — 개인·상업 자유

## 이게 나한테 필요한가

**맞는 경우**

- AI(Claude 등)로 프로토타입 HTML을 만들고, 그걸 개발자에게 넘길 화면정의서가 따로 필요한 기획자
- 프로토타입을 고칠 때마다 문서 캡처를 다시 뜨는 게 반복 작업이라고 느끼는 사람
- 문서와 실물이 어긋나는 게 싫은 사람 (여기선 문서가 곧…
