---
repo: "balena-io/open-balena-registry-proxy"
name: "open-balena-registry-proxy"
description: "Pull images from balenaCloud container registry with fleet slugs!"
url: "https://github.com/balena-io/open-balena-registry-proxy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 5
forks: 2
openIssues: 2
closedIssues: 6
watchers: 12
contributors: 10
recentReleases: 0
createdAt: "2022-01-20T16:00:30Z"
lastCommitAt: "2026-06-27T00:36:36Z"
lastReleaseAt: "2024-01-10T23:05:36Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 91
undervaluedScore: 68
maintainers: ["balena-renovate[bot]", "flowzone-app[bot]", "joshbwlng"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3a6b5e75056ab395104c8ed18fb5b7ace56c325682d408f2caad278b70f86d8/balena-io/open-balena-registry-proxy"
---

# open-balena-registry-proxy

Pull container images directly from the balenaHub container registry!

## Getting Started

Publish your block or fleet to balenaHub following the steps here: <https://hub.balena.io/submit>

Once your block|fleet is published, you can update your documentation to use one of the following URLs for pulling images:

- `bh.cr/myorg/myblock`
- `bhcr.io/myorg/myblock`

## Usage

The expected image reference format is `bh.cr/<org>/<app>/<commit|version>:[tag]` where:

- `<org>/<app>` is the application Slug as shown in the Summary pane of the balenaCloud dashboard
- `<commit|version>` is the optional application release, either the commit or the version
- `[tag]` is not required and is ignored

_Why aren't we using the tag to specify the version?_

When a Docker client requests access to a balenaCloud image repository, our registry instructs the client to contact our API for a token following the [Token Authentication Specification](https://docs.docker.com/registry/spec/auth/token/). Our API will then provide a JWT with push|pull permissions
based on the login provided and the repository in question.

In balenaCloud we store every release image in a unique…
