---
repo: "cloudfoundry/bosh-linux-stemcell-builder"
name: "bosh-linux-stemcell-builder"
description: "BOSH Ubuntu Linux stemcells "
readmeQualityOk: true
url: "https://github.com/cloudfoundry/bosh-linux-stemcell-builder"
language: "Ruby"
languages: ["Ruby", "Shell"]
languagePcts: [56, 37]
stars: 50
forks: 120
openIssues: 12
closedIssues: 151
watchers: 35
contributors: 129
recentReleases: 0
createdAt: "2017-01-28T00:44:19Z"
lastCommitAt: "2026-08-29T10:22:33Z"
lastReleaseAt: "2017-08-04T22:57:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 57
maintainers: ["bosh-admin-bot", "selzoc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0390dedccecf9508e3b3c2c4f69e33b082f163428918c8f01f8c6110a106afc/cloudfoundry/bosh-linux-stemcell-builder"
discussionCount: 1
---

# BOSH Linux Stemcell Builder

This repo contains tools for creating BOSH stemcells. A stemcell is a bootable
disk image that is used as a template by a BOSH Director to create VMs.

## Quick Start: Building a Stemcell Locally

```bash
export short_name="jammy"

git clone git@github.com:cloudfoundry/bosh-linux-stemcell-builder.git
cd bosh-linux-stemcell-builder
git checkout ubuntu-${short_name}
mkdir -p tmp
docker build \
   --platform linux/amd64 \
   --build-arg SYFT_VERSION=v1.42.3 \
   -t bosh/os-image-stemcell-builder:${short_name} \
   ci/docker/os-image-stemcell-builder/
docker run \
   --platform linux/amd64 \
   --privileged \
   -v "$(pwd):/opt/bosh" \
   --workdir /opt/bosh \
   --user=1000:1000 \
   -it \
   bosh/os-image-stemcell-builder:${short_name}

# You're now in the Docker container
pushd bosh-stemcell
  bundle install
popd

 # build OS image
bundle exec rake stemcell:build_os_image[ubuntu,${short_name},${PWD}/tmp/ubuntu_base_image.tgz]

 # build vSphere stemcell
bundle exec rake stemcell:build[vsphere,esxi,ubuntu,${short_name},${PWD}/tmp/ubuntu_base_image.tgz]
```

When building a vSphere stemcell, you must download `VMware-ovftool-*.bundle`
and place it in the…
