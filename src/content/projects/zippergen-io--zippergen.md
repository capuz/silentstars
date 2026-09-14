---
repo: "zippergen-io/zippergen"
name: "zippergen"
description: "Python DSL and runtime for structured multi-agent coordination"
readmeQualityOk: true
url: "https://github.com/zippergen-io/zippergen"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-14T09:48:47Z"
lastCommitAt: "2026-09-14T09:12:38Z"
lastReleaseAt: "2026-09-02T15:25:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["bemibo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddafa9ead2470280b542de1d6bbbe19616a487ae133972cd9a49471de614b847/zippergen-io/zippergen"
---

</p>

</p>

## Write one workflow. Run it as a service.

ZipperGen is a Python framework for workflows with LLM agents, people, and
services. You write who does what and who makes each decision. ZipperGen
derives the program for each participant and runs them.

It also saves workflow state, keeps track of human approvals, and runs the
workflow as a service on your machine or server. You use the same CLI to
configure models and services, check the project, deploy it, and see what is
happening.

---

## From code to a running service

Take an approval workflow. It waits for a message, asks a model to draft a
reply, and asks you before sending it. After handling that message, it waits
for the next one.

You write the workflow and the actions it calls. Before deployment, configure
the model and any external services it needs. Choose how you want to receive
approval requests, for example through Telegram. Then check and deploy the
project:

```bash
zg validate
zg check --strict
zg deploy
```

ZipperGen starts the service and saves its progress. Pending approvals stay
available across a restart. From the same project directory, you can see what
needs attention and how the service is…
