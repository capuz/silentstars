---
repo: "getnora-io/nora"
name: "nora"
description: "Self-hosted artifact registry and pull-through cache in one binary. 17 formats: Docker/OCI, Maven, npm, PyPI, Cargo, Go, Raw, RubyGems, Terraform, Ansible Galaxy, NuGet, Pub, Conan, CPAN, RPM, Debian/APT, Hugging Face. No database, about 15 MB RAM idle, supply-chain curation built in."
readmeQualityOk: true
url: "https://github.com/getnora-io/nora"
homepage: "https://getnora.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["artifact-registry", "artifactory-alternative", "docker-registry", "maven-repository", "nexus-alternative", "npm-registry", "air-gapped", "supply-chain-security", "cargo-registry", "oci-registry"]
stars: 355
forks: 46
openIssues: 49
closedIssues: 381
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2026-01-25T16:13:37Z"
lastCommitAt: "2026-10-31T09:43:40Z"
lastReleaseAt: "2026-01-26T19:58:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 33
maintainers: ["devitway", "mludolph", "clain23"]
openGraphImageUrl: "https://opengraph.githubassets.com/e621f2b8626bb0e930e36190a502caf8edb41c26611720c1acd05e7298d0180b/getnora-io/nora"
discussionCount: 4
---

# NORA

**One binary, seventeen package formats, no database.** NORA is a self-hosted artifact registry and pull-through cache for Docker, Maven, npm, PyPI, Cargo, Go and more, with supply-chain controls built in.

```bash
docker run -d -p 4000:4000 -v nora-data:/data getnora/nora:latest
```

Open [http://localhost:4000/ui/](http://localhost:4000/ui/): the registry is ready.

## Why NORA

- **Small and quick to start.** A static binary of about 23 MB with no database and no runtime to install; it answers in under a second and idles at about 15 MB of memory ([BENCHMARKS.md](https://github.com/getnora-io/nora/blob/HEAD/BENCHMARKS.md)).
- **Seventeen formats, hosted and proxied.** One registry for containers, language packages, OS packages and Hugging Face models, on local disk, S3-compatible storage or Google Cloud Storage.
- **What you publish stays yours.** A package, crate or image published to NORA is never replaced by an upstream package of the same name. Curation — allowlist, blocklist, minimum release age, quarantine of new versions, internal namespaces — decides what reaches your builds.
- **Ready to operate.** A web UI in English, Russian and Chinese, API tokens with read,…
