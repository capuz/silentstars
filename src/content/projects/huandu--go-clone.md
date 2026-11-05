---
repo: "huandu/go-clone"
name: "go-clone"
description: "Clone any Go data structure deeply and thoroughly."
readmeQualityOk: true
url: "https://github.com/huandu/go-clone"
homepage: "https://pkg.go.dev/github.com/huandu/go-clone"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "clone", "algorithm", "utility", "reflect", "immutable", "deepcopy"]
stars: 336
forks: 33
openIssues: 1
closedIssues: 17
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2019-08-06T04:55:49Z"
lastCommitAt: "2026-11-05T11:24:49Z"
lastReleaseAt: "2026-11-05T11:25:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 28
maintainers: ["huandu", "fly1d"]
openGraphImageUrl: "https://opengraph.githubassets.com/3feb47fe9387b8bb0dacac0906f4340e61799652ee327076a135b82f45d37613/huandu/go-clone"
discussionCount: 2
---

# go-clone: Clone any Go data structure deeply and thoroughly

Package `clone` provides functions to deep clone any Go data. It also provides a wrapper to protect a pointer from any unexpected mutation.

For users who use Go 1.18+, it's recommended to import `github.com/huandu/go-clone/generic` for generic APIs and arena support.

`Clone`/`Slowly` can clone unexported fields and "no-copy" structs as well. Use this feature wisely.

## Install

Use `go get` to install this package.

```shell
go get github.com/huandu/go-clone
```

## Usage

### `Clone` and `Slowly`

If we want to clone any Go value, use `Clone`.

```go
t := &T{...}
v := clone.Clone(t).(*T)
reflect.DeepEqual(t, v) // true
```

For the sake of performance, `Clone` doesn't deal with values containing pointer cycles.
If we need to clone such values, use `Slowly` instead.

```go
type ListNode struct {
    Data int
    Next *ListNode
}
node1 := &ListNode{
    Data: 1,
}
node2 := &ListNode{
    Data: 2,
}
node3 := &ListNode{
    Data: 3,
}
node1.Next = node2
node2.Next = node3
node3.Next = node1

// We must use `Slowly` to clone a circular linked list.
node := Slowly(node1).(*ListNode)

for i := 0; i < 10; i++ {…
