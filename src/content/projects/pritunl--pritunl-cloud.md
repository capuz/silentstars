---
repo: "pritunl/pritunl-cloud"
name: "pritunl-cloud"
description: "Private cloud virtualization platform"
readmeQualityOk: true
url: "https://github.com/pritunl/pritunl-cloud"
homepage: "https://cloud.pritunl.com"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [61, 37]
topics: ["cloud", "hypervisior", "qemu", "kvm", "private-cloud"]
stars: 152
forks: 31
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 1
recentReleases: 0
createdAt: "2018-02-08T07:01:53Z"
lastCommitAt: "2026-09-19T08:13:42Z"
lastReleaseAt: "2019-01-08T08:37:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 42
maintainers: ["zachhuff386"]
openGraphImageUrl: "https://opengraph.githubassets.com/0001f4be79421799ec06a62212a39c96df4ca8c1d3ea1d8ca545e1e062005037/pritunl/pritunl-cloud"
---

# pritunl-cloud: declarative kvm virtualization

[Pritunl-Cloud](https://cloud.pritunl.com) is a declarative KVM virtualization
platform with shell and python based live updating templates. Documentation
and more information can be found at
[docs.pritunl.com](https://docs.pritunl.com/kb/cloud)

## Install from Source

```bash
# Install Required Tools
sudo dnf -y install git-core iptables net-tools ipset ipvsadm xorriso qemu-kvm qemu-img swtpm-tools

sudo rm -rf /usr/local/go
wget https://go.dev/dl/go1.26.5.linux-amd64.tar.gz
echo "5c2c3b16caefa1d968a94c1daca04a7ca301a496d9b086e17ad77bb81393f053 go1.26.5.linux-amd64.tar.gz" | sha256sum -c - && sudo tar -C /usr/local -xf go1.26.5.linux-amd64.tar.gz
rm -f go1.26.5.linux-amd64.tar.gz

tee -a ~/.bashrc << EOF
export GOPATH=\$HOME/go
export GOROOT=/usr/local/go
export PATH=/usr/local/go/bin:\$PATH
EOF
source ~/.bashrc

# Install MongoDB
sudo dnf -y install podman

git clone https://github.com/pritunl/toolbox.git
cd toolbox/mongodb-container
sudo podman build --rm -t mongo .
cd

sudo mkdir /var/lib/mongo
sudo chown 277:277 /var/lib/mongo
sudo tee /etc/containers/systemd/mongodb-podman.container << EOF
[Unit]
Description=MongoDB Podman…
