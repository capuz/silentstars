---
repo: "junqiangchen/Ultra-low-Dose-PET-Imaging-Challenge"
name: "Ultra-low-Dose-PET-Imaging-Challenge"
description: "low dose PET Imaing"
readmeQualityOk: true
url: "https://github.com/junqiangchen/Ultra-low-Dose-PET-Imaging-Challenge"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["deeplearning-ai", "pet", "pytorch", "unet3d"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-09-13T02:42:54Z"
lastCommitAt: "2026-08-18T04:09:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 36
maintainers: ["junqiangchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4ede6019f620d1086a24c6222dac7f55c7c4d41ac952a2352ef937c18ddd405/junqiangchen/Ultra-low-Dose-PET-Imaging-Challenge"
---

# Ultra-low Dose PET Imaging Challenge
> This is an example of the PET imaging is used to recovere high-quality imaging from low dose scans imaging.



## Prerequisities
The following dependencies are needed:
- numpy >= 1.11.1
- SimpleITK >=1.0.1
- pytorch-gpu ==1.10.0
- pandas >=0.20.1
- scikit-learn >= 0.17.1

## How to Use
* 1、when download the all project,check out the data folder all csv,put your train data into same folder.or you can run lowdosePet2022data3dprepare.py to generate train data and validation data.
* 2、run lowdosePet_train.py for Unet3d training:make sure train data have effective path
* 3、run lowdosePet_inference.py for Unet3d inference:make sure validation data have effective path
* 4、run lowdosePet_inferencetest.py for Unet3d inference test:make sure test data have effective path

## Result

## Video

[Video 1](https://github.com/junqiangchen/Ultra-low-Dose-PET-Imaging-Challenge/blob/HEAD/2026.08.18-11.23.03.mp4)

[Video 2](https://github.com/junqiangchen/Ultra-low-Dose-PET-Imaging-Challenge/blob/HEAD/2026.08.18-11.24.09.mp4)

#  1-2 dose predict result



#  1-4 dose predict result



#  1-10 dose predict result



#…
