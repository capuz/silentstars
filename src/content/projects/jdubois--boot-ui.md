---
repo: "jdubois/boot-ui"
name: "boot-ui"
description: "The missing developer UI for Spring Boot and Quarkus!"
readmeQualityOk: true
url: "https://github.com/jdubois/boot-ui"
homepage: "https://www.julien-dubois.com/boot-ui/"
language: "Java"
languages: ["Java"]
languagePcts: [85]
topics: ["developer-tools", "java", "spring-boot", "spring-boot-4", "spring-boot-starter", "quarkus", "quarkus-extension", "agent-skills", "mcp", "mcp-server"]
stars: 341
forks: 40
openIssues: 2
closedIssues: 199
watchers: 4
contributors: 6
recentReleases: 5
createdAt: "2026-05-25T14:52:52Z"
lastCommitAt: "2026-11-21T12:33:09Z"
lastReleaseAt: "2026-10-14T08:56:37Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 32
maintainers: ["github-actions[bot]", "jdubois"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c45b6f3021f241d9a1d64c7dc3e607229148cd3abbe0f87aca79ec12356402e/jdubois/boot-ui"
discussionCount: 3
---

# BootUI

BootUI adds an embedded, local-only developer console to your application. It runs on **Spring Boot** (servlet or
WebFlux) and **Quarkus**, serving the same Vue UI and REST contract (`/bootui` and `/bootui/api/**` by default,
configurable with `bootui.path` / `bootui.api-path`) from a shared,
framework-neutral engine — add the Spring Boot starter (one for both stacks) or the Quarkus extension and BootUI
activates only in local development.

Read the documentation at <https://www.julien-dubois.com/boot-ui/>.

> **BootUI is available on Maven Central**, with exact correlation, a durable SQL runtime journal, historical
> profiles, Runtime Insights, run comparison, and optional Java-agent instrumentation. Follow the
> [setup guide](https://github.com/jdubois/boot-ui/blob/HEAD/docs/SETUP.md), read its
> [known limitations](https://github.com/jdubois/boot-ui/blob/HEAD/docs/KNOWN-LIMITATIONS.md), and share feedback in
> [GitHub Discussions](https://github.com/jdubois/boot-ui/discussions).

## Try it locally

With Docker or Podman running:

```bash
docker run --rm -p 127.0.0.1:8080:8080 \
  -e BOOTUI_TRUST_CONTAINER_GATEWAY=AUTO jdubois/bootui-sample-app
```
