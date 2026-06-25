---
repo: "faiscadev/fakecloud"
name: "fakecloud"
description: "Free, open-source AWS emulator. LocalStack alternative: 41 services, 3,704 operations, true 100% Smithy conformance (124,255/124,255 variants pass). No account, no auth token, no paid tier."
url: "https://github.com/faiscadev/fakecloud"
homepage: "https://fakecloud.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["aws", "aws-emulator", "aws-testing", "dynamodb", "integration-testing", "lambda", "localstack-alternative", "s3", "terraform", "moto-alternative"]
stars: 450
forks: 29
openIssues: 0
closedIssues: 39
watchers: 4
contributors: 8
recentReleases: 10
createdAt: "2026-04-04T13:45:31Z"
lastCommitAt: "2026-06-25T06:40:51Z"
lastReleaseAt: "2026-04-11T22:32:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 30
maintainers: ["vieiralucas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fad86469566f719a127309b0f03e8f8ddcc3191a3b07a9032b11dbb373b90de/faiscadev/fakecloud"
---

<strong>fakecloud</strong><br>
  <em>Local AWS cloud emulator. Free forever.</em>
</p>

</p>

---

fakecloud is a free, open-source local AWS emulator for integration testing and local development. Single binary, no account, no auth token, no paid tier. Point your AWS SDK at `http://localhost:4566` and it works.

In March 2026, LocalStack replaced its open-source Community Edition with a proprietary image that requires an account and auth token. fakecloud exists so teams can keep a fully local AWS testing workflow without one.

## Quick start

```sh
curl -fsSL https://fakecloud.dev/install.sh | bash   # or: brew install fakecloud
fakecloud
```

Then point any AWS SDK or CLI at `http://localhost:4566` with dummy credentials:

```sh
aws --endpoint-url http://localhost:4566 sqs create-queue --queue-name my-queue
```

Works as a drop-in for LocalStack in CI, with Terraform (`endpoints` block), CDK (`cdklocal`), or any AWS SDK in any language. Other install options (Homebrew, Cargo, Docker, Docker Compose, source) and full guides: [fakecloud.dev/docs/getting-started](https://fakecloud.dev/docs/getting-started).

## Why fakecloud

- **Free, forever.** AGPL-3.0, no paid tier, no account,…
