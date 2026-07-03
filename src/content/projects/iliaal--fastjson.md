---
repo: "iliaal/fastjson"
name: "fastjson"
description: "Fast JSON encode/decode/validate for PHP 8.1+, backed by yyjson. Drop-in alternative to ext/json with namespaced fastjson_* functions and json_last_error-compatible error reporting."
url: "https://github.com/iliaal/fastjson"
homepage: "https://iliaal.github.io/fastjson/"
language: "PHP"
languages: ["PHP", "C"]
languagePcts: [53, 39]
topics: ["json", "performance", "php", "php-extension"]
stars: 19
forks: 1
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 4
createdAt: "2026-05-11T00:42:24Z"
lastCommitAt: "2026-07-03T12:21:12Z"
lastReleaseAt: "2026-06-12T01:00:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 41
maintainers: ["iliaal", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b774871d71dd81841e117f45f2a58a9c703e1b2d12693d02baffed34eae8e92c/iliaal/fastjson"
---

# fastjson

Fast JSON encode, decode, and validate for PHP 8.1+. Drop-in alternative to `ext/json` with a namespaced `fastjson_*` API and `json_last_error`-compatible error reporting. Backed by [yyjson](https://github.com/ibireme/yyjson) 0.12.0, one of the fastest portable JSON libraries. Coexists with `ext/json`; adoption is opt-in per call site.

> **Status:** pre-release. yyjson 0.12.0 is vendored and linked. The `fastjson_encode` / `fastjson_decode` / `fastjson_validate` trio plus `fastjson_last_error` / `_msg`, the file helpers `fastjson_file_decode` / `fastjson_file_encode`, and the `fastjson_pointer_get` (RFC 6901) / `fastjson_merge_patch` (RFC 7386) accessors are available. The compat harness against `php-src/ext/json/tests/*.phpt` passes everything targeting features fastjson aims to mirror; the rest is categorized in `tests/upstream-json/.skiplist`.

## 📦 Install

```bash
# PIE (PHP Foundation's extension installer; uses the composer.json
# at the repo root with type: "php-ext")
pie install iliaal/fastjson
```

On a minimal PHP image (e.g. `php:8.x-cli` from Docker Hub), PIE needs a few build tools installed first:

```bash
# Debian/Ubuntu
sudo apt install -y git bison…
