---
repo: "rise-deploy/rise"
name: "rise"
description: "Simply deploy your app."
readmeQualityOk: true
url: "https://github.com/rise-deploy/rise"
homepage: "https://rise-deploy.github.io/rise/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 5
forks: 2
openIssues: 43
closedIssues: 53
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-11-29T15:39:27Z"
lastCommitAt: "2026-08-28T14:35:33Z"
lastReleaseAt: "2026-02-05T11:08:47Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 70
maintainers: ["NiklasRosenstein", "renovate-rosenstein-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ee6f3eaf6d6ad5484ea01f90cb017e1ee6211e40f66e787e8111634f3beb0e4/rise-deploy/rise"
---

# Rise <img src="static/assets/favicon-32x32.png" height="32px" align="right"/> 

</p>
</p>

[Go to Documentation → ](https://niklasrosenstein.github.io/rise/)

## What is Rise?

  [pack]: https://buildpacks.io/docs/for-platform-operators/how-to/integrate-ci/pack/
  [railpack]: https://railpack.com/

Rise simplifies container deployment by providing:

- **Simple CLI** for building and deploying apps
    - **Buildpack support** with [pack] and [railpack]
    - **Enterprise ready** with support for corparate MITM proxies (handles `SSL_CERT_FILE` and `HTTPS_PROXY` forwarding)
- **Web dashboard** for monitoring deployments
- **Project & Team Management**: Organize apps and collaborate with teams
- **OAuth2/OIDC Authentication**: Secure authentication for Rise and deployed apps
- **Multi-tenant projects** with team collaboration
- **Automatic OCI repository provisioning**: Push images to AWS ACR with secure temporary credentials without per-project infrastructure setup
- **Service Accounts**: Workload identity for GitHub Actions, GitLab CI, etc. to deploy from CI/CD

## Install CLI

```bash
# Download the latest pre-built binary from GitHub Releases
mise use -g github:rise-deploy/rise…
