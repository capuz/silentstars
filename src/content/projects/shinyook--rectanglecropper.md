---
repo: "shinyook/RectangleCropper"
name: "RectangleCropper"
description: "Crop object into rectangular shape from image with auto detection"
readmeQualityOk: true
url: "https://github.com/shinyook/RectangleCropper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["image-cropper", "image-crop"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-09-11T12:17:49Z"
lastCommitAt: "2026-11-01T10:44:29Z"
lastReleaseAt: "2021-09-11T15:35:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 42
maintainers: ["shinyook"]
openGraphImageUrl: "https://opengraph.githubassets.com/05f48e3f7a6c200549798a0fbfe3154cf9d81452a132ddec69426b44cf56343f/shinyook/RectangleCropper"
---

# RectangleCropper

## Overview

`RectangleCropper` is a Python library that crops images into rectangles. The image to be cropped is detected through the rule base with pixel search algorithm.
For example, the image below shows a bestseller in a bookstore, and you want to crop the image of the book. 
RectangleCropper automatically detects the object area and crop it!
Just pass the image to the RectangleCropper and it will be cropped like magic.

#### 1. BookStore

#### 2. OpenMarket

#### 3. NewPaper

#### 4. WebSite

#### 5. Google Image 

There are many services that use square-based images. This library was created by combining a general rule-based algorithm and a pixel-based search algorithm, not advanced technologies such as computer vision.
This library shows the best performance when the background color is one color or two or three. 
So it doesn't have enough ability to cover the edge case. However, by applying this rule-based algorithm, 
it became possible to apply rules according to the service. For example, 
you can input guidelines for the size of the image to be cropped, and finely adjust the critical point required when cropping the image.

## Requirements

- Python…
