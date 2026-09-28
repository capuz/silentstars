---
repo: "guardian/amigo"
name: "amigo"
description: "AMIgo: An AMI bakery"
readmeQualityOk: true
url: "https://github.com/guardian/amigo"
homepage: "https://amigo.gutools.co.uk/"
language: "Scala"
languages: ["Scala"]
languagePcts: [69]
topics: ["production"]
stars: 56
forks: 22
openIssues: 17
closedIssues: 130
watchers: 42
contributors: 97
recentReleases: 0
createdAt: "2016-02-12T17:51:28Z"
lastCommitAt: "2026-09-28T10:05:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 52
maintainers: ["gu-scala-steward-public-repos[bot]", "akash1810", "jorgeazevedo"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a6847c6c9272930a3dfc977e1119d7182337ead22419e28325d9a8bb73a3150/guardian/amigo"
---

# AMIgo

AMIgo is an application for baking AMIs (Amazon Machine Images).
For information on how to use Amigo baked AMIs with Riffraff check [here](https://github.com/guardian/amigo/blob/HEAD/docs/riffraff-integration.md).
This project is built with GitHub Actions.

## Terminology

* A __base image__ is the source AMI to use as the basis for an image. For example you might have an "Ubuntu Wily" base image.

* A __role__ is something installed or configured on the machine. For example if you want your machine to have a JVM, Node and nginx pre-installed, you would assign the corresponding roles to your image. Currently roles are implemented as Ansible roles.

* A __recipe__ is a description of how to bake your AMI. Making a recipe consists of choosing a base image and deciding which roles to assign. For example you might have a recipe that builds an image based on Ubuntu Wily and installs a JVM, Node and nginx.

* A __bake__ is a single execution of a recipe. The result of a bake is an AMI.

## Implementation

AMIgo is implemented as a Play application. It uses Packer and Ansible to bake AMIs.

### AMI baking process

Roughly, AMIgo does the following:

1. Dynamically generate an…
