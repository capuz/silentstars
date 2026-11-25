---
repo: "gportay/dosh"
name: "dosh"
description: "Docker Shell CLI plugin"
readmeQualityOk: true
url: "https://github.com/gportay/dosh"
homepage: "https://gportay.github.io/dosh"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
topics: ["docker-scripts", "dosh", "docker", "podman", "cli", "plugin"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-08-18T21:26:14Z"
lastCommitAt: "2026-11-25T03:14:31Z"
lastReleaseAt: "2026-01-12T05:10:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 79
maintainers: ["gportay"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ecf4c2496e7ed677bb5a3d9e406b84ba57c88e9b429a0e81c9a62f0ed923a04/gportay/dosh"
---

# Docker Shell

## TL;DR;

[dosh][dosh(1)] is a bash script providing a shell CLI to *docker-run(1)*.

It runs a user shell in a container built from a Dockerfile, with the working
directory bind mounted.

In short, `dosh` does...

	docker run --rm [--tty] [--interactive] "--volume=$PWD:$PWD:rw" "--user=$USER" "--entrypoint=$SHELL" IMAGE [SHELL_ARGS]

... with a little more magic!

__Important__: [dosh][dosh(1)] reads the Dockerfile from the subdirectory
`docker/`, and it falls back to the current working directory for historical
reason. docker-build sends a lot of data to the Docker daemon depending on the
contents of the Dockerfile's parent directory. dosh does its best to limit the
context sent to the docker daemon by doing a very limited magic if the
Dockerfile contains ADD or COPY instructions to send local files. Consider
using subdirectory `docker/` to disable this very limited feature as dosh does
not fully implement a Dockerfile parser as defined in the [Dockerfile]
reference.

## NAME

[dosh][dosh(1)] - run a user shell in a container with working directory bind
mounted
