---
repo: "tezos/tezos-mirror"
name: "tezos-mirror"
description: "Github test mirror of the Octez software. Please do not submit pull-requests here!"
readmeQualityOk: true
url: "https://github.com/tezos/tezos-mirror"
homepage: "https://gitlab.com/tezos/tezos"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [77]
topics: ["blockchain", "tezos", "ocaml", "smart-contracts"]
stars: 113
forks: 44
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 240
recentReleases: 0
createdAt: "2022-05-25T11:16:24Z"
lastCommitAt: "2026-10-23T08:21:50Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 46
maintainers: ["eugenz-nl", "mebsout", "vect0r-vicall"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfd52a662a6a1f8b9f0ad2003b6397a7750497b59ecdb5e04800495a4f7ee669/tezos/tezos-mirror"
---

# Tezos Octez implementation

## Introduction

Tezos is a blockchain that offers both  _consensus_ and _meta-consensus_, by which we mean that Tezos comes to consensus both about the state of its ledger, and  _also_ about how the
protocol and the nodes should adapt and upgrade.
For more information about the project, see https://tezos.com.

## Getting started

Instructions to
[install](https://octez.tezos.com/docs/introduction/howtoget.html), [start
using](https://octez.tezos.com/docs/introduction/howtouse.html), and
[taking part in the
consensus](https://octez.tezos.com/docs/introduction/howtorun.html) are
available at https://octez.tezos.com/docs/.

## The Tezos software

This repository hosts **Octez**, an implementation of the Tezos blockchain.
Octez provides a node, a client, a baker, an accuser, and other tools, distributed with the Tezos economic protocols of Mainnet for convenience.

In more detail, this git repository contains:
- the source code, in directory src/
- tests (mainly system tests) in an OCaml system testing framework for Tezos called Tezt, under tezt/
- the developer documentation of the Tezos software, under docs/
- a few third-party libraries, adapted for…
