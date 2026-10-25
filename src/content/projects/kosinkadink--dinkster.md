---
repo: "Kosinkadink/Dinkster"
name: "Dinkster"
description: "Dinkster: native inference engine, node packages and server"
readmeQualityOk: true
url: "https://github.com/Kosinkadink/Dinkster"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dinkster", "inference", "pytorch"]
stars: 5
forks: 0
openIssues: 58
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-18T12:49:25Z"
lastCommitAt: "2026-10-25T09:01:51Z"
lastReleaseAt: "2026-09-22T15:34:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 45
maintainers: ["Kosinkadink"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bb393d733b95370c85a4670efab06412e3956fe3e6b5fadcd475edc6a2119b2/Kosinkadink/Dinkster"
---

# Dinkster

Dinkster is a pre-release local engine and browser editor for image, video,
audio, and model-training workflows. Workflows are node graphs executed by
isolated packs, with typed values, content-addressed caching, managed memory,
and optional remote workers. Model execution is supplied by the pinned
`dinkster_inference` package. Dinkster can import existing ComfyUI workflows; an
optional ComfyUI checkout adds compatibility for node packs that have not been
ported.

To run Dinkster from source, clone Dinkster and Dinkster-Frontend beside each
other, build the frontend, install the locked Python workspace, and launch:

```sh
cd Dinkster-Frontend
pnpm install --frozen-lockfile
pnpm --filter @dinkster/app build
cd ../Dinkster
uv sync --python 3.12 --all-packages --frozen
uv run dinkster setup
uv run dinkster
```

The editor opens at `http://127.0.0.1:3639`. See the
[browser editor quickstart](https://github.com/Kosinkadink/Dinkster/blob/HEAD/docs/quickstart.md) for model folders, execution
environments, and the first-image walkthrough.

Packs are independently installable Python distributions with a
`dinkster-pack.toml` manifest. A pack declares its schemas, runtime entry…
