---
repo: "NodeSecure/js-x-ray"
name: "js-x-ray"
description: "JavaScript & Node.js open-source SAST scanner. A static analyser for detecting most common malicious patterns 🔬."
url: "https://github.com/NodeSecure/js-x-ray"
homepage: "https://nodesecure.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["security", "security-tools", "security-audit", "ast-analysis", "ast", "javascript", "nodejs", "sast", "supply-chain-security"]
stars: 286
forks: 40
openIssues: 10
closedIssues: 112
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2020-03-26T21:15:45Z"
lastCommitAt: "2026-06-25T06:41:17Z"
lastReleaseAt: "2023-11-26T14:47:46Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 41
maintainers: ["dependabot[bot]", "fraxken", "clemgbld"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e632daadcb39a70f4033807c3280e8727740d1504958689a487403aa0e452b6/NodeSecure/js-x-ray"
---

</p>

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

**JS-X-Ray** is a JavaScript & TypeScript [SAST](https://github.com/resources/articles/what-is-sast) for identifying malicious patterns, security vulnerabilities, and code anomalies. Think of it as ESLint, but dedicated to security analysis. Originally created for [NodeSecure CLI](https://github.com/NodeSecure/cli), JS-X-Ray has become an independent and serious option for supply chain protection.

## 🔎 How It Works

JS-X-Ray parses JS or TS code into an **Abstract Syntax Tree (AST)** with no extensive usage of RegEx or Semgrep rules. This enables variable tracing, dynamic import resolution, and detection of sophisticated obfuscation that pattern-matching tools miss. The tradeoff is that JS-X-Ray is purely dedicated to the JavaScript/TypeScript ecosystem.

## 💡 Features

- Track `require()`, `import`, and dynamic imports with full variable tracing
- Detect obfuscated code and identify the tool used (jsfuck, jjencode, obfuscator.io, and more)
- Flag malicious patterns: data exfiltration, `process.env` serialization, unsafe shell commands
- Detect vulnerable code: `eval()`, `Function()` constructor, ReDoS-prone regexes, SQL injection…
