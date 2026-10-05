---
repo: "cloudfoundry/haproxy-boshrelease"
name: "haproxy-boshrelease"
description: "A BOSH release for haproxy (based on cf-release's haproxy job)"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/haproxy-boshrelease"
language: "Ruby"
languages: ["Ruby", "Go"]
languagePcts: [42, 33]
topics: ["cff-wg-app-runtime-platform"]
stars: 36
forks: 83
openIssues: 0
closedIssues: 86
watchers: 36
contributors: 74
recentReleases: 0
createdAt: "2015-05-29T20:24:18Z"
lastCommitAt: "2026-10-05T10:46:20Z"
lastReleaseAt: "2016-06-28T13:15:47Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 60
maintainers: ["dependabot[bot]", "CFN-CI", "b1tamara"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dbdfbf5f2ea505902dc37c0db57ccaf383c0ebb7416639dd7df4744a7d6fe49/cloudfoundry/haproxy-boshrelease"
---

# BOSH Release for HAProxy

Questions? Pop in our [slack channel](https://cloudfoundry.slack.com/messages/haproxy-boshrelease/)!

This BOSH release is an attempt to get a more customizable/secure HAProxy release than what
is provided in [cf-release](https://github.com/cloudfoundry/cf-release). It allows users to
blocklist internal-only domains, preventing potential Host header spoofing from allowing
unauthorized access of internal APIs. It also allows for better control over HAProxy's
timeouts, for greater resiliency under heavy load.

## Usage

To deploy this BOSH release:

```bash
git clone https://github.com/cloudfoundry-community/haproxy-boshrelease.git
cd haproxy-boshrelease

export BOSH_ENVIRONMENT=<alias>
export BOSH_DEPLOYMENT=haproxy
bosh deploy manifests/haproxy.yml \
  -v haproxy-backend-port=80 \
  -v "haproxy-backend-servers=[10.10.10.10,10.10.10.11]"
```

To make alterations to the deployment you can use the `bosh deploy [-o operator-file.yml]` flag to provide [operations files](https://bosh.io/docs/cli-ops-files.html).

## Documentation

- [External Certificates](https://github.com/cloudfoundry/haproxy-boshrelease/blob/HEAD/docs/external_certs.md) - Using HAProxy…
