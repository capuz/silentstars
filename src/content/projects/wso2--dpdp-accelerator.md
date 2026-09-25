---
repo: "wso2/dpdp-accelerator"
name: "dpdp-accelerator"
description: "DPDP Accelerator is a collection of artifacts, reference implementations, and documentation that help organizations accelerate the adoption of DPDP Act."
readmeQualityOk: true
url: "https://github.com/wso2/dpdp-accelerator"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [57, 40]
topics: ["api-management", "asgardeo", "identity"]
stars: 12
forks: 7
openIssues: 59
closedIssues: 101
watchers: 0
contributors: 81
recentReleases: 3
createdAt: "2026-08-03T06:43:17Z"
lastCommitAt: "2026-09-25T09:02:47Z"
lastReleaseAt: "2026-09-23T15:47:06Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 59
maintainers: ["anjuchamantha", "ParameswaranSajeenthiran", "hasithakn"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e07e40d7d69c2d02ffb243054abe8cb36c5d6c12eec5f512b9f43452c0fd84e/wso2/dpdp-accelerator"
---

# dpdp-accelerator
DPDP Accelerator is a collection of artifacts, reference implementations, and documentation that help organizations accelerate the adoption of DPDP Act.

## Build

Requires JDK 11+ (JDK 21+ to run the server), Maven 3.6.3+, and Node.js 20.19+ (or 22.12+) with
npm, all on the `PATH`.

Run from this directory (the repository root) — **not** from `dpdp-accelerator/`,
which only builds the consent portal on its own and skips the accelerator zip:

```sh
mvn clean install
```

This builds the consent portal (frontend + backend WAR) and packages
`wso2-dpdpiam-accelerator-<version>.zip` under
`dpdp-accelerator/accelerators/dpdp-is/target/` — ready to unzip inside
`<IS_HOME>`. See [`docs/content/quickstart.md`](https://github.com/wso2/dpdp-accelerator/blob/HEAD/docs/content/quickstart.md) for
installation.

## Documentation

The `docs/` directory is a [Docusaurus](https://docusaurus.io/) site whose
content lives in `docs/content/`. Run `npm install` then `npm run start` inside
`docs/` to preview it locally.

- [`docs/content/setup-guide.md`](https://github.com/wso2/dpdp-accelerator/blob/HEAD/docs/content/setup-guide.md) — preparing Identity Server and
  accelerator…
