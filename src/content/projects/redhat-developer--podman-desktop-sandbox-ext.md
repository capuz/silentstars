---
repo: "redhat-developer/podman-desktop-sandbox-ext"
name: "podman-desktop-sandbox-ext"
description: "OpenShift Sandbox integration for podman desktop"
readmeQualityOk: true
url: "https://github.com/redhat-developer/podman-desktop-sandbox-ext"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 20
forks: 13
openIssues: 21
closedIssues: 95
watchers: 15
contributors: 133
recentReleases: 1
createdAt: "2023-03-22T21:14:09Z"
lastCommitAt: "2026-10-05T10:46:36Z"
lastReleaseAt: "2026-07-31T22:51:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 65
maintainers: ["dependabot[bot]", "dgolovin", "benoitf"]
openGraphImageUrl: "https://opengraph.githubassets.com/aceda5ad61052261c5b16099ced88bc5f3b2a4b1a9845092a1be02c3247ccc5d/redhat-developer/podman-desktop-sandbox-ext"
---

# Podman Desktop Developer Sandbox Extension

This extension puts you to just few clicks away from deploying your application to [Developer Sandbox](https://developers.redhat.com/developer-sandbox), a 30 days no cost shared cluster on [OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift).
After few simple configuration steps the extension allows you to push an image to Sandbox internal image registry, so you can create and start containers from that image in OpenShift cluster using Podman Desktop UI.

# Usage

Once installed, you can find the Sandbox resource added to the Resources settings page.

To configure the Kubernetes context for your sandbox, click the `Create new...` button to open the sandbox Kubernetes context configuration form. Use the default context name `dev-sandbox-context`, or change it to any name you prefer, and then click `Create`. If you have not yet signed in to your Red Hat Developer account, you will see a request to sign in with Red Hat SSO.

After that, you should see a new sandbox connection in Running state in the Sandbox section. If you see the message `Developer Sandbox account verification is required`, follow the…
