---
repo: "rubas/cloaked_req"
name: "cloaked_req"
description: "Req adapter backed by Rust wreq with browser impersonation support"
readmeQualityOk: true
url: "https://github.com/rubas/cloaked_req"
homepage: "https://hexdocs.pm/cloaked_req"
language: "Elixir"
languages: ["Elixir", "Rust"]
languagePcts: [72, 28]
stars: 5
forks: 3
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-02-19T13:39:13Z"
lastCommitAt: "2026-11-12T11:43:51Z"
lastReleaseAt: "2026-09-22T19:37:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 80
maintainers: ["rubas", "rubas-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da7682daa4a710d4cb3209cb7b55b6b7136c38b07412d718f51a08592595e963/rubas/cloaked_req"
---

# cloaked_req

`cloaked_req` is a Req adapter on the Rust [`wreq`](https://docs.rs/wreq/latest/wreq/) crate. It sends each request
with the TLS and HTTP/2 fingerprint of a real browser, and you keep the Req API.

Docs: <https://hexdocs.pm/cloaked_req>

## Installation

```elixir
def deps do
  [
    {:cloaked_req, "~> 0.8.0"}
  ]
end
```

### Precompiled NIFs

The package downloads a precompiled NIF for these targets:

- `aarch64-apple-darwin`
- `aarch64-unknown-linux-gnu`, glibc 2.34 or newer
- `x86_64-unknown-linux-gnu`, glibc 2.34 or newer

The release checks each Linux NIF and fails when it needs a glibc newer than 2.34.

On any other platform, for example Intel macOS or Alpine (musl), build the NIF from source:

1. Add `{:rustler, "~> 0.38.0"}` to your deps.
2. Install Rust 1.98 or newer, a C and C++ compiler, cmake, libclang, and git.
3. Set `CLOAKED_REQ_BUILD=1` when you compile. On musl, also set
   `RUSTFLAGS="-C target-feature=-crt-static"`. Without it, Rust cannot build the NIF as a shared
   library.

## Usage

Attach the adapter to a request:

```elixir
request =
  Req.new(url: "https://tls.peet.ws/api/all")
  |> CloakedReq.attach(impersonate: :chrome_136)

response =…
