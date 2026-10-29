---
repo: "ankoh/dashql"
name: "dashql"
description: "Unofficial SQL client for Hyper and Salesforce Data 360"
readmeQualityOk: true
url: "https://github.com/ankoh/dashql"
homepage: "https://dashql.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [66, 26]
topics: ["browser", "editor", "node", "sql", "wasm", "javascript", "web", "tauri"]
stars: 38
forks: 2
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-02-05T09:15:18Z"
lastCommitAt: "2026-10-29T14:06:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["ankoh", "dashql-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/329291ef46067fdd583771736e75b333817c14345c494dd1561c61310dfa9692/ankoh/dashql"
discussionCount: 1
---

---

### Building

```
# Vite dev server for the browser with HMR.
bazel run //packages/dashql-app:dev

# For Electron renderer HMR, run these in separate terminals.
bazel run //packages/dashql-app:dev -- --mode electron
bazel run //packages/dashql-native:dev
# Override DASHQL_ELECTRON_RENDERER_URL if Vite uses another loopback HTTP origin.

# If you need demangled wasm stacktraces, run with
bazel run --config=debug //packages/dashql-app:dev

# We bundle the web app with two routers
# - '/'-paths for Cloudflare Pages -> :pages
# - '#/'-paths for native apps -> :reloc
bazel build //packages/dashql-app:pages
bazel build //packages/dashql-app:reloc

# The native app can be cross-compiled for arm and x86
bazel run //packages/dashql-native:mac_package_arm64
bazel run //packages/dashql-native:mac_package_x86_64

# Test everything
bazel test //...

# Many tests are backed by snapshots / fixtures
# /snapshots/*.tpl.yaml are the input to generate /snapshots/*.yaml
# Update a snapshot category after intentional changes:
bazel run //snapshots/analyzer:update
bazel run //snapshots/completion:update
bazel run //snapshots/diff:update
bazel run //snapshots/formatter:update
bazel run…
