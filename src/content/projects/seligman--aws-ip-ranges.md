---
repo: "seligman/aws-ip-ranges"
name: "aws-ip-ranges"
description: "Tracking the history and size of AWS's ip-ranges.json file"
readmeQualityOk: true
url: "https://github.com/seligman/aws-ip-ranges"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aws"]
stars: 285
forks: 10
openIssues: 1
closedIssues: 0
watchers: 14
contributors: 1
recentReleases: 0
createdAt: "2020-07-14T23:52:32Z"
lastCommitAt: "2026-11-21T11:47:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 70
undervaluedScore: 30
maintainers: ["seligman"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8bc78e2fb4c5b26fb39b7e6cc13118340f9390c0fb91258fd2b124e6ca5e132/seligman/aws-ip-ranges"
---

# AWS's ip-ranges.json

AWS provides a data file showing the current IP ranges their
services use, called [ip-ranges.json](https://ip-ranges.amazonaws.com/ip-ranges.json).
You can read more about the file [here](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html).
If you want to look up an IP address, you can see if it's from any of the cloud providers using [this tool](https://cloud-ips.s3-us-west-2.amazonaws.com/index.html).

This repository tracks changes to that file, and based off a trigger on the SNS 
topic automatically produces this chart showing how what percentage of the 
Internet's IPv4 address space AWS is in control of.  Here's some 
more [information about when different regions](https://github.com/seligman/aws-ip-ranges/blob/HEAD/announces.md) came 
online, and here's an [animation of the history](https://youtu.be/v__lzuvKxU0) 
of the AWS's IP usage.

To get updates as they happen:

[Comparing to other providers](https://github.com/seligman/cloud_sizes), as of 2026-11-21:

| | IPs | Percent |
| --- | ---: | ---: |
| Amazon AWS | 102,105,259 | 2.75792 |
| Microsoft Azure | 65,994,829 | 1.78256 |
| Google Cloud | 19,385,984 | 0.52363 |
