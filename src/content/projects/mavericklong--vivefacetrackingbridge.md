---
repo: "MaverickLong/VIVEFaceTrackingBridge"
name: "VIVEFaceTrackingBridge"
description: "Bridging VIVE standalone headset's face tracking data to VRCFT"
readmeQualityOk: true
url: "https://github.com/MaverickLong/VIVEFaceTrackingBridge"
language: "Java"
languages: ["Java", "Rust"]
languagePcts: [48, 43]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-16T15:47:49Z"
lastCommitAt: "2026-11-05T08:03:25Z"
lastReleaseAt: "2026-09-22T10:17:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 39
maintainers: ["MaverickLong"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f81279d2614e4b1ca5134b834db8fddeb9fb3b42041fff6927d181d344e9c01/MaverickLong/VIVEFaceTrackingBridge"
---

# VIVE Face Tracking Bridge

A minimal, standalone Android app for VIVE (and other OpenXR) headsets that streams
eye and face tracking data to a PC running [VRCFaceTracking](https://github.com/benaclejames/VRCFaceTracking)
with the [VRCFT-ALVR module](https://github.com/alvr-org/VRCFT-ALVR). It runs as a background
service, so it works alongside Virtual Desktop, Steam Link or any other streaming app.
No PC-side component is required!

The bridge is now compatible with Virtual Desktop's Eye Tracking Foveated Encoding.
You do NOT need to install Virtual Desktop's VRCFT module for eyegaze to work.

The design and the OpenXR face tracking code are derived from [ALVR](https://github.com/alvr-org/ALVR)
(see [LICENSE](https://github.com/MaverickLong/VIVEFaceTrackingBridge/blob/HEAD/LICENSE)). Thank you to the ALVR team for their outstanding work!

## Requirements

- Compatible Headsets:

| Headset                 | Compatibility                     |
| ----------------------- | --------------------------------- |
| VIVE Focus Vision       | ✅ (Tested)                       |
| VIVE XR Elite           | ✅ (Tested)                       |
| VIVE Focus 3            | ❓ (Untested but should…
