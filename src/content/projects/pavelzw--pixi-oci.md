---
repo: "pavelzw/pixi-oci"
name: "pixi-oci"
description: "Build OCI images from pixi environments"
readmeQualityOk: true
url: "https://github.com/pavelzw/pixi-oci"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 9
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-10-15T16:27:52Z"
lastCommitAt: "2026-11-27T15:41:20Z"
lastReleaseAt: "2026-11-06T12:13:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 36
maintainers: ["pavelzw", "octo-sts[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/40143b2dd2f64227a1b87ceb8cf853006a6b5852762aaae7e1f3d46f3703d840/pavelzw/pixi-oci"
---

# pixi-oci

Build OCI container images from [pixi](https://pixi.sh) environments, without Docker, BuildKit or any other daemon.

`pixi-oci` reads `pixi.toml` and `pixi.lock`, installs the locked conda packages of one environment into a prefix, slices that prefix into cacheable layers, stacks them on a base image pulled straight from a registry and writes an OCI image tarball.

It replaces the usual multi-stage Dockerfile dance (`pixi install` → `pixi shell-hook` → `COPY --from=build`) with a single command and a few lines of configuration.

## Usage

```shell
pixi-oci build
pixi-oci build --manifest-path app
pixi-oci build -e prod -p linux-aarch64 -t myapp:1.2.3 -o myapp.tar
pixi-oci build -p linux-64 -p linux-aarch64
pixi-oci build --format oci-dir -o ./myapp
pixi-oci build --inject dist/myapp-1.0.0-pyh4616a5c_0.conda
pixi-oci build --skip myapp --inject dist/myapp-1.0.0-pyh4616a5c_0.condapixi-oci build server worker   # only these of [tool.pixi-oci.images]
```

The tarball is an OCI image layout that also carries a docker-archive `manifest.json`, so every common tool accepts it:
