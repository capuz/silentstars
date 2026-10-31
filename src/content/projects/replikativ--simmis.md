---
repo: "replikativ/simmis"
name: "simmis"
description: "A self-hosted workspace where people and AI agents share one memory: chat, wiki, knowledge bases, an accounting book and a code repository — versioned, queryable, one substrate."
readmeQualityOk: true
url: "https://github.com/replikativ/simmis"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [94]
stars: 11
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-08-20T10:27:15Z"
lastCommitAt: "2026-10-31T01:59:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["whilo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d12afbe2cb50740734d44bbe05a285e072537f102e215218455bb992ba732b7/replikativ/simmis"
---

# simmis

A self-hosted workspace where people and AI agents share one memory: chat
rooms, a wiki, knowledge bases, an accounting book, and a code repository —
all of it versioned, all of it queryable, all of it the same substrate.

simmis is the reference application for the
[replikativ](https://replikativ.io) stack. If you want to build an agentic
harness or a local-first SaaS on Datahike, this is a worked example of the
whole path: durable storage, client↔server replication, authorization,
branching and review, and a sandboxed agent runtime.

> **Status: alpha.** Simmis is actively developed and has rough edges. Read
> [Known gaps](#known-gaps) before using it with sensitive or irreplaceable data.

## What is in the box

**Rooms.** A room is a conversation with a durable memory. Humans and agents
are the same kind of participant (a *party*), so `@mention` works across both.
Rooms can be mirrored to Telegram.

**Memory.** New canonical workspaces present one hierarchical file tree.
Markdown files are wiki knowledge, with stable page/block identities and typed
properties. Supported source, reading, rich-text and structure views share the
same revision-checked files. Code files…
