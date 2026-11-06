---
repo: "neutron-simlab/juena-chatbot"
name: "juena-chatbot"
description: "JüNA Chatbot is a production-ready neutron science chatbot built with LangGraph, FastAPI, and Streamlit."
readmeQualityOk: true
url: "https://github.com/neutron-simlab/juena-chatbot"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-04T16:16:30Z"
lastCommitAt: "2026-11-06T11:24:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 66
maintainers: ["az-ihsan"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a930fbd0cff41b4034a90c2950294f8093e90feee8afd0c2c9b0f055a0187f0/neutron-simlab/juena-chatbot"
---

# JüNA Chatbot

JüNA helps researchers explore neutron science, search scientific software
repositories, and create Python plots through chat. It uses IFFLogin for server
sign-in, juena-rag for repository search, and an isolated worker for approved
code execution.

The primary deployment is a Linux server. Both a shared nginx gateway and a
dedicated server are supported. Only this checkout is needed: `uv.lock` pins
the core and RAG dependencies, and Docker builds the application.

## Server operation

Start with [the server guide](https://github.com/neutron-simlab/juena-chatbot/blob/HEAD/deploy/SERVER.md) for installation. On an already
configured server, run from the deployed checkout:

```bash
sudo ./juena prod up
sudo ./juena prod health
sudo ./juena prod doctor
```

Server commands read `/etc/juena/juena.env`. The checkout's `.env` is for local
development. See the guides below for indexing, worker setup, updates and shutdown.

## Documentation

| Guide | Contents |
| --- | --- |
| [Server deployment](https://github.com/neutron-simlab/juena-chatbot/blob/HEAD/deploy/SERVER.md) | Installation, both gateway modes, updates, capacity and backups |
|…
