---
repo: "LING71671/open-reverselab"
name: "open-reverselab"
description: "Open-source reverse engineering lab: 197-article knowledge base + MCP tools + CTF/APK/PE automation toolchain. Agent-native. Note: Due to scene reasons, there is currently a bug that allows almost all AIs to be jailbroken, waiting for official fixes, but please conduct security testing under legal authorization😉"
originalDescription: "Open-source reverse engineering lab: 197-article knowledge base + MCP tools + CTF/APK/PE automation toolchain. Agent-native.  Note:由于场景原因，目前有让几乎所有AI都会越狱的bug,静等官方修复,但是请在合法授权下进行安全测试😉"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LING71671/open-reverselab"
homepage: "https://ling71671.github.io/open-reverselab/"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["ctf", "ai-agent", "android-reverse-engineering", "binary-analysis", "claude-code", "cryptography", "frida", "ghidra", "knowledge-base", "malware-analysis"]
stars: 388
forks: 114
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T14:31:38Z"
lastCommitAt: "2026-07-06T07:03:12Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 21
maintainers: ["LING71671", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/b589fbb87925c2092561fead4e4fdc4d43804cbd9633eaf45f9172c76622ed7f/LING71671/open-reverselab"
---

# ReverseLab

Open-source reverse engineering lab — 178-article knowledge base, 100+ MCP automation tools, covering CTF pentesting / APK reverse engineering / PE binary analysis / cryptography & protocol cracking / game cheating analysis. Agent-native, directory-as-convention.

> [中文版](https://github.com/LING71671/open-reverselab/blob/HEAD/README.zh.md)

## Routing

```
Signal → kb_router(board=) → kb_read_file → Attack chain → MCP tool mapping → Execution
```

| Signal Type | Board | KB Categories / Files | MCP Tool Family |
|---|---|---|---|
| HTTP/Web/API/CVE/Cloud/CAPTCHA | `ctf-website` | 26/118 | `http_probe` `run_ctf_tool` `kb_router` |
| APK/DEX/SO/Frida/Java | `apk-reverse` | 8/20 | `android_app_baseline` `android_crypto_unpack_recipe` `android_frida_*` |
| PE/x64/x86/malware/driver | `pe-reverse` | 9/22 | `triage_pe` `ghidra_headless_analyze` `make_x64dbg_breakpoint_script` `sample_full_workup` |
| Crypto/Protocol/Cheat/IoT/Radio | `general` | 5/17 | `die_scan` `ghidra_*` `rizin_*` `python_re_tool_*` |

## Knowledge Base

```
kb/
├── ctf-website/techniques/   26 categories, 118 articles — Full web attack surface
├── apk-reverse/techniques/    8 categories, 20 articles —…
