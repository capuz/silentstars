---
repo: "lifuyue/issue-finder"
name: "issue-finder"
description: "Local-first handoff prep for developers using coding agents."
readmeQualityOk: true
url: "https://github.com/lifuyue/issue-finder"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 149
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-02T06:30:15Z"
lastCommitAt: "2026-07-18T05:45:06Z"
lastReleaseAt: "2026-06-11T10:57:17Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors"]
healthScore: 78
undervaluedScore: 20
maintainers: ["lifuyue"]
openGraphImageUrl: "https://opengraph.githubassets.com/18fd573eedd3a676e20be8d91e819cc2d44f33256f57af0c6c2689c0c0569d0d/lifuyue/issue-finder"
---

# Issue Finder

</p>

  <strong>Issue Finder</strong> finds GitHub issues worth handing to coding agents, prepares local context, and coordinates approval-gated dispatch while Issue Finder itself stays out of target code edits.
</p>

</p>

---

## Quickstart

### Installing and running Issue Finder

```bash
cargo install issue-finder
```

Configure GitHub access and check local readiness:

```bash
export GITHUB_TOKEN="$(gh auth token)"
issue-finder init
issue-finder doctor
```

Find candidates and prepare a handoff:

```bash
issue-finder scout --limit 10
issue-finder scout --repo owner/repo --limit 10
issue-finder prepare owner/repo#123
issue-finder handoff <inbox-id> --print
```

Issue Finder writes local state under `~/.issue-finder` by default. Use `ISSUE_FINDER_HOME=/tmp/issue-finder-demo` for isolated runs.

### Dispatch and tools

Issue Finder includes an approval-gated dispatch control plane for native agent sessions, A2A task artifacts, and GitHub comment projection. Start with the [usage guide](https://github.com/lifuyue/issue-finder/blob/HEAD/docs/usage.md) for the current command flow.

Issue Finder also exposes a JSON tool contract for coding agents:

```bash…
