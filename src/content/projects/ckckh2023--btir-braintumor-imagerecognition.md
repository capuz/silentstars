---
repo: "ckckh2023/BTIR-BrainTumor-ImageRecognition"
name: "BTIR-BrainTumor-ImageRecognition"
description: "BTIR is a one-stop brain tumor MRI analysis platform for clinical and research use. Drag a DICOM or NIfTI folder into the browser to automatically perform modality matching, lesion classification, and 3D segmentation, and generate a comprehensive conclusion with AI interpretation. Built-in multi-user isolation, an asynchronous task queue, and 3D volume rendering make it ready to use out of the box."
originalDescription: "BTIR 是一个面向临床与科研的脑肿瘤 MRI 一站式分析平台。只需在浏览器中拖入 DICOM 或 NIfTI 文件夹，即可自动完成模态匹配、病灶分类与三维分割，并生成综合结论与 AI 解读。内置多用户隔离、异步任务队列与 3D 体渲染，开箱即用。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ckckh2023/BTIR-BrainTumor-ImageRecognition"
homepage: "https://btir.xiao-blog.top/"
language: "Python"
languages: ["Python"]
languagePcts: [57]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-16T00:45:31Z"
lastCommitAt: "2026-10-16T08:27:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["Songline-music", "ckckh2023"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1302159780/4e953ad5-e980-4b74-ab9a-e38797dcad19"
---

# BTIR Brain Tumor MRI Image Analysis Platform

BTIR is a complete analysis system for four-modality brain tumor MRI. Users can log in through the browser, complete classification, segmentation, and AI-assisted analysis, and view key imaging features, slices, comparisons, and 3D images on the web page.

You can self-host the server and use the matching client project: https://github.com/ckckh2023/BTIR-Client

Access our already-deployed service (opened irregularly): https://btir-online.ai-premol.cn

You can also visit our about page: https://btir.xiao-blog.top/

**Other languages:** [English](https://github.com/ckckh2023/BTIR-BrainTumor-ImageRecognition/blob/HEAD/README.en.md)

## Project Capabilities

| Scope | Capability |
| --- | --- |
| Case upload | Supports four-modality NIfTI or raw DICOM folders and ZIP files, automatically matches and converts FLAIR, T1CE, T1, and T2; when NIfTI files are missing or duplicated, provides corresponding correction options |
| Model analysis | Local ViT multi-slice binary classification and SuperLightNet 3D segmentation jointly provide evidence and generate a comprehensive conclusion |
| Results display | The first screen shows the combined…
