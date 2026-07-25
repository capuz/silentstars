---
repo: "Mon1-innovation/MAICA"
name: "MAICA"
description: "MAICA is an llm-based project aiming to bring a virtual character alive. We'll see how far we can really go."
originalDescription: "MAICA is an llm-based project aiming to bring a virtual character alive. We'll see how far we can really go."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Mon1-innovation/MAICA"
homepage: "https://maica.monika.love"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 56
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-06-04T14:22:50Z"
lastCommitAt: "2026-07-25T06:01:37Z"
lastReleaseAt: "2025-11-06T12:28:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 54
maintainers: ["edgeinfinity1"]
openGraphImageUrl: "https://opengraph.githubassets.com/df2878184ee6276bd14099f4a4e1f2dc99d50b90b70e360ddcd3669c6fedeb37/Mon1-innovation/MAICA"
---

<h1 align="center">MAICA-幻象引擎</h1>
</div>

***

本页面是MAICA的指引页面, 当前位置是MAICA后端仓库.

MAICA项目的详细介绍页是https://maica.monika.love/.

要快速开始或了解授权, 请参阅https://maica.monika.love/tos.

MAICA的后端仓库地址是https://github.com/Mon1-innovation/MAICA.

MAICA的后端compact分支地址是https://github.com/Mon1-innovation/MAICA_Server_Submod

MAICA的子模组前端仓库地址是https://github.com/Mon1-innovation/MAICA_ChatSubmod.

MAICA LIA分支的模型地址是https://huggingface.co/edgeinfinity/MAICAv0-LIA-72B.

MAICA LOA分支的模型地址是https://huggingface.co/edgeinfinity/MAICAv0-LOA-7B.

MAICA-MTTS的子模组前端仓库地址是https://github.com/Mon1-innovation/MAICA_MttsSubmod.

MAICA-MTTS的仓库地址是https://github.com/Mon1-innovation/MAICA_MTTS.

MAICA-MTTS模型地址是https://huggingface.co/edgeinfinity/MTTSv0-VoiceClone.

MAICA的基本数据集仓库位于https://huggingface.co/datasets/edgeinfinity/MAICA_ds_basis.

MAICA的相关文档存储于https://github.com/Mon1-innovation/MAICA/tree/main/document.

> Anything below this point is written by AI.

## 快速开始

MAICA 后端需要 Python 3.12 或更高版本，并支持 Windows 与 Linux。核心模型与 MFocus 模型使用 OpenAI-compatible Responses API，需要另行部署；数据库可使用 MySQL/MariaDB，单机测试也可使用 SQLite。

```bash
python -m pip install -e .
maica -t create
# 编辑 .env：至少设置 MAICA_IS_REAL_ENV、数据库以及 MCORE/MFOCUS 连接
maica -e .env…
