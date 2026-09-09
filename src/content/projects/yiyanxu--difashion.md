---
repo: "YiyanXu/DiFashion"
name: "DiFashion"
description: "Diffusion Models for Generative Outfit Recommendation"
readmeQualityOk: true
url: "https://github.com/YiyanXu/DiFashion"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 41
forks: 7
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-26T01:34:23Z"
lastCommitAt: "2026-09-09T08:21:37Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 23
maintainers: ["YiyanXu"]
openGraphImageUrl: "https://opengraph.githubassets.com/a618dab0dd1592ea72d266b162017785800559d4cd8207826bf3f86192994cc2/YiyanXu/DiFashion"
---

# Diffusion Models for Generative Outfit Recommendation
This is the pytorch implementation of our paper at SIGIR 2024:
> [Diffusion Models for Generative Outfit Recommendation](https://arxiv.org/abs/2402.17279)
> 
> Yiyan Xu, Wenjie Wang, Fuli Feng, Yunshan Ma, Jizhi Zhang, Xiangnan He

## DiFashion Overview
An overview of DiFashion: it gradually corrupts outfit images with Gaussian noise in the forward process, followed by a parallel conditional denoising process to reconstruct these images. The denoising process is guided by three conditions: category prompt, mutual condition, and history condition.

## Generated Examples
- Generated images (enclosed in small black squares within each outfit) for the PFITB task.

- Generated outfits for the GOR task.

## Environment
- Anaconda 3
- python 3.8.13
- torch 2.0.1
- torchvision 0.15.2
- Pillow 9.0.1
- numpy 1.24.4
- transformers 4.32.1
- open-clip-torch 2.20.0
- accelerate 0.20.3
- diffusers 0.18.2
- xformers 0.0.22
- pytorch-fid 0.3.0
- lpips 0.1.4

## Usage
### Dataset
The experimental data are in './datasets' folder, including iFashion and Polyvore-U. Each dataset consists of the following files:
- **`train.npy`:** dict with four…
