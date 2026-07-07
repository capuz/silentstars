---
repo: "rgl/terraform-libvirt-ubuntu-example"
name: "terraform-libvirt-ubuntu-example"
description: "example on how to launch a ubuntu vm using terraform-libvirt"
readmeQualityOk: true
url: "https://github.com/rgl/terraform-libvirt-ubuntu-example"
language: "Shell"
languages: ["Shell", "HCL"]
languagePcts: [45, 31]
topics: ["terraform", "libvirt", "example"]
stars: 15
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-10-06T20:41:41Z"
lastCommitAt: "2026-07-07T06:07:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 55
undervaluedScore: 40
maintainers: ["rgl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f9a45c347c07916486f3a9d81001db0fec2dabf57b52ecfbc59a241be128075/rgl/terraform-libvirt-ubuntu-example"
---

# Usage (Ubuntu 24.04 host)

Create and install the [base Ubuntu 24.04 UEFI vagrant box](https://github.com/rgl/ubuntu-vagrant).

Install the dependencies:

* [Visual Studio Code](https://code.visualstudio.com).
* [Dev Container plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

Open this directory with the Dev Container plugin.

Open `bash` inside the Visual Studio Code Terminal.

Create the infrastructure:

```bash
export CHECKPOINT_DISABLE=1
export TF_LOG=TRACE
export TF_LOG_PATH="$PWD/terraform.log"
terraform init
terraform plan -out=tfplan
time terraform apply tfplan
```

**NB** if you have errors alike `Could not open '/var/lib/libvirt/images/terraform-ubuntu-example-root.img': Permission denied'` you need to reconfigure libvirt by setting `security_driver = "none"` in `/etc/libvirt/qemu.conf` and restart libvirt with `sudo systemctl restart libvirtd`.

Show information about the libvirt/qemu guest:

```bash
virsh dumpxml terraform-ubuntu-example
virsh qemu-agent-command terraform-ubuntu-example '{"execute":"guest-info"}' --pretty
virsh qemu-agent-command terraform-ubuntu-example '{"execute":"guest-network-get-interfaces"}'…
