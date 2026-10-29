---
repo: "hfproxy/hfproxy"
name: "hfproxy"
description: "Self-hosted, private caching proxy for the Hugging Face Hub: serves models and datasets from your own S3-compatible storage, with access control, SSO/LDAP, audit log and an admin console (7 languages)."
readmeQualityOk: true
url: "https://github.com/hfproxy/hfproxy"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["golang", "hugging-face", "huggingface", "llm", "llms", "opensource", "proxy", "proxy-server", "cache", "huggingface-dataset"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 134
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-27T19:44:51Z"
lastCommitAt: "2026-10-29T10:36:40Z"
lastReleaseAt: "2026-10-29T07:55:27Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 67
maintainers: ["claude", "Shadow-p99"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ce889d27be753eeb1692978dbd8b45a1cd22471ce1a6f782445f9ec00be222b/hfproxy/hfproxy"
---

# hfproxy

hfproxy is an internal Hugging Face Hub proxy written in Go. It applies local access policies before every request, fetches files from the Hub, deduplicates them by SHA-256 in a private S3-compatible bucket, and stores the catalog in PostgreSQL.

hfproxy includes a browser-based administration console built with Angular 22 and Tailwind CSS. It manages access policies and runtime service settings while keeping upstream credentials on the server.

The GitHub Actions CI workflow checks Go formatting, runs `go vet` and `go test ./...`, and builds the Go binary.

## Administration console

## Run locally

The provided Compose setup is intended for development on a trusted machine. It uses demo passwords, HTTP on the internal Docker network, and allows anonymous reads only for repositories marked public.

    cp .env.example .env
    docker compose up --build -d

Create the first administrator. The simplest way is the console: open the service, read the setup code that hfproxy prints when it starts (`docker compose logs hfproxy`), and fill in the form. See [First start](https://github.com/hfproxy/hfproxy/blob/HEAD/docs/operations.md#first-start).

From a shell instead, put…
