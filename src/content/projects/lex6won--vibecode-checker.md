---
repo: "Lex6won/vibecode-checker"
name: "vibecode-checker"
description: "A first-pass security linter that checks code quickly built with AI against Korean government and international security standards (CLI + MCP, air-gapped network support)"
originalDescription: "AI로 빠르게 만든 코드를 한국 정부·국제 보안 기준으로 점검하는 1차 보안 린터 (CLI + MCP, 망분리 지원)"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/Lex6won/vibecode-checker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 2
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-06-13T06:05:35Z"
lastCommitAt: "2026-11-07T09:29:26Z"
lastReleaseAt: "2026-10-14T21:39:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["Lex6won"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c7d5b8f2a4a2b2524df583ee24ee8ae456c85709806a4324196a18379d790b/Lex6won/vibecode-checker"
discussionCount: 0
---

# vibecode-checker

A static analysis tool that inspects the source and packages of projects built with AI coding. It does not call an LLM and does not execute code.

## Installation

Download the wheel from the release and install it. Python 3.11 or later is required.

```
pip install vibecode_checker-<버전>-py3-none-any.whl
```

## Usage

```
gvskb scan <폴더> --format html --output report --check-deps
gvskb check-package <이름> --ecosystem pypi --version <버전>
gvskb update-intel
gvskb sbom-report <파일>.sbom.cdx.json
```

Exit codes: 0 pass · 1 conditional · 2 block · 3 undeterminable.

## MCP Connection

```json
{ "mcpServers": { "gvskb": { "command": "gvskb-server" } } }
```

## License

[LICENSE](https://github.com/Lex6won/vibecode-checker/blob/HEAD/LICENSE) · Report vulnerabilities via [SECURITY.md](https://github.com/Lex6won/vibecode-checker/blob/HEAD/SECURITY.md)
