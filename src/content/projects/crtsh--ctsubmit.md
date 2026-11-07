---
repo: "crtsh/ctsubmit"
name: "ctsubmit"
description: "CT submission proxy"
readmeQualityOk: true
url: "https://github.com/crtsh/ctsubmit"
homepage: "https://ctsubm.it/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 6
forks: 6
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 4
recentReleases: 6
createdAt: "2026-01-23T21:29:50Z"
lastCommitAt: "2026-11-07T13:54:50Z"
lastReleaseAt: "2026-10-13T15:26:33Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 92
maintainers: ["robstradling", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaa3e8eb02713cb05e911780c650515d41094f70a26357bddd88889d62e194c4/crtsh/ctsubmit"
discussionCount: 0
---

# ctsubmit [](https://github.com/crtsh/ctsubmit/actions/workflows/ci.yml) [](https://securityscorecards.dev/viewer/?uri=github.com/crtsh/ctsubmit) [](LICENSE) [](https://github.com/crtsh/ctsubmit/releases) [](go.mod) [](https://github.com/crtsh/ctsubmit/pkgs/container/ctsubmit)

A REST API and web interface for submitting (pre)certificate chains to [Certificate Transparency](https://certificate.transparency.dev/) logs and collecting Signed Certificate Timestamps (SCTs).

At a glance:

- [Features](#features)
- [Why use ctsubmit?](#why-use-ctsubmit)
- [Docker containers](#docker-containers)
- [Public instances](#public-instances)
- [About this project](#about-this-project)
- [Mascot](#mascot)

Details:

- [Installation and Configuration](https://github.com/crtsh/ctsubmit/blob/HEAD/docs/INSTALL.md)
- [REST API Documentation](https://github.com/crtsh/ctsubmit/blob/HEAD/docs/REST_API.md)
- [Submission Strategy](https://github.com/crtsh/ctsubmit/blob/HEAD/docs/SubmissionStrategy.md)

## Features

- Extends the [RFC 6962 §4.1/§4.2](https://www.rfc-editor.org/rfc/rfc6962.html#section-4.1) `add-chain` and `add-pre-chain` request format.
- Verifies each submitted chain and determines which…
