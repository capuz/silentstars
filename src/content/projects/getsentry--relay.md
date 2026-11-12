---
repo: "getsentry/relay"
name: "relay"
description: "Sentry event forwarding and ingestion service."
readmeQualityOk: true
url: "https://github.com/getsentry/relay"
homepage: "https://docs.sentry.io/product/relay/"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["tag-production"]
stars: 405
forks: 136
openIssues: 68
closedIssues: 733
watchers: 51
contributors: 235
recentReleases: 0
createdAt: "2018-01-16T23:49:43Z"
lastCommitAt: "2026-11-12T11:12:29Z"
lastReleaseAt: "2018-12-11T01:38:26Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 39
maintainers: ["jjbayer", "sentry-junior[bot]", "Dav1dde"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/117757315/ad7b7680-f41d-11ea-973f-6a12974f3f87"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

# Official Sentry Relay

The Sentry Relay is a service that pushes some functionality from the Sentry
SDKs as well as the Sentry server into a proxy process.

## Documentation

- Product documentation can be found at: [https://docs.sentry.io/product/relay/](https://docs.sentry.io/product/relay).
- Code and development documentation can be found at:
  [https://getsentry.github.io/relay/](https://getsentry.github.io/relay/).

## License

Like Sentry, Relay is licensed under the FSL. See the `LICENSE.md` file and [this
blog post](https://blog.sentry.io/introducing-the-functional-source-license-freedom-without-free-riding/)
for more information.

## Development

>[!NOTE]
> Relay project has strict rules for AI usage. Please see the [HOWTOAI.md](https://github.com/getsentry/relay/blob/HEAD/HOWTOAI.md).

To build Relay, we require the **latest stable Rust** (install via [rustup](https://rustup.rs/)). The crate is split into a
workspace with multiple features, so when running building or running tests
always make sure to pass the `--all` and `--all-features` flags.
The `processing` feature additionally requires a C compiler and CMake.

To install cmake run `brew install cmake`.

To…
