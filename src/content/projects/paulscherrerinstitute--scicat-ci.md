---
repo: "paulscherrerinstitute/scicat-ci"
name: "scicat-ci"
description: "CI related information to deploy SciCat"
readmeQualityOk: true
url: "https://github.com/paulscherrerinstitute/scicat-ci"
language: "Python"
languages: ["Python"]
languagePcts: [51]
stars: 6
forks: 1
openIssues: 13
closedIssues: 8
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2022-02-16T12:34:00Z"
lastCommitAt: "2026-10-22T08:51:50Z"
lastReleaseAt: "2022-05-05T13:06:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 65
maintainers: ["renovate[bot]", "ninouGx", "minottic"]
openGraphImageUrl: "https://opengraph.githubassets.com/6362e302c471e2929fbf511db97cc07f9a58807b036a22db38837eb46cbe9b3a/paulscherrerinstitute/scicat-ci"
---

# scicat-ci

CI and deployment configuration to run SciCat at PSI.

For a simpler setup to run and develop the SciCat core components locally, see the
[SciCat Live](https://github.com/SciCatProject/scicatlive) project.

## Repo structure

```
.
├── helm/                    deployment config for every component, see helm/README.md
│   ├── helmfile-common.yaml   shared defaults and the build hook
│   └── configs/<component>/   one folder per component, name = helm release name
├── proposals/               source of the proposals component, built from here
├── scicat-to-pss/           source of the scicat-to-pss component, built from here
├── curation/                notebooks and scripts used to curate data
└── .github/
    ├── workflows/             deploy.yml, lint.yml and their reusable building blocks
    └── actions/                deploy-helmfile, deploy-helm, open-ssh-tunnel
```

Most components (backend, frontend, search-api, ...) live in their own repository
under the [SciCatProject organisation](https://github.com/SciCatProject) and are
built from a published image or from a commit sha, as configured in
`helm/configs/<component>`. A few components (`proposals`,…
