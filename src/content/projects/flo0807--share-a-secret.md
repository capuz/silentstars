---
repo: "Flo0807/share-a-secret"
name: "share-a-secret"
description: "Share a Secret is an open-source and self-hosted secret sharing platform built with Elixir, Phoenix and daisyUI."
url: "https://github.com/Flo0807/share-a-secret"
homepage: "https://share-a-secret.fly.dev"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [89]
topics: ["elixir", "phoenix", "phoenix-liveview", "self-hosted", "tailwindcss"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-21T14:10:34Z"
lastCommitAt: "2026-06-27T06:23:52Z"
lastReleaseAt: "2024-08-28T15:15:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 55
maintainers: ["renovate[bot]", "Flo0807"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c535b2fe10a25d90fd3d87fd29db0ae7725a4093bc84d3b97bf225c0e0ca3c/Flo0807/share-a-secret"
---

# Share a Secret

**Demo:** [share-a-secret.fly.dev](https://share-a-secret.fly.dev/)

Share a Secret is an open-source and self-hosted secret sharing platform.

It lets you securely share information with trusted people through a link. This can be anything - a message, a password or a piece of information you want to share discreetly.

Once you have entered a secret, you can configure how many links you need and how long the secret will be available. This will generate links that you can copy and give to trusted people. 
Once they have accessed the secret, the link is no longer valid. 

The secret is stored in the database using a symmetric 128bit AES encryption. The decryption key is part of the URL, adding an extra layer of security. 
Only the person with the link can decrypt the secret, ensuring it is securely delivered to the intended recipient. This means that even if someone gains access to the secret itself, they won't be able to decrypt it without the specific key in the URL.

The URLs are not stored. This means that as long as you keep the links private, it is impossible for anyone to access the decrypted secret.

Tech stack:
- Elixir, Phoenix, LiveView, TailwindCSS,…
