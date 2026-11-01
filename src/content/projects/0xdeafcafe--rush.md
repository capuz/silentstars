---
repo: "0xdeafcafe/rush"
name: "rush"
description: "lookin for that rush, kid?"
readmeQualityOk: true
url: "https://github.com/0xdeafcafe/rush"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-09-23T19:00:26Z"
lastCommitAt: "2026-11-01T22:59:10Z"
lastReleaseAt: "2026-11-01T03:16:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 52
maintainers: ["0xdeafcafe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1384055865/487f267c-260f-4f6f-8fcc-c0e3857b1db3"
---

one terminal app to run every coding agent you've got, written in rust.<br>
  it sits at about 40 mb of ram with a session open, a fair bit less than the ~330 claude code's own view needs to show you one.

## install

```sh
brew install 0xdeafcafe/tap/rush
```

use the full name: homebrew/core has a different `rush` (gnu's restricted shell), and plain `brew install rush` gets that one. builds are there for macos (apple silicon and intel) and linux (x86_64 and arm64).

or build it from source, with rust (stable) and cargo:

```sh
git clone https://github.com/0xdeafcafe/rush
cargo install --locked --path rush/rust/crates/rush
```

that puts `rush` in `~/.cargo/bin`, which needs to be on your path. a rush built this way doesn't update itself: pull and build it again.

```sh
rush            # open it
rush on         # make `claude agents` open rush
rush off        # give it back
rush menubar    # limits and waiting agents in the macos menu bar
rush update     # fresh bottle
```

`?` has the keys, and `#ask <question>` asks rush about itself (it can change its own settings for you too).

coming from the go rush (`go install`, in `~/go/bin`)? install this one, then run `rush on` again…
