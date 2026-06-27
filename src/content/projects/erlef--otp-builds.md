---
repo: "erlef/otp_builds"
name: "otp_builds"
description: "Community-maintained pre-compiled Erlang/OTP for macOS"
url: "https://github.com/erlef/otp_builds"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
stars: 46
forks: 6
openIssues: 3
closedIssues: 34
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2024-09-06T14:40:05Z"
lastCommitAt: "2026-06-27T00:50:34Z"
lastReleaseAt: "2024-10-06T19:42:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 97
undervaluedScore: 54
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53f613c7c50c2c72c79f352fda6d84f737066ec883580517de241b32949709ca/erlef/otp_builds"
fundingLinks: ["CUSTOM:https://members.erlef.org/join-us", "CUSTOM:https://erlef.org/sponsors#become-a-sponsor"]
---

# OTP Builds

This is a collection of community-maintained
[Erlang/OTP](https://github.com/erlang/otp) binary builds.

Supported operating systems:

* `darwin` (macOS)

Supported architectures:

* `x86_64`
* `aarch64`

The goal of these builds is to be as self-contained as possible. OpenSSL (used by `crypto` app)
and wxWidgets (used by `wx` app and its dependants, `observer`, `debugger`, and `et`) are
statically linked.

## List of Builds

List of builds can be found here:

* `x86_64-apple-darwin` - <https://github.com/erlef/otp_builds/blob/main/builds/x86_64-apple-darwin.csv>
* `aarch64-apple-darwin` - <https://github.com/erlef/otp_builds/blob/main/builds/aarch64-apple-darwin.csv>

Entries in the list of builds follow this pattern:

    {ref_name},{ref},{datetime},{sha256},{openssl_version},{wxwidgets_version}

Where `{ref_name}` is the Erlang/OTP git tag or branch name, `{ref}` is the git sha corresponding
to the `{ref_name}`, `{datetime}` is the time the build was created and `{sha256}` is the build
SHA-256 checksum. The `{openssl_version}` and `{wxwidgets_version}` are versions that we are
statically linking with.

Example `builds/aarch64-apple-darwin.csv` entry:

```csv…
