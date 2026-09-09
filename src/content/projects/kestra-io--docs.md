---
repo: "kestra-io/docs"
name: "docs"
description: "Documentation for Kestra — an event-driven, language-agnostic orchestration and scheduling platform to manage millions of workflows declaratively in code."
readmeQualityOk: true
url: "https://github.com/kestra-io/docs"
homepage: "https://kestra.io/docs"
language: "Astro"
languages: ["Astro", "Vue"]
languagePcts: [56, 24]
topics: ["workflow", "workflow-engine", "orchestration", "pipeline", "dataflow", "hacktoberfest"]
stars: 155
forks: 177
openIssues: 74
closedIssues: 1006
watchers: 7
contributors: 138
recentReleases: 0
createdAt: "2020-01-16T13:18:17Z"
lastCommitAt: "2026-09-09T08:21:54Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 53
maintainers: ["vfanucci", "aj-emerich", "iitzIrFan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/234324057/a2abdd5d-11d6-487b-9377-9daafaf16d26"
---

</a>
</p>

<h1 align="center" style="border-bottom: none">
    Event-Driven Declarative Orchestrator
</h1>

</div>

<br />

</p>

    </a>
</p>

# Kestra Documentation

Kestra is an open-source infinitely-scalable orchestration platform enabling all engineers to manage business-critical workflows declaratively in code.

## Documentation

The official Kestra documentation can be found under [kestra.io/docs](https://kestra.io/docs).

## Local development of the Kestra Docs

To run the docs locally, you must have Node.js and NPM installed. Then, run the following commands:

```bash
npm install
npm run dev
```

You can access the docs at [localhost:4321](http://localhost:4321/).

## Contributing Tips

Ensure that all links, including images, are relative.

## Troubleshooting tips

Depending on your Node.js and OS version, you may encounter the following error: `Error message "error:0308010C:digital envelope routines::unsupported"`.

To resolve this issue, you will need to switch to the OpenSSL legacy provider by executing the following command: `export NODE_OPTIONS=--openssl-legacy-provider`.

If you are using an Apple Silicon Mac, please ensure that you are using Node.js version 20…
