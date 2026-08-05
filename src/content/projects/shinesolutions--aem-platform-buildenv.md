---
repo: "shinesolutions/aem-platform-buildenv"
name: "aem-platform-buildenv"
description: "Docker-based environment for building AEM OpenCloud libraries"
readmeQualityOk: true
url: "https://github.com/shinesolutions/aem-platform-buildenv"
language: "Puppet"
languages: ["Puppet", "Makefile", "Shell"]
languagePcts: [43, 25, 25]
topics: ["aem", "aem-opencloud", "docker", "ci-cd"]
stars: 5
forks: 9
openIssues: 2
closedIssues: 2
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2018-03-31T13:35:34Z"
lastCommitAt: "2026-08-05T06:08:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 78
maintainers: ["cliffano", "shinesolutions-opensource", "cliffano-shn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d60b2ac3bb6c48d34372a920b3c388e230c374b865afbc128679b209d896f700/shinesolutions/aem-platform-buildenv"
---

# AEM Platform BuildEnv

AEM Platform BuildEnv is a Docker-based environment for building [AEM OpenCloud repositories](https://github.com/topics/aem-opencloud). The Docker image already contains the software required to run all build targets from those repositories.

## Installation

Pull AEM Platform BuildEnv Docker image from Docker Hub:

```shell
docker pull shinesolutions/aem-platform-buildenv
```

Or alternatively, you can create the Docker image:

```shell
# Install Hashicorp packer tool for your OS
https://www.packer.io/intro/getting-started/install.html

# Install Ruby bundler module (may require sudo)
gem install bundler --conservative

git clone https://github.com/shinesolutions/aem-platform-buildenv

cd aem-platform-buildenv
make deps
make docker-base
```

## Usage

Run a Docker container from the repository directory:
(you might want to create an alias for the lengthy command below)

```shell
docker run \
    --rm \
    --workdir /opt/workspace \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v `pwd`:/opt/workspace \
    -i -t shinesolutions/aem-platform-buildenv
```

You can also run the command without `--rm` flag if you want to keep the container along with…
