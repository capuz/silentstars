---
repo: "lorenzozanizz/rendersynth"
name: "rendersynth"
description: "A Blender extension for code-less generation of synthetic image datasets for computer vision"
readmeQualityOk: true
url: "https://github.com/lorenzozanizz/rendersynth"
homepage: "https://lorenzozanizz.github.io/rendersynth/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blender", "blender-addon", "coco", "computer-vision", "synthetic-data", "synthetic-dataset-generation", "yolo", "machine-learning"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-15T12:22:43Z"
lastCommitAt: "2026-10-26T09:19:16Z"
lastReleaseAt: "2026-07-23T19:12:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["lorenzozanizz"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf36e5e56156f16df8bf69bb24fd5ce6d6af32cc0cab47d185308228d51a55f1/lorenzozanizz/rendersynth"
---

#   

A Blender extension for generating synthetic datasets through procedural randomization and batch rendering. This addon enables users to create diverse image datasets with controlled variations in object placement, material properties, lighting conditions, and scene parameters.
Additionally, the extensions supports a preview functionality which allows to inspect the output of the pipeline and the computed labels directly inside Blender.

The extension is intended for low to medium sized computer vision products, which benefit more from ease of generation rather than the efficiency and generality of tools like Blenderproc. 

## Overview
  

The Generator provides a building-block system for defining randomization pipelines within Blender. Users can specify how objects, materials, and lighting conditions should vary across multiple renders, then automatically output images with corresponding metadata suitable for computer vision training datasets.
User can also specify named classes and assign classes to blender objects. Multiple objects can be grouped together to form multi-object entities which the extension will classify as a single object. 

## Features

-…
