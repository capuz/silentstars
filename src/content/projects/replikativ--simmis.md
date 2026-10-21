---
repo: "replikativ/simmis"
name: "simmis"
description: "A self-hosted workspace where people and AI agents share one memory: chat, wiki, knowledge bases, an accounting book and a code repository — versioned, queryable, one substrate."
readmeQualityOk: true
url: "https://github.com/replikativ/simmis"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [91]
stars: 11
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-08-20T10:27:15Z"
lastCommitAt: "2026-10-21T23:37:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 36
maintainers: ["whilo", "DanielJomphe"]
openGraphImageUrl: "https://opengraph.githubassets.com/585a7931ee7313f809b0bd7727a37b94842448e70c6cc78384329fa5f3484c08/replikativ/simmis"
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

> **Status: early.** This is a "release early" first public cut. It runs, it
> is used daily, and it has rough edges — see [Known gaps](#known-gaps) before
> deploying it anywhere that matters.

## What is in the box

**Rooms.** A room is a conversation with a durable memory. Humans and agents
are the same kind of participant (a *party*), so `@mention` works across both.
Rooms can be mirrored to Telegram.

**Knowledge bases.** A KB is its own Datahike database holding wiki pages,
blocks, links, and typed entities (customers, invoices, contacts). Pages link
with `[[Title]]`; links are stored as datoms, so backlinks and neighborhood
queries…
