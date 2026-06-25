---
repo: "jeong-sik/masc"
name: "masc"
description: "MASC - Multi-Agent Streaming Coordination in OCaml"
url: "https://github.com/jeong-sik/masc"
language: "OCaml"
languages: ["OCaml", "TypeScript"]
languagePcts: [60, 22]
stars: 6
forks: 1
openIssues: 161
closedIssues: 2763
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-01-18T04:00:31Z"
lastCommitAt: "2026-06-25T02:07:35Z"
lastReleaseAt: "2026-04-14T04:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["jeong-sik"]
openGraphImageUrl: "https://opengraph.githubassets.com/a12c0a523ca4dc738f0974b1c86bd068dc301a03d903d405a056a69e8c4164d3/jeong-sik/masc"
discussionCount: 0
---

# MASC

> **개인용 인프라**  
> MASC는 1인 개발 워크플로우용 도구다. 프로덕션 SLA, 외부 하드웨어 호환성, SemVer 기반 API 안정성을 보장하지 않는다.

MASC는 OCaml 5.x + Eio 기반의 다중 AI 코딩 에이전트 워크스페이스 오케스트레이션 도구다. 같은 저장소를 동시에 작업하는 여러 에이전트가 충돌하지 않도록 턴, 락, 작업자 소유권, 상태, 하트비트를 조율한다.

---

## Overview

```
┌─────────────────────────────────────────────┐
│  Client (Dashboard, Slack, Discord, Chat)   │
└───────────────────┬─────────────────────────┘
                    │ HTTP / WebSocket / MCP
┌───────────────────▼─────────────────────────┐
│  MASC                                       │
│  - Channel Gate                             │
│  - Phase & Turn FSM                         │
│  - Single-flight admission                  │
│  - Workspace, board, task, claim state      │
└───────────────────┬─────────────────────────┘
                    │ OAS bridge
┌───────────────────▼─────────────────────────┐
│  OAS / agent_sdk (single-provider runtime)  │
│  - Tool dispatch, context, retry            │
└─────────────────────────────────────────────┘
```

- **MASC**는 "언제, 어떤 에이전트 프로필로 턴을 실행할지"를 스케줄링하고 동시성을 제어하며, 다중 메시지 채널(Surface)을 조율한다.
- **OAS / agent_sdk**는 MASC가 선택한 단일 프로바이더 호출의 순수 실행만 담당한다.

---

## What it does

- **Multi-channel input**:…
