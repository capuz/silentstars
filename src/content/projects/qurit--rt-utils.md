---
repo: "qurit/rt-utils"
name: "rt-utils"
description: "A minimal Python library to facilitate the creation and manipulation of DICOM RTStructs. "
readmeQualityOk: true
url: "https://github.com/qurit/rt-utils"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [74, 21]
topics: ["dicom", "rtstruct", "mask", "roi", "pydicom", "ai", "medical-imaging", "medical-image-processing", "nuclear-medicine", "typed"]
stars: 257
forks: 75
openIssues: 44
closedIssues: 32
watchers: 8
contributors: 19
recentReleases: 2
createdAt: "2021-01-14T18:56:05Z"
lastCommitAt: "2026-11-11T19:49:12Z"
lastReleaseAt: "2026-11-11T19:28:57Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 39
maintainers: ["carluri", "qurit-frizi", "arahmim1"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/329707287/68fcab80-6648-11eb-92f0-29254f9416c4"
---

---

RT-Utils is motivated to allow physicians and other users to view the results of segmentation performed on a series of DICOM images. RT-Utils allows you to create or load RT Structs, extract 3d masks from RT Struct ROIs, easily add one or more regions of interest, and save the resulting RT Struct in just a few lines!
You can also use the RT-Utils for merging two existing RT Structs to one file.

## How it works
RT-Utils provides a builder class to faciliate the creation and loading of an RT Struct. From there, you can add ROIs through binary masks and optionally input the colour of the region along with the region name.

The format for the ROI mask is an nd numpy array of type bool. It is an array of 2d binary masks, one plane for each slice location within the DICOM series. The slices should be sorted in ascending order within the mask. Through these masks, we extract the contours of the regions of interest and place them within the RT Struct file. Note that there is currently only support for the use of one frame of reference UID and structered set ROI sequence. Also note that holes within the ROI may be handled poorly.

## Installation
```bash
pip install rt_utils
```

##…
