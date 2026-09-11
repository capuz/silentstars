---
repo: "bunhine0452/Ocul-PM"
name: "Ocul-PM"
description: "Local-first AI project manager (AI PM) for AI coding agents — auto-journals, verifies & organizes what Claude Code · Cursor · Gemini CLI do. 코딩 에이전트용 로컬-우선 AI PM · 작업 자동 기록·검증·정리."
readmeQualityOk: true
url: "https://github.com/bunhine0452/Ocul-PM"
homepage: "https://oculpm.com"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [46, 37]
topics: ["ai-coding-agent", "ai-pm", "claude-code", "coding-agent", "cursor", "desktop-app", "dev-journal", "developer-tools", "gemini-cli", "llm"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-19T12:03:28Z"
lastCommitAt: "2026-09-11T08:16:13Z"
lastReleaseAt: "2026-06-14T10:35:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 62
maintainers: ["bunhine0452"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1243505851/6957d306-2aff-4ea0-8089-937998c30ebc"
fundingLinks: ["GITHUB:https://github.com/bunhine0452", "KO_FI:https://ko-fi.com/beachcombers"]
discussionCount: 0
---

<p><b>AI 코딩 에이전트가 코드를 쓰는 동안, 그 기록은 Ocul-PM 이 남깁니다.</b><br/>
Claude Code · Codex · Cursor · Gemini CLI 와 함께 쓰는 로컬-우선 프로젝트 매니저</p>

[oculpm.com](https://oculpm.com) · [키노트](https://oculpm.com/keynote) · [위키](https://oculpm.com/wiki) · [다운로드](https://github.com/bunhine0452/Ocul-PM/releases/latest) · [변경 이력](https://github.com/bunhine0452/Ocul-PM/blob/HEAD/CHANGELOG.md) · [이슈](https://github.com/bunhine0452/Ocul-PM/issues)

한국어 · [English](https://github.com/bunhine0452/Ocul-PM/blob/HEAD/README.en.md)

</div>

---

에이전트한테 일을 시키는 날이 늘수록 이상한 비용이 하나 생깁니다. 지난주에 Claude Code 가 어떤 파일을 왜 건드렸는지, Cursor 가 고쳤다는 버그가 진짜 고쳐졌는지를 매번 git log 와 기억에 의존해 다시 캐내는 일입니다. 코드는 남는데 맥락은 남지 않기 때문입니다.

Ocul-PM 은 프로젝트 폴더에 규칙 파일(`AGENTS.md`) 하나를 심는 것으로 시작합니다. 에이전트는 작업 하나를 끝낼 때마다 이 규칙대로 `.oculpm/journal/` 에 마크다운 일지를 남기고, 앱은 그것을 읽어 타임라인과 일일 브리프, 변경 diff 로 보여줍니다. 원본이 전부 마크다운 파일이라 코드와 함께 커밋할 수 있고, 앱이 없어도 그냥 읽힙니다.

서버는 없습니다. 데이터는 프로젝트의 `.oculpm/` 폴더와 로컬 SQLite 캐시에만 있고, 기기를 떠나는 것은 **여러분이 시작한 것뿐**입니다 — 직접 부른 LLM API 호출, 새 버전 확인, 그리고 켜야만 존재하는 것들(눌렀을 때의 GitHub 조회·테마 내려받기, 의미 검색 모델 최초 1회, Notion 연동). 세어 볼 수 있는 전체 목록은 [oculpm.com/privacy](https://oculpm.com/privacy) 에 있습니다.

## 세 가지처럼 보이지만, 하나의 앱입니다

### 📓 기록장 — 기록은 공짜여야 합니다…
