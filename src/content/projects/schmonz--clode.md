---
repo: "schmonz/clode"
name: "clode"
description: "Claude Code for every computer"
readmeQualityOk: true
url: "https://github.com/schmonz/clode"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["claude", "claude-code", "node", "node-js", "nodejs", "portability", "quickjs-ng", "txiki"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-26T17:00:16Z"
lastCommitAt: "2026-09-05T07:47:46Z"
lastReleaseAt: "2026-08-02T05:25:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 57
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a36368a66981de7bb5cef9aa7d4aa49e1d0dcfd1cd1fc453771a00652312f4ba/schmonz/clode"
---

# clode: Claude Code, everywhere

When your OS isn't popular or your computer isn't recent, how do you run Claude Code?

[Download clode](https://github.com/schmonz/clode/releases/latest/) to your fastest machine, then build `quaude`s for your whole collection:

```sh
mv clode-* clode && chmod +x clode
./clode build --list-targets
for i in macos-arm64 windows-amd64 macos-ppc netbsd-sparc linux-s390x; do
  ./clode --verbose build --target $i --out quaude-$i
done
```

`quaude-macos-arm64` and `quaude-windows-amd64` might not be that interesting. Claude Code already ships for those platforms. But `quaude-macos-ppc`, `quaude-netbsd-sparc`, `quaude-linux-s390x`?

Have fun.

## What? How?!?

This repo contains no Anthropic code, only a tool that, by request:

1. Fetches upstream `claude` (nearest match for your target OS and arch)
2. Extracts its embedded JavaScript
3. Rebases Bun-specific calls onto Node equivalents
4. Backs Node API with (mostly) [txiki.js](https://txikijs.org)
5. Compiles to [QuickJS-NG](https://quickjs-ng.github.io/quickjs/) bytecode
6. Writes `quaude`

(If your host is Node-compatible and you want that runtime instead,
`clode build --naude` writes `naude`,…
