---
repo: "ipfs/go-ipld-cbor"
name: "go-ipld-cbor"
description: "A cbor implementation of the go-ipld-format"
readmeQualityOk: true
url: "https://github.com/ipfs/go-ipld-cbor"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 37
forks: 26
openIssues: 12
closedIssues: 13
watchers: 22
contributors: 50
recentReleases: 0
createdAt: "2016-10-24T21:58:18Z"
lastCommitAt: "2026-07-07T06:38:18Z"
lastReleaseAt: "2025-06-24T19:53:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 65
undervaluedScore: 33
maintainers: ["dependabot[bot]", "rvagg", "web3-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a98b97f56d95c9469cab0824cbbdae2e3ac09a827c174c81602fa5dc48b29aad/ipfs/go-ipld-cbor"
---

go-ipld-cbor
==================

> An implementation of a cbor encoded merkledag object.

## Status

This library **has alternatives available**: For new projects, prefer using the [cbor codec](https://github.com/ipld/go-ipld-prime/tree/master/codec/dagcbor) included with [go-ipld-prime](https://github.com/ipld/go-ipld-prime).

This library is in **standby** mode.  It works, but we recommend migrating to alternatives if possible.  New features are unlikely to be added here.

## Lead Maintainer

[Eric Myhre](https://github.com/warpfork)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install

```sh
make install
```

## Usage

Note: This package isn't the easiest to use.
```go
// Make an object
obj := map[interface{}]interface{}{
	"foo": "bar",
	"baz": &Link{
		Target: myCid,
	},
}

// Parse it into an ipldcbor node
nd, err := WrapMap(obj)

fmt.Println(nd.Links())

```

## Contribute

PRs are welcome!

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © Jeromy Johnson
