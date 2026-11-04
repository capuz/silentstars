---
repo: "HLudmann/imt-secure-hist"
name: "imt-secure-hist"
description: "Projet DataProtec : Content-Based Image Retrieval in Homomorphic Encryption Domain"
readmeQualityOk: true
url: "https://github.com/HLudmann/imt-secure-hist"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-03-13T09:25:55Z"
lastCommitAt: "2026-11-04T13:05:34Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 40
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18ffc2bbb2a46d10f0e1c712278f8ae29752b16b4942d6dc4e637f64347f306b/HLudmann/imt-secure-hist"
---

# **Content-Based Image Retrieval in Homomorphic Encryption Domain**
Joseph FACELINA \
HugoLudmann

## **Prerequisites**

In order to use the program, you need to install the following python libraries :
- gmpy2
- pillow
- tqdm

Pillow and tqdm can be installed with pip but for gmpy2 it's a bit more complicated since the version available on the packet manager has an issue with `random_state`.

To install gmpy2, clone the github repo (make sure to checkout the 2.0.9 branch) and follow the installation instruction. You'll need GMP beforehand.

## **Usage**

To use the program you need to feed it reference pixels and an image.

It comes with a help :
```sh
$ ./plot_histogram.py -h    
usage: SecHPlot [-h] -r REF_POINTS -i IMAGE [-j] [--unsecure]

Plot secured histogram of an image.

optional arguments:
  -h, --help            show this help message and exit
  -r REF_POINTS, --ref_points REF_POINTS
                        Filepath for the points of reference (json format).
  -i IMAGE, --image IMAGE
                        Filepath of the image to compute (json or png).
  -j, --json            Need this options if using a json for the image.
  --unsecure            To compute data…
