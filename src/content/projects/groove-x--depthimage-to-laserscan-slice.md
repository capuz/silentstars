---
repo: "groove-x/depthimage_to_laserscan_slice"
name: "depthimage_to_laserscan_slice"
description: "Convert depth image to laser scan with slicing."
readmeQualityOk: true
url: "https://github.com/groove-x/depthimage_to_laserscan_slice"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 17
recentReleases: 0
createdAt: "2020-08-03T07:30:06Z"
lastCommitAt: "2026-11-24T01:56:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 41
maintainers: ["Choirin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c43b0a116f61396f1210d6edd164e208c519733b90e82a9509eb9c48e3645840/groove-x/depthimage_to_laserscan_slice"
---

# depthimage_to_laserscan_slice
Convert depth image to laser scan with slicing.

## Usage

- Node: `depthimage_to_laserscan_slice_node` (see `launch/sample.launch`).
- Nodelet: `depthimage_to_laserscan_slice/DepthImageToLaserScanSliceNodelet`.
  Load it into the same process as the depth image publisher,
  so that the image reaches the scan without serialization or a copy.

The input must be a `16UC1` (or `mono16`) depth image in millimeters.
The node reads the message buffer directly and does not depend on cv_bridge or OpenCV.

## License

BSD 3-Clause License. See `LICENSE`.
