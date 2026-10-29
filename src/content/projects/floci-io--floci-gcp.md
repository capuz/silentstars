---
repo: "floci-io/floci-gcp"
name: "floci-gcp"
description: "Light, fluffy, and always free - GCP Local Emulator"
readmeQualityOk: true
url: "https://github.com/floci-io/floci-gcp"
homepage: "https://floci.io/floci-gcp/"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["docker", "floci", "gcp", "google", "floci-gcp", "localstorage", "localgcp"]
stars: 475
forks: 109
openIssues: 16
closedIssues: 153
watchers: 0
contributors: 32
recentReleases: 4
createdAt: "2026-05-17T17:26:18Z"
lastCommitAt: "2026-10-29T05:51:10Z"
lastReleaseAt: "2026-09-15T04:55:29Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 31
maintainers: ["hectorvent", "herom-s", "avison9"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1241679700/148b0bc6-e533-41ee-8509-5288261e1afa"
fundingLinks: ["GITHUB:https://github.com/floci-io"]
---

Light, fluffy, and always free: the GCP local emulator<br />
  No account. No auth token. No feature gates. Just <code>docker compose up</code>.

---

## What is floci-gcp?

floci-gcp is a free, open-source local GCP emulator for development, testing, and CI.

It gives you GCP-shaped services on your machine without requiring a cloud account, auth token, or paid feature gates. Configure supported GCP SDKs, gcloud CLI commands, Terraform resources, or test suites to use `http://localhost:4588` and keep your existing workflows.

floci-gcp is the GCP member of the [Floci](https://github.com/floci-io) emulator family, named after [floccus](https://en.wikipedia.org/wiki/Cirrocumulus_floccus), the cloud formation that looks like popcorn.

| Emulator | Cloud | Port |
|---|---|:---:|
| [floci](https://github.com/floci-io/floci) | AWS | 4566 |
| [floci-az](https://github.com/floci-io/floci-az) | Azure | 4577 |
| **[floci-gcp](https://github.com/floci-io/floci-gcp)** | **GCP** | **4588** |
| [floci-oci](https://github.com/floci-io/floci-oci) | OCI | 4599 |

## Quick Start

```yaml
# docker-compose.yml
services:
  floci-gcp:
    image: floci/floci-gcp:latest
    ports:
      - "4588:4588"…
