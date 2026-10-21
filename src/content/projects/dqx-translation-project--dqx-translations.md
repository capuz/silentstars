---
repo: "dqx-translation-project/dqx_translations"
name: "dqx_translations"
description: "Translation files for Dragon Quest X."
readmeQualityOk: true
url: "https://github.com/dqx-translation-project/dqx_translations"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2022-07-28T03:52:55Z"
lastCommitAt: "2026-10-21T17:30:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 77
maintainers: ["dqxtranslationproject", "xshobux"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ae09d1d4e7687783e847c2beaf651efc66551e2e7e4aa45fff142d56a92774b/dqx-translation-project/dqx_translations"
---

# dqx_translations

Files in this repository are hosted and maintained in Weblate.

An attempt is made to avoid doing anything directly in the UI and instead, accessing Weblate with its management commands for ease of administration.

## How is this set up?

Instance is hosted in Docker. You will need a general understanding of how Docker works to stand up this installation.

Not discussed in this documentation is the configuration of a reverse proxy in front of the Docker container for secure access to the web UI. I'm hosting it this way, but you are free to present the web UI in whatever fashion you desire. As a reference, the proxy is configured to process requests as documented in the [Weblate documentation](https://docs.weblate.org/en/latest/admin/install/docker.html#docker-container-with-https-support).

Create a local `.env` file that references all of the environment variables in the `docker-compose.override.yml` file and fill in the appropriate values for each section. You can also create this file from the `.env_example` and fill in the values. You can reference [the Weblate documentation](https://docs.weblate.orgest/admin/install/docker.html) for details on what each of…
