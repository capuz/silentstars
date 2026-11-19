---
repo: "YellowCoat1/dnd_lib"
name: "dnd_lib"
description: "A rust library for creating dungeons and dragons characters "
readmeQualityOk: true
url: "https://github.com/YellowCoat1/dnd_lib"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-23T20:28:24Z"
lastCommitAt: "2026-11-19T12:00:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["YellowCoat1"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ca21e9aee10ff6fd5c0b3ab12459cbed567e13e1c553a42ab2edacda15a5cfc/YellowCoat1/dnd_lib"
---

# DnD Lib 
A rust library for creating and managing Dungeons & Dragons characters.

The main goal of this library is to model D&D characters, and have an easy interface for using those characters.

## Installation
Just add the latest version through `cargo add`:
```bash
cargo add dnd_lib
```
## Features
* Multiclasing
* Homebrew classes, races, items, and more
* Open-ended api trait
* Serializable datastructures for easy caching

## Usage
Creating a simple level 1 character. 
```rust
use dnd_lib::prelude::*;
#[tokio::main]
async fn main() {
	let provider = GraphqlProvider::new();
	
	let rogue = provider.get_class("rogue").await.unwrap();
	let human = provider.get_race("human").await.unwrap();
	let acolyte = provider.get_background("acolyte").await.unwrap();

	let john = CharacterBuilder::new("John")
		.race(&human)
		.background(&acolyte)
		.class(&rogue)
		.stats(Stats::default())
		.build().unwrap();
		
	println!("John's ac is {}", john.ac());
	println!("John has {} strength", john.stats().strength);
}

```
