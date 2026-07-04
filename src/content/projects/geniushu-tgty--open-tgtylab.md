---
repo: "GeniusHu-tgty/Open-tgtylab"
name: "Open-tgtylab"
description: "开源逆向工程实验环境 — Agent 原生安全研究工具箱，集成 Ghidra/Rizin/Frida/SQLMap 知识库驱动分析"
url: "https://github.com/GeniusHu-tgty/Open-tgtylab"
language: "Lua"
languages: ["Lua", "TypeScript"]
languagePcts: [71, 21]
stars: 84
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-29T17:36:56Z"
lastCommitAt: "2026-07-04T06:12:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 25
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2c26e4c1375e8b6ddc6c76d56a2b80d27cb294f4f0599d9b974870e33faba9f1/GeniusHu-tgty/Open-tgtylab"
---

# 🐙 open-tgtylab

**One-click security research toolkit**

150+ MCP tools · 208 knowledge base articles · 15 automated pipelines

</div>

---

> [中文版](README.zh.md)

## Routing

```
Signal → kb_router(board=) → kb_read_file → Technique → MCP tool mapping → Execution
```

| Signal Type | Board | KB Categories / Files | MCP Tool Family |
|---|---|---|---|
| HTTP/Web/API/CVE/Cloud | `ctf-website` | 26/118 | `http_probe` `run_ctf_tool` `kb_router` |
| APK/DEX/SO/Frida/Java | `apk-reverse` | 8/20 | `android_app_baseline` `android_crypto_unpack_recipe` `android_frida_*` |
| PE/x64/x86/malware/driver | `pe-reverse` | 9/22 | `triage_pe` `ghidra_headless_analyze` `make_x64dbg_breakpoint_script` `sample_full_workup` |
| Crypto/Protocol/Cheat/IoT/Radio | `general` | 5/17 | `die_scan` `ghidra_*` `rizin_*` `python_re_tool_*` |

## Knowledge Base

```
kb/
├── ctf-website/techniques/   26 categories, 118 articles — Full web attack surface
├── apk-reverse/techniques/    8 categories,  20 articles — APK/DEX reverse engineering
├── pe-reverse/techniques/     9 categories,  22 articles — PE binary analysis
├── general/techniques/        5 categories,  17 articles — Cryptography / Protocols / Kernel…
