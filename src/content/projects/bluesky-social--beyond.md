---
repo: "bluesky-social/beyond"
name: "beyond"
description: "BeyondCorp-Inspired HTTPS Proxy"
readmeQualityOk: true
url: "https://github.com/bluesky-social/beyond"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 27
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 9
createdAt: "2026-08-10T11:29:17Z"
lastCommitAt: "2026-11-09T00:52:42Z"
lastReleaseAt: "2026-11-07T04:02:59Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 85
undervaluedScore: 42
maintainers: ["amckinley", "jcalabro", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7df8f213c1e55c2ac00bea209187dc47fed8af7f3fc18d8c219bcaf78e7c8ff0/bluesky-social/beyond"
---

# beyond

A zero-trust network access (ZTNA) reverse proxy. It sits in front of internal HTTP apps (Grafana, ArgoCD, etc.), authenticates users against an OIDC provider, checks group membership, and forwards allowed requests upstream with identity headers (`X-Beyond-Email`, `X-Beyond-Groups`, ...). Inspired by [presbrey/beyond](https://github.com/presbrey/beyond).

Apps and their allowed groups are declared in a YAML config:

```yaml
portal:
  host: example.com
  title: Applications

applications:
  grafana:
    upstream: http://grafana:3000
    host: grafana.example.com
    display_name: Grafana
    description: Metrics and dashboards
    launch_url: https://grafana.example.com/
    allowed_groups: [engineering, ops]
```

When `portal` is configured, its host serves a small authenticated application
directory. It lists only applications allowed by the user's current groups;
administrators see all applications except entries marked `hide_from_portal`.
`display_name`, `description`, and `launch_url` are optional. Launch URLs
default to `https://<host>/` and, when set explicitly, must remain on the
application's configured host. Set `hide_from_portal: true` for supporting
hosts such…
