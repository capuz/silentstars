---
repo: "smthemex/ComfyUI_Personalize_Anything"
name: "ComfyUI_Personalize_Anything"
description: "Personalize Anything for Free with Diffusion Transformer,use it in comfyUI with wrapper mode"
readmeQualityOk: true
url: "https://github.com/smthemex/ComfyUI_Personalize_Anything"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 44
forks: 1
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-18T14:21:25Z"
lastCommitAt: "2026-10-25T02:46:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 19
maintainers: ["smthemex"]
openGraphImageUrl: "https://opengraph.githubassets.com/aac6c251f7698a52021957c26cd3113bb9508fe4f231249d4f413f62a6c37177/smthemex/ComfyUI_Personalize_Anything"
---

# ComfyUI_Personalize_Anything
[Personalize Anything](https://github.com/fenghora/personalize-anything) for Free with Diffusion Transformer,use it in comfyUI with wrapper mode

# Update
* 改用comfyUI内核复现方法，去掉diffuser和transformer的版本限制/ Use comfyUI core replay method, remove the version limit of diffuser and transformer

# 1. Installation

In the ./ComfyUI/custom_nodes directory, run the following:   
```
git clone https://github.com/smthemex/ComfyUI_Personalize_Anything
```
---

# 3.Model

* 3.1.1 download  kijai 'flux1-dev.safetensors' fp8 from [here](https://huggingface.co/Kijai/flux-fp8/tree/main)  下载kijai的flux单体模型模型,文件结构如下图
* 3.1.2 download 'clip_l.safetensors' and 't5xxl_fp8_e4m3fn.safetensors' from [here](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main)下载T5和clip l单体模型模型,文件结构如下图

```
--   ComfyUI/models/diffusion_models  # or unet
    ├── flux1-dev-fp8-e4m3fn.safetensors  #11G
--   ComfyUI/models/clip
    ├── clip_l.safetensors
    ├── t5xxl_fp8_e4m3fn.safetensorsvae
--   ComfyUI/models/vae
    ├── ae.safetensor
```

# 4.Example
* Inpainting 

* subject

* Reconstruction

# 5. Citation
```
@article{feng2025personalize,
  title={Personalize Anything for Free…
