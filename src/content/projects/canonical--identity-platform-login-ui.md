---
repo: "canonical/identity-platform-login-ui"
name: "identity-platform-login-ui"
description: "Login UI for the Canonical identity broker and identity provider solution"
readmeQualityOk: true
url: "https://github.com/canonical/identity-platform-login-ui"
homepage: "https://github.com/canonical/identity-platform-login-ui"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 21]
topics: ["golang", "identity-platform", "login-ui", "rockcraft"]
stars: 23
forks: 15
openIssues: 32
closedIssues: 143
watchers: 7
contributors: 18
recentReleases: 0
createdAt: "2023-01-18T10:07:20Z"
lastCommitAt: "2026-09-17T08:50:08Z"
lastReleaseAt: "2023-08-15T10:55:51Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 68
maintainers: ["nsklikas", "renovate[bot]", "canonical-iam"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc2fa91096cfdfa5de07dd7eca01298e3ad03aa0afe0f300470b102875a9e83/canonical/identity-platform-login-ui"
discussionCount: 0
---

# Identity Platform Login UI

This is the UI for the Canonical Identity Platform.

## Running the UI

### Build

To create a binary with the UI you need to run:

```shell
make npm-build build
```

Please don't run them in parallel, `build` requires the target `cmd/ui/dist`
which, unless the `js` code has been build independently, requires `npm-build`
If you want to skip the `npm-build` make sure the `js` artifacts are in
the `ui/dist` folder (check the `Makefile` for more advanced information).

This will:

- build the `js` code
- produce a binary called `app` which you can run with:

```shell
PORT=<port number> ./cmd/app
```

### Environment variables

Code dealing with the environment variables resides
in [here](https://github.com/canonical/identity-platform-login-ui/blob/HEAD/internal/config/specs.go) where each attribute has an annotation which
is the lowercase of the environment variable name.

At the moment the application is sourcing the following from the environment:

- `OTEL_GRPC_ENDPOINT` - needed if we want to use the OTel gRPC exporter for
  traces
- `OTEL_HTTP_ENDPOINT` - needed if we want to use the OTel HTTP exporter for
  traces (if gRPC is specified this gets…
