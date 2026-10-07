---
repo: "NethServer/nethsecurity-ui"
name: "nethsecurity-ui"
description: "Vue 3 + Tailwind CSS user interface for NethSecurity"
readmeQualityOk: true
url: "https://github.com/NethServer/nethsecurity-ui"
homepage: "https://nethserver.github.io/nethsecurity"
language: "Vue"
languages: ["Vue"]
languagePcts: [90]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 19
recentReleases: 0
createdAt: "2023-06-01T07:32:33Z"
lastCommitAt: "2026-10-07T10:30:27Z"
lastReleaseAt: "2024-10-02T10:48:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 67
maintainers: ["Tbaile", "m-dilorenzi", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6e8dd67cd0f33a959827cbc0d050df6277b87b495420a4c72f565a81c9b48ea/NethServer/nethsecurity-ui"
---

# nethsecurity-ui

This repository contains user interface for [NethSecurity](https://github.com/NethServer/nethsecurity) and [NethSecurity Controller](https://github.com/NethServer/nethsecurity-controller).

Purpose of each interface:

- **Standalone**: it's provided when connecting to a NethSecurity unit
- **Controller**: allows you to manage multiple NethSecurity units

## Contributing

See [the contributing guide](https://github.com/NethServer/nethsecurity-ui/blob/HEAD/CONTRIBUTING.md) for detailed instruction on how to get started.

Contributing it's not a matter of coding, please feel free to open issues or discussions if you need anything! Please be aware that off-topic conversations will be closed.

### Build

To run a build, it's not suggested to run `npm run build` inside the development instance. Instead, a containerized build is provided to ease this process, this will only need `podman` to be installed.

You can just execute:

```bash
./build.sh
```

and that's all you need, if build passes you'll find the build in `./dist`, placed inside the root directory of the project.

Alternatively, you can fetch the latests builds from the "Artifacts" section of the [GitHub…
