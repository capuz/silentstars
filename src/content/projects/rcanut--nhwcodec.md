---
repo: "rcanut/nhwcodec"
name: "nhwcodec"
description: "NHW : A Next-Generation Image Compression Codec"
readmeQualityOk: true
url: "https://github.com/rcanut/nhwcodec"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["nhw", "wavelet", "image-compression", "image-processing", "entropy-coding", "lossy-compression", "codec"]
stars: 79
forks: 10
openIssues: 3
closedIssues: 2
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2012-12-01T12:04:58Z"
lastCommitAt: "2026-10-25T22:10:46Z"
lastReleaseAt: "2022-11-04T19:44:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 36
maintainers: ["rcanut"]
openGraphImageUrl: "https://opengraph.githubassets.com/efe92ecb45e8b48ab5c72b7555f94ec9ab92b98d6011bb0ef4f2b5bff2acfd84/rcanut/nhwcodec"
---

NHW Image Codec
============

A Next-Generation Free Open-Source Image Compression Codec

The NHW codec is an experimental codec that compresses 24bit bitmap color images using notably a wavelet transform.

To work with any image resolution, it uses 512x512 tiling of a NHW core.

-Compression is not optimal for now.-

The NHW codec presents some innovations and a unique approach: more image neatness/sharpness, and aims to be competitive with current codecs like for example AVIF.

Another advantage of the NHW codec is that it has a high speed, making it suitable for mobile, embedded devices.

How to compile?
============

1) With mingw/gcc

`$ cd decoder && gcc *.c -O3 -o nhw-dec`

`$ cd encoder && gcc *.c -O3 -o nhw-enc`

To enable multithreading (OpenMP), add the compiler flag:  `-fopenmp` (gcc/clang) or `/openmp` (MSVC)

2) With CMake

`$ mkdir build && cd build && cmake ../ && make`

To encode an image (512x512 bitmap color image for now):

encoder options: quality settings: -q[1..23] {default: 20}

example:

`$ nhw-enc image.bmp image.nhw`

`$ nhw-enc -q10 image.bmp image.nhw`

To decode:

`$ nhw-dec image.nhw image.bmp`
