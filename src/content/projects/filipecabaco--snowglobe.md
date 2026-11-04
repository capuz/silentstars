---
repo: "filipecabaco/snowglobe"
name: "snowglobe"
description: "Package Docker into WASM"
readmeQualityOk: true
url: "https://github.com/filipecabaco/snowglobe"
homepage: "https://filipecabaco.github.io/snowglobe/"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [50, 23]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2022-10-10T22:38:47Z"
lastCommitAt: "2026-11-04T13:04:37Z"
lastReleaseAt: "2026-11-01T17:17:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 76
maintainers: ["filipecabaco", "burggraf"]
openGraphImageUrl: "https://opengraph.githubassets.com/a40ac19a4471f27730cc82c11c31d76cd0bb2e8d54592d90402b4602409184cc/filipecabaco/snowglobe"
---

# snowglobe

**Package a Docker image into a website that runs it in the browser.** snowglobe boots your
image on real Linux inside [armless](https://github.com/filipecabaco/armless), a 64-bit ARM
machine compiled to WebAssembly, snapshots it once your app is ready, and writes a folder of
static files. Visitors get your program running in their tab in about a second, with no server
behind it. The same site also runs headlessly, as one executable, and as a sandbox an agent drives.

**[▶ Try the demos](https://filipecabaco.github.io/snowglobe/)**: Supabase (its native stack and a small app on it), Elixir IEx, PostgreSQL, Elixir + Postgres, Python + Rich, TypeScript + Zod,
Go + Bubble Tea, Rust + clap, Java + Gson, and curl + jq (plain Alpine tools, online through your browser), each a small
project in [`examples/`](https://github.com/filipecabaco/snowglobe/blob/HEAD/examples) running in the browser.

**[📖 Read the docs](https://filipecabaco.github.io/snowglobe/docs/)**: getting started, building,
networking, running headlessly, driving it from agents and programs, isolation, and the CLI
reference.

```sh
go install github.com/filipecabaco/snowglobe/cmd/snowglobe@latest   # or a…
