---
repo: "bomly-dev/bomly-cli"
name: "bomly-cli"
description: "Free, open-source CLI for dependency intelligence, SBOMs, vulnerability auditing, and CI policy gates."
readmeQualityOk: true
url: "https://github.com/bomly-dev/bomly-cli"
homepage: "https://bomly.dev/cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["dependency-graph", "license-compliance", "supply-chain-security", "vulnerability-auditing", "sbom-management", "ci-cd", "cyclonedx", "dependency-analysis", "devsecops", "github-actions"]
stars: 11
forks: 0
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-09T22:42:20Z"
lastCommitAt: "2026-07-31T06:30:54Z"
lastReleaseAt: "2026-07-15T02:54:38Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["bomly-guy", "dependabot[bot]", "bomly-release[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1206422286/04bcd9d3-8bc4-4249-affb-bbd44ff3c125?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063154Z&X-Amz-Expires=300&X-Amz-Signature=16d16ae1c507571a43e1754dea89e3f82399d40c14c605fe7cdd28898d8fe00e&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgxNCwibmJmIjoxNzg1NDc5NTE0LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.Ou-h6cVIfX3z93oplvcwXv4VANzsPciw0ymjIUfOymg"
fundingLinks: ["CUSTOM:https://bomly.dev/support"]
---

</p>

  <strong>Analyze Your Software DNA.</strong>
</p>

</p>

Bomly is a free, open-source CLI for dependency intelligence. It scans source trees, SBOMs, Git refs, and container images; explains why dependencies are present; enriches packages with vulnerability and license data when you ask for it; evaluates policy; and writes automation-friendly output for CI.

Free and open source, no account, no login. One binary. No service to host. No telemetry. No outbound matcher calls unless you opt in with `--enrich`. [Network and Privacy](https://github.com/bomly-dev/bomly-cli/blob/HEAD/docs/NETWORK.md) documents every network trigger so you can audit that claim instead of taking it on faith.

## Install Bomly

```bash
# macOS / Linuxbrew
brew install bomly-dev/tap/bomly

# Linux / macOS install script
curl -fsSL https://bomly.dev/install.sh | sh

# Windows
winget install Bomly.BomlyCLI
```

Prebuilt archives and Linux packages are published from [GitHub Releases](https://github.com/bomly-dev/bomly-cli/releases). Releases include `bomly` (full binary with builtin Syft and Grype) and `bomly-lite` (smaller binary that shells out to external `syft` and `grype`).

Verify the install:…
