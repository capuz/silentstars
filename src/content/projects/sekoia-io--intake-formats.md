---
repo: "SEKOIA-IO/intake-formats"
name: "intake-formats"
description: "The intake formats supported by SEKOIA.IO"
readmeQualityOk: true
url: "https://github.com/SEKOIA-IO/intake-formats"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 24
forks: 72
openIssues: 7
closedIssues: 9
watchers: 9
contributors: 118
recentReleases: 0
createdAt: "2021-06-03T14:25:43Z"
lastCommitAt: "2026-08-28T14:36:45Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["mchupeau-sk", "lvoloshyn-sekoia", "clement-burtscher-sekoia"]
openGraphImageUrl: "https://opengraph.githubassets.com/d528366365d92ac2dd37634b997720ebcc8f2e3a4a652f7e5ca00bbd85a03c12/SEKOIA-IO/intake-formats"
---

# Intake Parsers

**Welcome to the Sekoia.io Intakes repository!**

This repository contains all the community parsers of Sekoia.io. Parsers are fundamental parts of a cyber analysis and detection process. They extract useful information conveyed by events and make them understandable to decision-making processes. A poor quality parser does not allow informed decision making. Conversely, a good quality parser extracts and normalizes all the useful information present in an event to maximizes its decision making.

We have created this space to ensure the quality of our parsers and allow our users to participate in their development.
Contact support@sekoia.io for questions and feedback.

## Example

```yaml
name: my-intake
pipeline:
  - name: parsed_event
    external:
      name: json.parseJSON
  - name: network
    filter: '{{parsed_event.message.log_type == "network"}}'
  - name: file
    filter: '{{parsed_event.message.log_type == "file"}}'
stages:
  network:
    actions:
      - set:
          destination.ip: "{{parsed_event.message.traffic.target}}"
          source.ip: "{{parsed_event.message.traffic.source}}"
  file:
    actions:
      - set:
          file.name:…
