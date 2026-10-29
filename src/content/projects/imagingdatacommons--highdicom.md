---
repo: "ImagingDataCommons/highdicom"
name: "highdicom"
description: "High-level DICOM abstractions for the Python programming language "
readmeQualityOk: true
url: "https://github.com/ImagingDataCommons/highdicom"
homepage: "https://highdicom.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dicom", "numpy", "pydicom", "python3", "typehints"]
stars: 241
forks: 62
openIssues: 31
closedIssues: 111
watchers: 7
contributors: 33
recentReleases: 0
createdAt: "2019-08-01T18:50:40Z"
lastCommitAt: "2026-10-29T21:24:37Z"
lastReleaseAt: "2021-07-30T22:08:58Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 90
undervaluedScore: 42
maintainers: ["CPBridge", "yinkev", "oldrobotdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a4423644ef150b681cd44541a525cb4f262eefca82473ff1b74d33368d5d2f/ImagingDataCommons/highdicom"
---

# Highdicom

`highdicom` is a pure Python package built on top of `pydicom` to provide a higher-level application programming interface (API) for working with DICOM files. Its focus is on common operations required for machine learning, computer vision, and other similar computational analyses. Broadly speaking, the package helps with three types of task:

1. Reading existing DICOM image files of a wide variety of modalities (covering radiology, pathology, and more) and selecting and formatting their frames for computational analysis. This includes considerations such as spatial arrangements of frames and application of pixel transforms, which are not handled by `pydicom`.
2. Storing image-derived information, for example from computational analyses or human annotation, in derived DICOM objects for communication and storage. This includes:
    * Annotations
    * Parametric Map images
    * Segmentation images
    * Structured Report documents (containing numerical results, qualitative evaluations, and/or vector graphic annotations)
    * Secondary Capture images
    * Key Object Selection documents
    * Legacy Converted Enhanced CT/PET/MR images (e.g., for single frame to…
