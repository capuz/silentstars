---
repo: "2rami/kasaterm"
name: "kasaterm"
description: "Rust wgpu 터미널"
readmeQualityOk: true
url: "https://github.com/2rami/kasaterm"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T15:34:45Z"
lastCommitAt: "2026-08-03T06:42:57Z"
lastReleaseAt: "2026-07-11T07:45:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["2rami", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b79391dc859326636ab2884ef71425db2aebee06333b1edb2652d44e5b8c1a2/2rami/kasaterm"
fundingLinks: ["GITHUB:https://github.com/2rami"]
---

# kasaterm

**Rust로 바닥부터 만든 크로스플랫폼 GPU 터미널.**

셀 렌더러 · 한글 IME · PTY를 기성 라이브러리 없이 자체 crate로 구현했고,<br/>
그 위에 **여러 Claude를 학생처럼 거느리는 GUI**를 얹었다.

[데모](#데모) · [강점](#강점--전부-자체-구현했다) · [crate](#재사용-가능한-crate) · [설치](#설치--실행) · [단축키](#단축키) · [구조](#구조)

</div>

---

## 데모

  <br/>
  <sub>GUI 버튼·드래그로 나눈 멀티페인. tmux prefix 키 없이 분할하고, 한글·색·box-drawing이 자체 렌더러로 그려진다.</sub>
</div>

---

## 이게 뭐야

자체 제작 GUI 터미널이다. tmux를 prefix 키 대신 **GUI 버튼·드래그·자연어**로 다루는 네이티브 Rust 앱이고, 렌더러·한글 IME·PTY까지 **기성 터미널 라이브러리에 기대지 않고 전부 직접 만들었다.**

두 축으로 읽으면 된다:

- **아래 — 터미널 엔진.** wgpu 셀 렌더러, 두벌식 한글 IME, 크로스플랫폼 PTY를 각각 **독립 crate**로 깎았다. 터미널을 만들려는 사람이 부품만 가져다 쓸 수 있게 설계했다.
- **위 — AI 오케스트레이션.** 그 엔진 위에서, pane마다 도는 Claude의 작업이 BA GUI(아로나 모드)로 실시간으로 보인다. 로그를 읽는 게 아니라 작업을 *지켜본다.*

---

## 강점 — 전부 자체 구현했다

기성 라이브러리를 붙인 게 아니라, 터미널의 핵심 부품을 바닥부터 만들었다.

| | 무엇 | crate |
|---|---|---|
| **GPU 셀 렌더** | swash atlas에 글리프를 한 번 굽고 셀당 인스턴스 1개로 그린다. box-drawing은 wgpu quad, CJK·이모지 fallback 내장 | `kasa-cells` |
| **한글 IME** | OS IME에 의존하지 않는 두벌식 입력 오토마타. 복합 종성까지 자체 조합 | `kasa-ime` |
| **크로스플랫폼 PTY** | `portable-pty` + `alacritty_terminal`. macOS·Linux BSD PTY와 Windows ConPTY가 **동일 코드 경로** | `kasa-pty` |
| **색재현** | shader sRGB→DisplayP3…
