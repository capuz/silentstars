---
repo: "aipictors/aipictors"
name: "aipictors"
description: "Website"
originalDescription: "Webサイト"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/aipictors/aipictors"
homepage: "https://www.aipictors.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["apollo", "nextjs", "react", "shadcn-ui"]
stars: 24
forks: 4
openIssues: 29
closedIssues: 257
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2023-07-06T18:42:52Z"
lastCommitAt: "2026-11-01T10:43:45Z"
lastReleaseAt: "2024-07-30T15:13:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 98
undervaluedScore: 66
maintainers: ["nakatsuka-k"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/663186842/8d6575c9-b59c-4c75-bd1c-649694b70553"
discussionCount: 26
---

# ⚙️ Environment Setup

### 1. Set up bun

Development requires [**bun version 1.2.2 or later**](https://bun.sh/). Install it according to your environment.

```bash
# Linux / macOS / WSL2
curl -fsSL https://bun.sh/install | bash
```

For Windows, use the following.

```powershell
powershell -c "irm bun.sh/install.ps1|iex"
# or
winget search --id  Oven-sh.Bun
```

### 2. Set up your editor

[Visual Studio Code](https://code.visualstudio.com/) is the recommended editor. Also install the [recommended extensions](https://github.com/aipictors/aipictors/blob/HEAD/.vscode/extensions.json).

You can also install the extensions all at once with the following command.

```bash
bun run init:vscode
```

If the `code` command is not installed, open the command palette in VSCode and run the following.

```
> Shell Command: Install 'code' command in PATH
```

You can open the command palette with the following shortcut.

```
shift + command + P
```

If you are asked to reload, restart VSCode.
For Visual Studio Code settings, see [settings.json](https://github.com/aipictors/aipictors/blob/HEAD/.vscode/settings.json).

### 3. Start the development environment

1. Install dependencies

```bash
bun…
