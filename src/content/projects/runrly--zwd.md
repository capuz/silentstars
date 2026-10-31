---
repo: "runrly/zwd"
name: "zwd"
description: "Create and open Zed .code-workspace files through folder mode or a marker-protected symlink dock."
readmeQualityOk: true
url: "https://github.com/runrly/zwd"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["cli", "developer-tools", "rust", "workspace", "zed"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-23T12:16:26Z"
lastCommitAt: "2026-10-31T19:00:49Z"
lastReleaseAt: "2026-08-08T21:16:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 11
maintainers: ["tevass", "runrly-echo[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2e26d5d00431f5973012190eacedc8fcddc0a3ae9fa0a6e8fcce6bf995f63d6/runrly/zwd"
---

# Zed Workspace Dock

Rust CLI (`zwd`) for opening multi-project Zed sessions from `.code-workspace` files.

Zed can open multiple folders directly, but its terminal still benefits from a single visible root in some workflows. Zed Workspace Dock can create a lock-protected cache directory where each project folder is linked, then open that dock root in Zed. Running `ls` in the terminal shows the linked projects without copying source code.

[Install](#install) - [Quick start](#quick-start) - [Usage](#usage) - [Workspace files](#workspace-files) - [Development](#development)

> [!NOTE]
> On Windows, `symlink` dock mode creates directory symbolic links. Windows may require Developer Mode, `SeCreateSymbolicLinkPrivilege`, or an administrator shell to create those links.

## Features

- Create registered Zed workspace files from one or more project folders.
- Open, inspect, edit, or delete a workspace by registered name or by `.code-workspace` path.
- Choose between direct `folders` mode and managed `symlink` dock mode.
- Add or remove one or more project folders while synchronizing an existing dock safely.
- Install global Zed tasks backed by the packaged task templates.
- Rebuild…
