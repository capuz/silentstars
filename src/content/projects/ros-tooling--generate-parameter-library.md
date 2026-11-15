---
repo: "ros-tooling/generate_parameter_library"
name: "generate_parameter_library"
description: "Declarative ROS 2 Parameters"
readmeQualityOk: true
url: "https://github.com/ros-tooling/generate_parameter_library"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["ros", "ros2"]
stars: 389
forks: 83
openIssues: 30
closedIssues: 108
watchers: 14
contributors: 57
recentReleases: 0
createdAt: "2022-07-20T16:35:18Z"
lastCommitAt: "2026-11-15T08:20:12Z"
lastReleaseAt: "2025-01-13T23:30:38Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 86
undervaluedScore: 32
maintainers: ["christophfroehlich", "Daniiiil1", "facontidavide"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe7c0d59d405b5d74ee5b1990bec723299de7df15a3880840c175d36e2021181/ros-tooling/generate_parameter_library"
---

# generate_parameter_library
Generate C++ or Python code for ROS 2 parameter declaration, getting, and validation using declarative YAML.
The generated library contains a C++ struct with specified parameters.
Additionally, dynamic parameters and custom validation are made easy.

## TOC
- [Killer Features](#killer-features)
- [Basic Usage](#basic-usage)
- [Detailed Documentation](#detailed-documentation)
- [FAQ](#faq)
- [Build status](#build-status)

## Killer Features
* Declarative YAML syntax for ROS 2 Parameters converted into C++ or Python struct
* Declaring, Getting, Validating, and Updating handled by generated code
* Dynamic ROS 2 Parameters made easy
* Custom user-specified validator functions
* Automatically create documentation of parameters

## Basic Usage
1. [Create YAML parameter codegen file](#create-yaml-parameter-codegen-file)
2. [Add parameter library generation to project](#add-parameter-library-generation-to-project)
3. [Use generated struct in project source code](#use-generated-struct-in-project-source-code)

### Create yaml parameter codegen file
Write a yaml file to declare your parameters and their attributes.

**src/turtlesim_parameters.yaml**
```yaml…
