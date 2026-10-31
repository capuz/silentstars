---
repo: "blazejkustra/uncut"
name: "uncut"
description: "Uncut, an AI-first video editor"
readmeQualityOk: true
url: "https://github.com/blazejkustra/uncut"
homepage: "https://uncut.video"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 17
forks: 0
openIssues: 0
closedIssues: 95
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-11T21:27:18Z"
lastCommitAt: "2026-10-31T15:58:47Z"
lastReleaseAt: "2026-10-28T09:33:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["blazejkustra"]
openGraphImageUrl: "https://opengraph.githubassets.com/caa07b2610b692d71a739982360bca0a789ef70645f5d4ffe3e0174076e0dfc5/blazejkustra/uncut"
discussionCount: 0
---

# Uncut

An AI-first video editor for macOS: it runs your installed Claude Code, which edits with you on a real timeline.

## Download

**[Download Uncut for macOS](https://github.com/blazejkustra/uncut/releases/latest/download/Uncut-arm64.dmg)** (Apple silicon, macOS 13 or later). Signed and notarized, and it updates itself from [GitHub releases](https://github.com/blazejkustra/uncut/releases). Website: [uncut.video](https://uncut.video).

Or with [Homebrew](https://brew.sh):

```sh
brew install --cask blazejkustra/tap/uncut
```

The cask lives in the [blazejkustra/homebrew-tap](https://github.com/blazejkustra/homebrew-tap) tap and is updated by the release workflow when a release is published. The app updates itself after that, so there's no need for `brew upgrade` (`brew uninstall --zap --cask uncut` also removes its data).

On first launch Uncut checks what it needs and shows how to install anything missing:

- **[Claude Code](https://claude.com/claude-code)**, installed and signed in. Uncut uses whatever sign-in Claude Code has: a Claude subscription, an API key, or Bedrock, Vertex AI or Foundry. Usage is billed the way your Claude Code usage normally is.
- **ffmpeg**: `brew…
