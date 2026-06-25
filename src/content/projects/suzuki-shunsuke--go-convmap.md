---
repo: "suzuki-shunsuke/go-convmap"
name: "go-convmap"
description: "Go library to convert map[interface{}]interface{} to map[string]interface{}"
url: "https://github.com/suzuki-shunsuke/go-convmap"
homepage: "https://pkg.go.dev/github.com/suzuki-shunsuke/go-convmap/convmap"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["oss"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-10-15T10:45:58Z"
lastCommitAt: "2026-06-25T01:32:07Z"
lastReleaseAt: "2024-05-27T01:56:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 78
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/81a9065a720bebc282862af7f5e59684e464890335be29f07ef1b1319d1a11c8/suzuki-shunsuke/go-convmap"
---

# go-convmap

Go library to convert `map[interface{}]interface{}` to `map[string]interface{}`.

## Background

https://github.com/go-yaml/yaml/issues/139

When we unmarshal YAML to `interface{}`, the data type of the map will be not `map[string]interface{}` but `map[interface{}]interface{}` even if the type of all keys is string.
YAML accepts map key whose type isn't string, but JSON doesn't accept map key except for string.
And not only JSON but also some languages like [Tengo](https://github.com/d5/tengo) allow only string as map key.

So this library provides the feature to convert `map[interface{}]interface{}` to `map[string]interface{}`.

## LICENSE

[MIT](LICENSE)
