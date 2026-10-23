---
repo: "KailangHuo/COAP.TwinCAT.CommandProtocol"
name: "COAP.TwinCAT.CommandProtocol"
description: "Command Oriented Ads Protocol"
readmeQualityOk: true
url: "https://github.com/KailangHuo/COAP.TwinCAT.CommandProtocol"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["command-communication-plc", "twincat", "twincat-ads"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-11T16:19:26Z"
lastCommitAt: "2026-10-13T06:59:59Z"
lastReleaseAt: "2026-07-06T16:17:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 15
maintainers: ["KailangHuo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e75dfa284bfcfe0dfe4cf19a146d41ccc534428601d393efbdda4e7ecb267fda/KailangHuo/COAP.TwinCAT.CommandProtocol"
---

# CoapClient

[English](https://github.com/KailangHuo/COAP.TwinCAT.CommandProtocol/blob/HEAD/README.md) | [中文](https://github.com/KailangHuo/COAP.TwinCAT.CommandProtocol/blob/HEAD/README_CN.md)

COAP means **Command Oriented Ads Protocol**.

CoapClient is a command-oriented C# middleware for Beckhoff TwinCAT ADS.

It turns the common PLC interaction pattern of "write DO/AO, then poll DI/AI" into an asynchronous command lifecycle based on ADS notifications.

> Note: this project is not an implementation of the IETF CoAP protocol. In this project, COAP stands for Command Oriented Ads Protocol.

## Command Sequence

The sequence below shows how CoapClient prepares the ACK observation path before writing the command variable, then completes the command when the PLC publishes the expected ACK.

## Why This Project Exists

In many upper-level automation applications, one complete action is modeled like this:

1. The C# application writes a DO/AO variable to start an action.
2. A PLC task executes the action.
3. The PLC updates a DI/AI variable to expose the result.
4. The C# application repeatedly reads the DI/AI variable until it reaches the expected value or times out.

That works,…
