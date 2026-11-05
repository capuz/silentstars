---
repo: "JarryShaw/PyPCAPKit"
name: "PyPCAPKit"
description: "Python-based Comprehensive Network Packet Analysis Library"
readmeQualityOk: true
url: "https://github.com/JarryShaw/PyPCAPKit"
homepage: "https://jarryshaw.github.io/PyPCAPKit/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["computer-networking", "pcap-analyzer", "pcap-parser", "network", "network-security", "network-tools", "packet-analyser", "packet-analysis", "packet-analyzer", "packet-crafting"]
stars: 274
forks: 40
openIssues: 1
closedIssues: 1214
watchers: 12
contributors: 5
recentReleases: 0
createdAt: "2017-11-07T05:41:56Z"
lastCommitAt: "2026-11-05T08:02:29Z"
lastReleaseAt: "2019-03-07T11:47:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 42
maintainers: ["JarryShaw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/645b924fc535a4962533fa76f582b9bc2c4d19de6f3e9943be3f4a017a06464d/JarryShaw/PyPCAPKit"
fundingLinks: ["GITHUB:https://github.com/JarryShaw", "PATREON:https://patreon.com/jarryshaw", "TIDELIFT:https://tidelift.com/funding/github/pypi/pypcapkit"]
discussionCount: 16
---

# PyPCAPKit -- Comprehensive Network Packet Analysis Library

> For technical and maintenance information, see the
> **[Official Documentation](https://jarryshaw.github.io/PyPCAPKit/)**.

PyPCAPKit is an open-source Python library for parsing, constructing and analysing
network packets and [PCAP](https://en.wikipedia.org/wiki/Pcap) files, with
[DictDumper](https://github.com/JarryShaw/DictDumper) as its output dumper.

Compared with [Scapy](https://scapy.net), [DPKT](https://dpkt.readthedocs.io) and
[PyShark](https://kiminewt.github.io/pyshark), `pcapkit` reports more detail about each
packet through a more *Pythonic* interface. Where that depth is not needed, the same
interface drives those tools as third-party extraction engines.

Requires **Python 3.8** or later. CI supports 3.11 to 3.15, and tests the end-of-life
3.8 to 3.10 without letting a failure block anything.

## Installation

```shell
pip install pypcapkit
```

Or from a clone, for unreleased changes and development:

```shell
git clone https://github.com/JarryShaw/PyPCAPKit.git
cd PyPCAPKit
pip install -e .
```

The extraction engines and plug-ins are optional extras:

```shell
pip install pypcapkit[DPKT]         # or…
