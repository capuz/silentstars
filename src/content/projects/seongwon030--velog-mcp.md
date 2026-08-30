---
repo: "seongwon030/velog_mcp"
name: "velog_mcp"
description: "Velog MCP (Claude, Codex)"
readmeQualityOk: true
url: "https://github.com/seongwon030/velog_mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-21T02:52:28Z"
lastCommitAt: "2026-08-30T09:26:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 16
maintainers: ["seongwon030"]
openGraphImageUrl: "https://opengraph.githubassets.com/4973ce216e580ecf4a60838f8e27a5ca7612394ca365ed21f91bc2f0eccc20de/seongwon030/velog_mcp"
---

# velog-mcp-claude

> Velog 개발자([@velopert](https://github.com/velopert))로부터 운영을 허용한다는 답변을 받은 독립 오픈소스입니다.

Claude가 Velog에 직접 포스트를 작성·발행·수정·삭제하고, 댓글·좋아요·검색·트렌딩까지 다룰 수 있는 MCP 서버.

stdio 기반 표준 MCP 서버라 Claude Code, Claude Desktop, Codex CLI 등 MCP를 지원하는 클라이언트에서 모두 동작합니다.

**npm**: [velog-mcp-claude](https://www.npmjs.com/package/velog-mcp-claude) | **요구사항**: Node.js 18+

## 설치

```bash
npx -p velog-mcp-claude velog-mcp-setup
```

Velog에 로그인한 상태에서 브라우저 DevTools → Application → Cookies → `https://velog.io`에서 `access_token`과 `refresh_token` 값을 복사해 입력하세요.

토큰은 `~/.velog-mcp.json`에 `0600` 권한으로 저장됩니다.

## 설정

### Claude Code

```bash
claude mcp add velog -- npx -y velog-mcp-claude
```

전역으로 추가하려면:

```bash
claude mcp add --scope global velog -- npx -y velog-mcp-claude
```

### Claude Desktop

`~/Library/Application Support/Claude/claude_desktop_config.json`에 추가:

```json
{
  "mcpServers": {
    "velog": {
      "command": "npx",
      "args": ["-y", "velog-mcp-claude"]
    }
  }
}
```

### Codex CLI

```bash
codex mcp add velog -- npx -y velog-mcp-claude
```

또는 `~/.codex/config.toml`에 직접 추가:

```toml
[mcp_servers.velog]
command = "npx"
args = ["-y", "velog-mcp-claude"]
```

등록 확인은 `codex…
