---
repo: "swan-io/swan-partner-frontend"
name: "swan-partner-frontend"
description: "Onboarding & Banking interfaces for Swan"
readmeQualityOk: true
url: "https://github.com/swan-io/swan-partner-frontend"
homepage: "https://swan-io.github.io/swan-partner-frontend/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 72
forks: 31
openIssues: 1
closedIssues: 8
watchers: 10
contributors: 18
recentReleases: 0
createdAt: "2023-03-09T12:35:14Z"
lastCommitAt: "2026-09-16T08:48:16Z"
lastReleaseAt: "2023-06-01T15:04:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["Epimodev", "thibautbaillet", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/611730884/bd5c87e0-fb9b-4513-b87e-cbc4512a7c85"
discussionCount: 3
---

# Swan Partner Front-end

> Onboarding & Banking clients for Swan

- [Documentation](https://swan-io.github.io/swan-partner-frontend)
- [Specifications](https://swan-io.github.io/swan-partner-frontend/specs/onboarding)

## Clone

```console
$ git clone git@github.com:swan-io/swan-partner-frontend.git
$ cd swan-partner-frontend
```

## Install

### 1. Dependencies

Install [pnpm](https://pnpm.io/installation) (needed for the monorepo management).

```console
$ pnpm install
```

### 2. Hosts

Add the following to your `/etc/hosts` file (so that we're able to replicate the subdomains we'll use in production):

```
127.0.0.1 banking.swan.local
127.0.0.1 onboarding.swan.local
127.0.0.1 payment.swan.local
```

### 3. HTTPS

In order to replicate the production conditions (for session cookies mostly), the local server runs in HTTPS. By default, your system will warn against a self-signed certificate, but we can use [mkcert](https://github.com/FiloSottile/mkcert) to make the system trust it.

#### MacOS

With [homebrew](https://brew.sh):

```console
$ brew install mkcert
$ brew install nss # needed for Firefox
$ cd server/keys
$ mkcert -install
$ mkcert "*.swan.local"
```

#### Windows…
