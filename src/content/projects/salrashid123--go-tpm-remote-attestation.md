---
repo: "salrashid123/go_tpm_remote_attestation"
name: "go_tpm_remote_attestation"
description: "TPM Remote Attestation protocol using go-tpm and gRPC"
readmeQualityOk: true
url: "https://github.com/salrashid123/go_tpm_remote_attestation"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["golang", "remote-attestation", "trusted-platform-module"]
stars: 31
forks: 9
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-08-18T14:16:41Z"
lastCommitAt: "2026-08-28T14:35:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 65
undervaluedScore: 35
maintainers: ["salrashid123"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7ada52cd186875f63804d4d758d670986d8bbc78a952d1cab59c9c478e3f7c1/salrashid123/go_tpm_remote_attestation"
---

# TPM Remote Attestation protocol using go-tpm and gRPC

This repo contains a sample `gRPC` client server application that uses a Trusted Platform Module for:

* TPM [Remote Attestation](https://tpm2-software.github.io/tpm2-tss/getting-started/2019/12/18/Remote-Attestation.html)
* TPM [Quote-Verify](https://github.com/salrashid123/tpm2/tree/master/quote_verify)
* TPM Attestation of signing key
* Parse TPM EventLog; verify SecureBoot

>>> **NOTE** the code outlined here is **NOT** supported by google.

You can use this standalone to setup a gRPC client/server for remote attestation.

There are *TWO* branches to this repo: 

* [pull](https://github.com/salrashid123/go_tpm_remote_attestation/tree/pull) (this branch):  In this mode, the attestor is the client initiator that makes an rpc call to the verifier
* [push](https://github.com/salrashid123/go_tpm_remote_attestation/tree/push):  In this mode, the attestor is the server and the verifier makes an rpc call to the attestor

There are two parts to this application:

* `attestor`: a `gRPC` TPM client which connects to the corresponding verifier and provides apis which allows RemoteAttestation, QuoteVerify and finally transmits an new…
