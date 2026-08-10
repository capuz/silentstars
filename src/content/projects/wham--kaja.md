---
repo: "wham/kaja"
name: "kaja"
description: "A code-based UI for exploring and calling gRPC and Twirp APIs."
readmeQualityOk: true
url: "https://github.com/wham/kaja"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [58, 40]
topics: ["api", "grpc", "protobuf", "twirp"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-01-15T07:24:58Z"
lastCommitAt: "2026-08-10T05:05:42Z"
lastReleaseAt: "2026-04-14T05:58:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["wham", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de3cf7583de75f2e8ea7eb8770a793bca989ff67673d76053c2542a82b78c6f7/wham/kaja"
---

</p>

<h3 align="center">Explore and call your APIs with code</h3>

  A code-based UI for exploring and calling <a href="https://grpc.io">gRPC</a> and <a href="https://github.com/twitchtv/twirp">Twirp</a> APIs.
  <br/>
  Write TypeScript to construct requests, call services, and inspect responses — no forms, no clicking through fields.
</p>

  </a>
  &nbsp;
  </a>
</p>

</p>

</p>

  </a>
</p>

## Features

- **Code-based** — Write TypeScript to call your APIs. Full autocomplete for services, methods, and message fields.
- **gRPC & Twirp** — Native support for both protocols. Reads your `.proto` files or uses [gRPC server reflection](https://grpc.io/docs/guides/reflection/).
- **macOS & Docker** — Available on the [Mac App Store](https://apps.apple.com/us/app/kaja-for-grpc-and-twirp/id6761604205?mt=12) or as a [Docker container](https://hub.docker.com/r/kajatools/kaja) for any environment.

## Run with Docker

```
docker run --pull always --name kaja -d -p 41520:41520 \
    -v /my_app/proto:/workspace/proto \
    -v /my_app/kaja.json:/workspace/kaja.json \
    --add-host=host.docker.internal:host-gateway kajatools/kaja:latest
```

Then open…
