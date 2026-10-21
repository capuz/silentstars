---
repo: "iliaal/fastjson"
name: "fastjson"
description: "Fast JSON encode/decode/validate for PHP 8.1+, backed by yyjson. Drop-in alternative to ext/json with namespaced fastjson_* functions and json_last_error-compatible error reporting."
readmeQualityOk: true
url: "https://github.com/iliaal/fastjson"
homepage: "https://iliaal.github.io/fastjson/"
language: "PHP"
languages: ["PHP", "C"]
languagePcts: [58, 32]
topics: ["json", "performance", "php", "php-extension"]
stars: 26
forks: 2
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 4
createdAt: "2026-05-11T00:42:24Z"
lastCommitAt: "2026-10-21T21:16:01Z"
lastReleaseAt: "2026-10-13T18:35:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["iliaal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d31ed5b53881c97b7663146154d5cac3083cf9e9fa6b2c3aa77d46c93dcde93a/iliaal/fastjson"
---

# fastjson

Fast JSON encode, decode, and validate for PHP 8.1+. A drop-in alternative to `ext/json` with a `fastjson_*` API and `json_last_error`-compatible error reporting, built on [yyjson](https://github.com/ibireme/yyjson) (master snapshot `a84070f`, after 0.13.0). It coexists with `ext/json`, so you adopt it one call site at a time.

> Status: pre-release. Available now: `fastjson_encode` / `fastjson_decode` / `fastjson_validate`, `fastjson_last_error` / `_msg` / `_pos` / `_info`, the file helpers `fastjson_file_decode` / `fastjson_file_encode`, and the JSON Pointer / patch helpers `fastjson_pointer_get` / `_exists` / `_set` (RFC 6901) and `fastjson_merge_patch` (RFC 7396). The compat harness against `php-src/ext/json/tests/*.phpt` passes every test for features fastjson mirrors; `tests/upstream-json/.skiplist` categorizes the rest.

## 📦 Install

```bash
# PIE (PHP Foundation's extension installer; uses the composer.json
# at the repo root with type: "php-ext")
pie install iliaal/fastjson
```

On a minimal PHP image (for example `php:8.x-cli` from Docker Hub), install these build tools before running PIE:

```bash
# Debian/Ubuntu
sudo apt install -y git bison libtool-bin…
