---
repo: "sorryhyun/yaar"
name: "yaar"
description: "You Are Absolutely Right!"
url: "https://github.com/sorryhyun/yaar"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-28T09:21:49Z"
lastCommitAt: "2026-06-25T01:32:08Z"
lastReleaseAt: "2026-02-24T13:17:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["sorryhyun", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/68f2ff2d5970e5b6dd5acf03b596d35b094ef5682b6feddde356e9cf4bda108f/sorryhyun/yaar"
---

# YAAR

[English version](./README.en.md)

> **Y**ou **A**re **A**bsolutely **R**ight — AI가 다음에 무엇을 보여주고 할지 스스로 결정하는 리액티브 AI 인터페이스.

MCP 도구, 스킬, 플러그인, A2A까지 — 시스템 프롬프트 8K 토큰 안에서 전부 동작합니다. 앱을 만들고, 데이터를 시각화하고, 외부 서비스와 연동합니다.

## 설치

Codex 혹은 Claude Code 사용자 인증이 필수입니다.

```bash
curl -fsSL https://raw.githubusercontent.com/sorryhyun/yaar/master/install.sh | bash
yaar                # 브라우저가 자동으로 열립니다
```

Linux, macOS (Intel & Apple Silicon), Windows (WSL) 지원. 바이너리 하나로 실행되며, Bun이나 Node.js 설치가 필요 없습니다.

Windows (PowerShell): `irm https://raw.githubusercontent.com/sorryhyun/yaar/master/install.ps1 | iex`

실행 후 "필수 앱 설치해줘" 같은 말로 시작하시면 됩니다.

<details>
<summary>기타 설치 옵션</summary>

**특정 버전 / 설치 경로 변경:**
```bash
VERSION=v0.1.0 curl -fsSL ... | bash     # 특정 버전
INSTALL_DIR=/usr/local/bin curl -fsSL ... | bash  # 설치 경로 변경
```

**Windows:** `yaar.exe`를 [릴리즈 페이지](https://github.com/sorryhyun/yaar/releases)에서 직접 다운로드할 수도 있습니다.

**소스에서 빌드** ([Bun](https://bun.sh/) >= 1.1 필요):
```bash
git clone https://github.com/sorryhyun/yaar.git && cd yaar
bun install
make dev          # 브라우저가 자동으로 열립니다
```

</details>

## 뭐가 다른가요?

- **단 5개의 도구로 모든 것을 합니다.** tool description을 에이전트가 스스로 찾게 하여 초기 컨텍스트를 최소화하고, I/O와…
