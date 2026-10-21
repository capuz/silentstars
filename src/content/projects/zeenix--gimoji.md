---
repo: "zeenix/gimoji"
name: "gimoji"
description: "Easily add emojis to your git commit messages 😎"
readmeQualityOk: true
url: "https://github.com/zeenix/gimoji"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 52
forks: 15
openIssues: 7
closedIssues: 21
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2023-05-21T13:33:58Z"
lastCommitAt: "2026-10-21T21:15:03Z"
lastReleaseAt: "2023-12-23T00:46:23Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 53
maintainers: ["zeenix", "renovate[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2c504cebc12cfa6fe399aaa8a47153f50b803bf3748a5a08b7922b1c29a46c4/zeenix/gimoji"
---

# gimoji

A CLI tool that makes it easy to add emojis to your git commit messages. It's very similar to (and
is based on) [gitmoji-cli] but written in Rust.

## Try in your browser

A WebAssembly build of the same picker is hosted at
<https://zeenix.github.io/gimoji/>. It runs entirely in the browser, with no
server roundtrip; clicking or pressing Enter on a row copies the selected
emoji to your clipboard. It works on touch screens too: tap the search box to
bring up the on-screen keyboard, drag the list to scroll it, and tap a row to
copy.

To run it locally during development:

```bash
./scripts/serve-web.sh   # builds, bundles, and serves at http://localhost:8000
```

## Installation

### Fedora (>= 37)

```bash
sudo dnf install gimoji
```

### Other OSes

```bash
cargo install -f gimoji
```

## Usage

`gimoji` is primarily intended to be used as a git `prepare-commit-msg` hook. Once installed, ask
`gimoji` to install the hook in your repository:

```bash
cd /path/to/your/project/
gimoji --init
```

Now, whenever you run `git commit`, `gimoji` will kick in and prompt you to choose an emoji.

If you launch `gimoji` directly without any arguments, it will prompt you to choose an…
