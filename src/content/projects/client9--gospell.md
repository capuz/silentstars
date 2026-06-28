---
repo: "client9/gospell"
name: "gospell"
description: "pure golang spelling based on hunspell dictionaries"
url: "https://github.com/client9/gospell"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 42
forks: 7
openIssues: 3
closedIssues: 14
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-01-26T02:26:02Z"
lastCommitAt: "2026-06-28T01:37:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 55
maintainers: ["client9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e5109f49202e45446e729fdf0d4f5b9b4819eab85427717f7bec85a0147394f/client9/gospell"
---

# gospell

`gospell` is a pure Go spell checker for Hunspell-style dictionaries.

It is designed for:

- loading Hunspell `.aff` and `.dic` files
- exact word checking
- word splitting and compound handling
- per-document or per-session word list overlays
- lazy mutation-based spelling suggestions

The package keeps the core checker small and uses lazy lookup for both spelling and suggestions.

## Features

- Pure Go implementation
- Hunspell dictionary format support
- Exact spell checking with affix and compound handling
- `WordList` overlays — add allowed or forbidden words without touching the base dictionary
- `Checker` — combines a base dictionary with any number of `WordList`s; supports per-document reset at zero cost
- Built-in English/QWERTY mutation suggester with n-gram fallback

## Install

```bash
go get github.com/client9/gospell
```

## Basic Use

```go
package main

import (
	"fmt"
	"log"

	"github.com/client9/gospell"
)

func main() {
	gs, err := gospell.NewGoSpell("hunspell-en_US/en_US.aff", "hunspell-en_US/en_US.dic")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(gs.Spell("silly"))
	fmt.Println(gs.Spell("sillly"))
}
```

## Suggestions

Suggestions use the…
