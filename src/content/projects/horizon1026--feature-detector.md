---
repo: "Horizon1026/Feature_Detector"
name: "Feature_Detector"
description: "A feature detector on image for point or line corners, such as fast, harris, shi-tomas and so on."
originalDescription: "A feature detector on image for point or line corners, such as fast, harris, shi-tomas and so on."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Horizon1026/Feature_Detector"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-06T01:59:05Z"
lastCommitAt: "2026-11-06T13:19:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 49
maintainers: ["Horizon1026"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c6b434288b8cce3bbcd5d527533a45c3f98c5171d3ba7865383876306f41f86/Horizon1026/Feature_Detector"
---

# Feature detector
Integration of some simple sparse feature detection methods.

# Components
- [x] Feature point detector
    - [x] Harris.
    - [x] Shi-Tomas.
    - [x] Fast.
- [x] Feature descriptor
    - [x] Brief.
- [x] Feature line detector
    - [x] Line Segment Detector(LSD).
- [x] NN feature point detector
    - [x] Superpoint.
    - [x] Superpoint with nms.
    - [x] Disk.
    - [x] Disk with nms.

# Dependence

### Project repository dependencies (source code is in the repo)
- Slam_Utility
- Image_Painter
- Visualizor2D

### Third-party repository dependencies
- Eigen3 (>= 3.3.7) (`sudo apt install libeigen3-dev`)
- onnxruntime (required for NN features; download it and place it in the specified directory. Official site: https://github.com/microsoft/onnxruntime)

# Compile and Run
- For third-party repositories, install them yourself with apt-get install
- Pull the source code in Dependence, create a build folder in the current repo, and run the standard cmake process
```bash
mkdir build
cmake ..
make -j
```
- The successfully compiled executables are in build. For the list of executables, refer to the enumeration in run.sh. You can run run.sh directly to execute all…
