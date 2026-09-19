---
repo: "ForNeVeR/fornever.me"
name: "fornever.me"
description: "Friedrich von Never: Engineer, Programmer, Gentleman."
readmeQualityOk: true
url: "https://github.com/ForNeVeR/fornever.me"
homepage: "https://fornever.me"
language: "F#"
languages: ["F#", "HTML"]
languagePcts: [55, 23]
topics: ["fsharp", "blog", "blog-engine"]
stars: 24
forks: 4
openIssues: 32
closedIssues: 72
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2014-08-16T16:02:44Z"
lastCommitAt: "2026-09-18T21:55:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 54
maintainers: ["renovate[bot]", "ForNeVeR"]
openGraphImageUrl: "https://opengraph.githubassets.com/92844a73b920721d54d553d2e82beff61496c0ce7b4a29c12b68ab6a5227f5ce/ForNeVeR/fornever.me"
---

fornever.me: Engineer, Programmer, Gentleman [][andivionian-status-classifier] [][docker-hub]
============================================

This is the [fornever.me][] site source code. It uses ForneverMind — a simple
homemade blog engine mainly written in the F# programming language.

Features
--------

- ASP.NET Core web engine.
- Main pages layout in Razor.
- Blog posts are written in Markdown.
- Source code highlighting is provided by [highlight.js][] on the server side.
- [Disqus][disqus] comment system.

Configuration
-------------
Backend reads its settings from the standard `appsettings.json` file. The available settings are:

- `baseUrl`: URL to listen when started.

Deployment
----------
Consider using the following [Ansible][ansible] task for deployment:
```yaml
- name: Deploy fornever.me website
  hosts: fornever_me
  vars:
    fornever_me_version: v5.0.0
    fornever_me_port: 5001

  tasks:
    - name: Install fornever.me
      community.docker.docker_container:
        name: fornevermind
        image_name_mismatch: recreate
        image: revenrof/fornever.me:{{ fornever_me_version }}
        published_ports:
          - {{ fornever_me_port }}:80…
