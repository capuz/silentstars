---
repo: "AndreasHeine/SampleServer-node-opcua"
name: "SampleServer-node-opcua"
description: "OPC UA Sample Server based on node-opcua. Showcasing how to implement OPC UA companion specifications. "
readmeQualityOk: true
url: "https://github.com/AndreasHeine/SampleServer-node-opcua"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["node-opcua", "opcua", "opcuaserver", "typescript", "umati"]
stars: 21
forks: 19
openIssues: 1
closedIssues: 24
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2021-08-23T18:57:02Z"
lastCommitAt: "2026-11-09T11:58:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 74
maintainers: ["renovate[bot]", "GoetzGoerisch", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9115419aa14accec8d1f037bcdd03150372b4c32482c915e893e7459a71647b6/AndreasHeine/SampleServer-node-opcua"
discussionCount: 1
---

# SampleServer-node-opcua

OPC UA Sample Server based on [node-opcua](https://github.com/node-opcua/node-opcua)  
the official book node-opcua: [node-opcua by example](https://leanpub.com/node-opcuabyexample-edition2024) by [Sterfive](https://www.sterfive.com)  
API Docs: [2.32.0](https://node-opcua.github.io/api_doc/2.32.0/index.html)

## Usage

- `download and unpack`
- `open folder in VS Code (or in terminal)`
- `npm install`
- `npm run dev-start`

## Example Users

User: `admin` Password: `pw1`  
User: `operator` Password: `pw2`  
User: `guest` Password: `pw3`

## Ephemeral Dev Environment

- [Click](https://gitpod.io/#https://github.com/AndreasHeine/SampleServer-node-opcua)
- `npm run start`
- split terminal: `opcua-commander -e opc.tcp://localhost:4840/UA` to have a local OPC UA client

## Docker

Set "IP" and "PORT" in env:

- `docker run -it -p 4840:4840 -e PORT=4840 -e IP=127.0.0.1 --name sampleserver-node-opcua ghcr.io/andreasheine/sampleserver-node-opcua:main`

## Online Server Instance

- `opc.tcp://opcua.umati.app:4843`

## Implementations of OPC UA Companion Specifications

## Implementation of Energy Monitoring

Implemented in _SampleMachineTool_Energy_.

- Used…
