---
repo: "podman-desktop/extension-podman-quadlet"
name: "extension-podman-quadlet"
description: "Manage, create Podman Quadlets in Podman Desktop"
readmeQualityOk: true
url: "https://github.com/podman-desktop/extension-podman-quadlet"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 12
forks: 13
openIssues: 41
closedIssues: 121
watchers: 9
contributors: 14
recentReleases: 0
createdAt: "2024-12-06T13:37:14Z"
lastCommitAt: "2026-09-14T09:12:07Z"
lastReleaseAt: "2025-01-08T13:24:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 74
maintainers: ["dependabot[bot]", "benoitf", "axel7083"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d57350c11230b431cd5f2e6a19e79638bdc4b47017a1b8c61d71f93501e4891/podman-desktop/extension-podman-quadlet"
discussionCount: 0
---

# Podman Desktop Quadlet Extension

## Overview

## Install

You can install the Podman Quadlet Extension from the extension page and use `ghcr.io/podman-desktop/pd-extension-quadlet:latest`. See the instruction on [How to install an extension](https://podman-desktop.io/docs/extensions/install)

### Requirements

- Podman version 5 and above

## Generating Quadlets

This extension will allow you to list, generate, enable and delete podman quadlet in a given Podman Machine.

### Containers

You can generate Quadlet from the Podman Desktop containers page, as visible bellow

Once generated, the output can be edited before being loaded into the Podman Machine

### Compose

The extension has a partial support for create quadlet from an existing compose specification

> Podman Desktop group containers in the same compose project. 
> This allows us to determine which spec has been used by looking at the `com.docker.compose.project.config_files` containers label

Two type of Quadlet can be generated from a compose specification, `Container`, `Kube` or `Pod`
