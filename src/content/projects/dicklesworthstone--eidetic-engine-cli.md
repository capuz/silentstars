---
repo: "Dicklesworthstone/eidetic_engine_cli"
name: "eidetic_engine_cli"
description: "Durable, local-first, explainable memory for coding agents. A Rust CLI memory substrate built on the franken-stack (Asupersync, FrankenSQLite, Frankensearch, FrankenNetworkX)."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/eidetic_engine_cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 41
forks: 3
openIssues: 2
closedIssues: 23
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-04-29T08:51:51Z"
lastCommitAt: "2026-08-04T04:45:39Z"
lastReleaseAt: "2026-06-08T17:58:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 43
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1224408143/9d3c112a-9b44-4d3e-9552-a2c69ead7bc7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061321Z&X-Amz-Expires=300&X-Amz-Signature=9ba584625fc3f494609e36d981ef49d00e15055f20cdd7135e4fdf708bce9bef&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMwMSwibmJmIjoxNzg1ODI0MDAxLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.YF6FXGKmeaJAgJ7irp8LIexmewVIL9lLBnqNVbFYD30"
---

# Eidetic Engine (`ee`)

**Durable, local-first, explainable memory for coding agents.**

**Install**

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/eidetic_engine_cli/main/install.sh?$(date +%s)" | bash -s -- --easy-mode --verify
```

Always verifies the release binary's SHA-256 checksum, verifies its Sigstore
bundle when one is published and `cosign` is available, drops `ee` into
`~/.local/bin`, repairs `PATH`, installs shell completions, runs a self-test,
and prints guidance for detected agent harnesses; settings remain untouched. Pass
`--require-provenance` for fail-closed signature and SLSA provenance
verification. Pass `--help` (e.g. `bash install.sh --help`) for offline
tarballs, proxy options, `--no-gum`, and `--force` reinstall.

</div>

---

## TL;DR

### Why This Exists

Coding agents forget.

A fresh session re-discovers project conventions, re-reads the same files, and
walks into traps another agent already hit. Bad assumptions become "facts"
because the harness has no durable place to look for decisions, failures,
rules, and evidence from prior runs.

The agent harness owns the loop. `ee` handles the memory layer.

### What `ee` Does

`ee`…
