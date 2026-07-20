---
repo: "osism/openstack-image-manager"
name: "openstack-image-manager"
description: "Easily manage and keep up to date a large number of images on an OpenStack environment"
readmeQualityOk: true
url: "https://github.com/osism/openstack-image-manager"
homepage: "https://osism.tech/docs/guides/operations-guide/openstack/tools/image-manager/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["openstack", "openstack-glance"]
stars: 33
forks: 24
openIssues: 16
closedIssues: 145
watchers: 5
contributors: 28
recentReleases: 0
createdAt: "2018-06-28T11:40:14Z"
lastCommitAt: "2026-07-20T06:33:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["renovate[bot]", "ideaship", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5642912dbc885df19e568b9f1208b1d2b8e6e6c9dead4f421a4c065cc91b27a4/osism/openstack-image-manager"
---

# openstack-image-manager

Easily manage and keep up to date a large number of images on an OpenStack environment

## Upstream checksum fields

Image versions using the `latest` pointer must specify where to find the
upstream checksum, using exactly one of these two fields:

- `checksums_url` — URL of a checksums file that contains the image filename,
  e.g. the `SHA256SUMS` manifest published by Ubuntu. Lines have the form
  `<digest> <filename>`; the line matching the image filename is used.
- `checksum_url` — URL of a checksum file that contains a single bare digest
  and nothing else, e.g. the `.sha512` sidecar files published by Alpine. Use
  this when the checksum file does not contain the image filename.

Supported digests are MD5, SHA-1, SHA-256 and SHA-512 (hex-encoded). The
checksum URLs must be HTTP(S).

## Import path (`--prefetch`)

By default images are imported with Glance's `web-download` method, where
glance-api fetches the image from its URL itself. When that fetch is slow or
flaky, the import can stall and revert to `queued`. As an alternative the image
can be downloaded locally with `aria2c` (robust multi-connection download with
retry and resume) and uploaded…
