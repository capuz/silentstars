---
repo: "xaccefy/pi-xpi"
name: "pi-xpi"
description: "XPI — offensive security tools for Pi Agent: casefile, exploit search, web lookup, code intelligence, todo tracker"
readmeQualityOk: true
url: "https://github.com/xaccefy/pi-xpi"
homepage: "https://github.com/x4cc3/pi-xpi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-05T16:01:27Z"
lastCommitAt: "2026-08-07T05:14:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 47
maintainers: ["xaccefy", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d176628300b59b3872a7de1ff95770a3e1a2fd392d6172737db8e30c5fac31d/xaccefy/pi-xpi"
---

# XPI

**Security tooling for the Pi agent** — casefile tracking, web search, exploit-technique intelligence, code search, and todos.

</div>

## What it is

XPI turns the Pi agent into a security researcher: a case ledger with enforced gates, real exploit-technique grounding, web lookup, fast code search, and a pipeline that keeps findings honest.

- **Casefile** — hypothesis → investigating → confirmed → reported, with gates at every step
- **Honest PoC gates** — exit 0 + verification marker + mandatory control-target run with liveness marker on every promotion (no fake confirms)
- **Exploit chains** — `ChainSuggest` surfaces combinations the model missed
- **Coverage matrix** — machine-checkable "we tested everything" claims
- **Code search** — fff-powered grep/find, frecency-ranked

## Install

```bash
./install.sh
# or
pi install npm:@xaccefy/pi-xpi
```

Set `PREVIEW_IS_API_KEY` for `exploit_search` (see [docs/guide.md](https://github.com/xaccefy/pi-xpi/blob/HEAD/docs/guide.md)).

## Quick start

```
/xp on     # enable the cyber workflow (subagent pipeline)
/xp lite   # single-agent variant
```

Full tool reference, configuration, and pipeline docs:…
