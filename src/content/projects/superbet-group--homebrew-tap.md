---
repo: "superbet-group/homebrew-tap"
name: "homebrew-tap"
description: "A Homebrew tap for internal Superbet tools"
readmeQualityOk: true
url: "https://github.com/superbet-group/homebrew-tap"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [91]
topics: ["area-platform", "tribe-infrastructure"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 19
contributors: 16
recentReleases: 0
createdAt: "2022-12-27T10:45:47Z"
lastCommitAt: "2026-10-30T11:03:01Z"
status: "watched"
tags: ["solo_builder", "community_watch"]
healthScore: 89
undervaluedScore: 56
maintainers: ["goreleaserbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/25fe9dd73caa425ddd1a0a541472a5da286d8d1392c24a67a20c8aaab51f8001/superbet-group/homebrew-tap"
---

# Superbet Group Homebrew tap

## How to Setup
1. Run `brew tap superbet-group/tap`
2. Run `brew update`
3. Trust this tap (or the specific formula/cask you need) — see [Trusting this tap](#trusting-this-tap) below
4. Run `brew install` for whichever formula or cask you want to install from this tap

### Trusting this tap

Since this is a third-party (non-official) tap, newer versions of Homebrew require you to explicitly trust it before installing or upgrading, otherwise you'll see warnings like:

```
Warning: Calling HOMEBREW_NO_REQUIRE_TAP_TRUST is deprecated! Use `brew trust` for each non-official tap, formula, cask or command instead.
Warning: Calling the `verified` parameter in the `url` stanza is deprecated! Use the default URL verification behaviour instead.
```

The old `HOMEBREW_NO_REQUIRE_TAP_TRUST` environment variable is deprecated and will eventually be removed. Use `brew trust` instead, per [Homebrew's Tap Trust docs](https://docs.brew.sh/Tap-Trust):

- Trust the whole tap (accepts all current and future formulae/casks/commands from it):
  ```
  brew trust superbet-group/tap
  ```
- Or, trust only a specific formula:
  ```
  brew trust --formula…
