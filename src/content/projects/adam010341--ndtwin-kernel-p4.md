---
repo: "Adam010341/NDTwin-Kernel-P4"
name: "NDTwin-Kernel-P4"
description: "Network digital twin kernel with P4/BMv2 data-plane support, via a P4Runtime proxy behind Ryu's northbound API."
readmeQualityOk: true
url: "https://github.com/Adam010341/NDTwin-Kernel-P4"
homepage: "https://ndtwin.org"
language: "Shell"
languages: ["Shell", "Python", "C++"]
languagePcts: [37, 34, 28]
topics: ["bmv2", "network-digital-twin", "open-vswitch", "p4", "p4runtime", "sdn", "cpp", "openflow"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-22T03:16:06Z"
lastCommitAt: "2026-11-25T13:19:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Adam010341"]
openGraphImageUrl: "https://opengraph.githubassets.com/a58dee80403e53df3bddb9444d387ce36e86f25219018dbe13654e76f6053551/Adam010341/NDTwin-Kernel-P4"
---

# NDTwin-Kernel-P4

> **Note**
>
> This is work in progress. It is published so that others can try it and read the code, not as
> a release, and its interfaces may still change.

[NDTwin](https://ndtwin.org) is a network digital twin. Its kernel keeps a live picture of a
network (the topology, the flows, how busy each link is, which switches are powered on) and
offers it through one REST API. An application built on that API can watch the network, decide
on a change and apply it, without being written for one particular kind of switch.

NDTwin was built for OpenFlow switches under a Ryu controller. **This repository adds a P4 data
plane.** The same kernel and the same applications now also run on a fabric of bmv2 switches,
including one that runs a P4 program you wrote yourself.

*Figure from the NDTwin project ([ndtwin-lab](https://github.com/ndtwin-lab), <https://ndtwin.org>), used with attribution.*

This repository is the right-hand path of the figure. The box labelled *P4 proxy agent* is, in
effect, the controller of the bmv2 switches, and the rest is what it takes to make a bmv2 fabric
look to the kernel like the network it already knows.
