---
repo: "harryzcy/mailbox-browser"
name: "mailbox-browser"
description: "Web Interface for Mailbox"
readmeQualityOk: true
url: "https://github.com/harryzcy/mailbox-browser"
homepage: "https://github.com/harryzcy/mailbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["web", "emails", "mailbox", "mailbox-service", "self-hosted"]
stars: 32
forks: 6
openIssues: 2
closedIssues: 18
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-11-19T05:55:07Z"
lastCommitAt: "2026-07-20T06:34:19Z"
lastReleaseAt: "2023-05-28T12:38:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["renovate[bot]", "harryzcy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe781d0a5c01f7e54a4e68186f00e30263b7b0e64e0dcba794ffba305717156/harryzcy/mailbox-browser"
---

# mailbox-browser

Web Interface for Mailbox.

## Usage

### Docker

```shell
docker run --env AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID> \
           --env AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY> \
           --env AWS_REGION=<AWS_REGION> \
           --env AWS_API_GATEWAY_ENDPOINT=<AWS_API_GATEWAY_ENDPOINT> \
           harryzcy/mailbox-browser
```

### Cloudflare Pages & Pages Functions

1. Clone the repository
1. Create [Cloudflare project](https://developers.cloudflare.com/pages/get-started/guide/)
1. Configure correct environment variables according to [this](#environment-variables) section
1. Run `make cloudflare`

Replace the environment variables with respective values.

Two forms of authentication is supported when using Cloudflare for deployments:

- Basic Auth: Providing `AUTH_BASIC_USER` and `AUTH_BASIC_PASS` environmental variable will enabled HTTP basic auth for all routes.
- Forward Auth: This method delegates authentication to an external service, whose URL address is defined by `AUTH_FORWARD_ADDRESS`.

  For every request received, the middleware will send a request with the same header to the external service. If the response has a 2XX code, then the access is…
