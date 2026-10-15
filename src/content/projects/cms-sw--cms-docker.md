---
repo: "cms-sw/cms-docker"
name: "cms-docker"
description: "Docker files for various cms services and tasks"
readmeQualityOk: true
url: "https://github.com/cms-sw/cms-docker"
language: "Python"
languages: ["Python", "Perl", "Dockerfile"]
languagePcts: [31, 25, 24]
stars: 18
forks: 27
openIssues: 0
closedIssues: 231
watchers: 5
contributors: 23
recentReleases: 0
createdAt: "2014-06-28T07:26:01Z"
lastCommitAt: "2026-10-15T08:32:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 76
maintainers: ["cmsbuild", "smuzaffar"]
openGraphImageUrl: "https://opengraph.githubassets.com/7957f3a394ac65bff5d47d95602f868172327dd3974d1c24f1f083794afb5e47/cms-sw/cms-docker"
---

### These are the docker files for CMS Development Tools services.

Notice that since these are in a public repository you should not expose any
details of the CMS infrastructure and have everything configurable via an
environment variable. Actual values of the environment variables are maintained
somewhere else. 

### Automatic docker image build

In order to automatically build and deploy images to our [Docker Hub](https://hub.docker.com/u/cmssw/), 
create a sub-directory which should contain ( e.g. see https://github.com/cms-sw/cms-docker/tree/master/slc6 )
 - config.yaml which defines the images you want to build
 - Dockerfile which should contains the details of how to build the container
