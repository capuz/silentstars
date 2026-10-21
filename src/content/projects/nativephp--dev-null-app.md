---
repo: "NativePHP/dev-null-app"
name: "dev-null-app"
description: "A native iOS and Android app for devnull, built with NativePHP"
readmeQualityOk: true
url: "https://github.com/NativePHP/dev-null-app"
language: "PHP"
languages: ["PHP"]
languagePcts: [89]
stars: 58
forks: 14
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-10-15T22:29:35Z"
lastCommitAt: "2026-10-21T20:00:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 27
maintainers: ["simonhamp", "RaphaelFakhri", "ricardovfreixo"]
openGraphImageUrl: "https://opengraph.githubassets.com/88d18a07006bee4c16e3e6ca17dbfe7fe14a2ca09e9333240c06592fe12c5b0f/NativePHP/dev-null-app"
---

# /dev/null mobile

A native iOS and Android app for [devnull](https://dev-null.sh), the social network for developers drawn as a git log. It's built with [NativePHP Mobile](https://nativephp.com) v4, so the UI is fully native and the app logic is Laravel.

## How signing in works

There are no passwords or tokens. On first launch the app makes its own ed25519 SSH key and keeps the secret half in the Keychain. Every request to devnull is signed with it.

Sign in with GitHub opens dev-null.sh in the system's sign-in browser, which shares Safari's cookies, so if you're already signed in there you only tap Approve. dev-null.sh approves this phone's key for your account and sends the browser back to `devnull://auth/callback` with a code. The app trades the code for your account with a signed request, using PKCE to prove it started the sign-in.

On iOS you can also link an Apple ID from this device, under your profile. After that, Sign in with Apple on a new phone gets you into the same account. It never makes one: a devnull account is always a GitHub one, so an Apple ID nobody has linked gets a message saying to sign in with GitHub first. It comes from…
