---
repo: "m4vic/detonate"
name: "detonate"
description: "Run untrusted AI tools in a sandbox and report what they actually do, not what their manifest claims."
readmeQualityOk: true
url: "https://github.com/m4vic/detonate"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-21T07:26:26Z"
lastCommitAt: "2026-07-29T06:13:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 44
maintainers: ["m4vic"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d7c3e0105a498f6db1431c5d86cdd3bca39bcaf82370e6bb436c7dd5a6a0558/m4vic/detonate"
---

# detonate

**Run untrusted AI tools in a sandbox and report what they actually do, not what
their manifest claims.**

You install an MCP server from GitHub. It runs on your machine, with your
permissions, and your AI assistant calls its tools automatically. Nobody reads
the code first.

Every other scanner *reads* the manifest. detonate *runs* the thing in a
disposable container, calls its tools with hostile input, and reports what
happened, with evidence.

```
detonate: discovered 1 tool(s):
    [mcp] read_file: Read the contents of a file.

  ----------------------------------------------------------------
  VERDICT: dangerous  (1 finding(s))
  ----------------------------------------------------------------

  1. [CRITICAL] tool "read_file" leaked data via path-traversal
     evidence : root:x:0:0:root:/root:/bin/bash daemon:x:1:1:daemon:/usr/sbin
     observed : +2ms during probe:path-traversal on read_file
     source   : probe-response
```

That is the real content of `/etc/passwd`, returned by the tool, because
detonate asked it for `../../../../etc/passwd`. The manifest said "Read the
contents of a file." A static scanner reports it clean.

## Install

Requires…
