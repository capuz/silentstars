---
repo: "mlab-sh/postmortem"
name: "postmortem"
description: "Supply-chain scanner. Flags malicious install code, typosquats, and shady provenance across your dependencies and your OS packages. Repo-reputation scoring, known-CVE intel, no telemetry."
readmeQualityOk: true
url: "https://github.com/mlab-sh/postmortem"
homepage: "https://mlab.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "mlab", "open-source", "scan", "cybersecurity", "dependency-scanner", "devsecops", "homebrew", "malware-detection", "rust"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-30T16:45:14Z"
lastCommitAt: "2026-08-27T14:30:29Z"
lastReleaseAt: "2026-08-26T17:50:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 57
maintainers: ["Sn0wAlice", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1254505010/2cda9f85-13fc-4cc5-8362-be34fc80f19c"
---

</p>

<h1 align="center">postmortem</h1>

  <b>Catch a supply-chain attack before it ships.</b><br>
  A fast supply-chain security scanner for the code you depend on.
</p>

  Single static binary&nbsp;&middot;&nbsp;No telemetry&nbsp;&middot;&nbsp;No daemon&nbsp;&middot;&nbsp;Network only when you ask
</p>

---

Modern software is mostly other people's code. postmortem inspects that code the
way an attacker's payload actually reaches you: through install hooks, typosquats,
hijacked maintainer accounts, and freshly-transferred repos. It reads your
lockfiles across seven language ecosystems, reconstructs the full dependency
graph, and flags what real compromises look like.

## Why postmortem

* **Fits behind a corporate proxy.** A `network` block in `~/.postmortem/config.yml`
  sets the proxy, its `no_proxy` exemptions, and a base-URL override for every
  service — internal mirrors, GitHub Enterprise, a self-hosted GitLab. A typo in
  a key is an error, never a silent fallback to the public registry.
* **No telemetry.** postmortem never phones home. It reaches the network only on
  the paths that need it — `--online` reputation and `--vulns` / `system --vulns`
  advisory lookups —…
