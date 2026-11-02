---
repo: "neboto/neboto-tui"
name: "neboto-tui"
description: "Read-only AWS terminal UI: All your AWS behind one fuzzy search, console-style detail panes, live logs, CloudWatch charts, cross-service links"
readmeQualityOk: true
url: "https://github.com/neboto/neboto-tui"
homepage: "https://neboto.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["aws", "cloudwatch", "devops", "ratatui", "read-only", "rust", "terminal", "tui", "aws-cli", "cli"]
stars: 23
forks: 2
openIssues: 32
closedIssues: 80
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-15T08:49:33Z"
lastCommitAt: "2026-11-02T11:36:02Z"
lastReleaseAt: "2026-09-29T13:39:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 50
maintainers: ["sneboto", "dependabot[bot]", "hermes-neboto[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1371160918/c94062aa-10e1-4b17-919a-df110d4917f3"
---

# neboto

A fast, keyboard-driven terminal UI for browsing AWS. **70+ services**, rich
console-style detail panes, live log tailing, CloudWatch charts, and
cross-service link-following — all without leaving the terminal.

Built in Rust with [Ratatui](https://ratatui.rs/). Website and guide:
**[neboto.dev](https://neboto.dev)**.

       alt="neboto demo: an ECS service is half healthy; its deployments show revision 15 failed and rolled back; the change timeline shows CI deployed it; the stopped task's log says DATABASE_URL is not set">

**Try it without an AWS account:** `neboto --demo` opens a made-up account
with a few problems planted in it (a failed ECS deploy, SSH open to the world,
a drifted CloudFormation stack) and makes no network calls.

**neboto is read-only.** It issues only `describe`/`list`/`get` calls. Nothing
it does can change your account, which is the point: it is safe to run against
production, and the IAM policy in [`PERMISSIONS.md`](https://github.com/neboto/neboto-tui/blob/HEAD/PERMISSIONS.md) is
auditably read-only. See [Why read-only](#why-read-only).

---

## Highlights

- **70+ AWS services** behind an `@prefix` fuzzy search — `@ec2 web`, `@sh`,…
