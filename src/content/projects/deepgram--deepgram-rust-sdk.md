---
repo: "deepgram/deepgram-rust-sdk"
name: "deepgram-rust-sdk"
description: "Community Rust SDK for Deepgram."
readmeQualityOk: true
url: "https://github.com/deepgram/deepgram-rust-sdk"
homepage: "https://developers.deepgram.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["deepgram", "hacktoberfest", "rust", "speech-recognition", "speech-to-text"]
stars: 67
forks: 45
openIssues: 14
closedIssues: 32
watchers: 5
contributors: 28
recentReleases: 0
createdAt: "2022-04-12T23:02:45Z"
lastCommitAt: "2026-10-08T10:51:08Z"
lastReleaseAt: "2024-12-02T21:21:06Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 72
undervaluedScore: 44
maintainers: ["dg-coreylweathers", "GregHolmes", "lukeocodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9d00b78771faf6911fe550e487b8f08515e2cde81d60c849d52b02e77eef04c/deepgram/deepgram-rust-sdk"
---

# Deepgram Rust SDK

A Community Rust SDK for [Deepgram](https://www.deepgram.com/). Start building with our powerful transcription & speech understanding API.

## SDK Documentation

This SDK implements the Deepgram API found at [https://developers.deepgram.com](https://developers.deepgram.com).

Documentation and examples can be found on our [Docs.rs page](https://docs.rs/deepgram/latest/deepgram/).

## Quick Start

Check out the [examples folder](https://github.com/deepgram/deepgram-rust-sdk/blob/HEAD/examples/) for practical code examples showing how to use the SDK.

## Authentication

🔑 To access the Deepgram API you will need a [free Deepgram API Key](https://console.deepgram.com/signup?jump=keys).

There are two ways to authenticate with the Deepgram API:

1.  **API Key**: This is the simplest method. You can get a free API key from the
    [Deepgram Console](https://console.deepgram.com/signup?jump=keys).

    ```rust
    use deepgram::Deepgram;

    let dg = Deepgram::new("YOUR_DEEPGRAM_API_KEY");
    ```

2.  **Temporary Tokens**: If you are building an application where you need to
    grant temporary access to the Deepgram API, you can use temporary tokens.
    This is…
