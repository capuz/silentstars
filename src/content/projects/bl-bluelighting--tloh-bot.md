---
repo: "BL-BlueLighting/TLoH-Bot"
name: "TLoH-Bot"
description: "TLoH Bot. 使用 Onebot V11 和 nonebot。"
originalDescription: "TLoH Bot. Using Onebot V11 and nonebot."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BL-BlueLighting/TLoH-Bot"
homepage: "https://bl-bluelighting.github.io/TLoH-Bot/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["nonebot2", "python3", "qqbot"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-25T05:35:42Z"
lastCommitAt: "2026-07-24T06:09:33Z"
lastReleaseAt: "2025-12-28T08:30:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 39
maintainers: ["BL-BlueLighting"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1044047316/34eb63a2-53c4-4a30-856b-93acdb912015"
---

<h1 align="center">TLoH Bot</h1>

<hr/>

> [!Warning]
> 
> TLoH Bot 更新了配置文件格式，此次更新前，请先备份您的旧版 `configuration.toml`，改为 `configuration.toml.toolsbot_data` (旧版存档数据)
> ，来避免 git 认为您的 `configuration.toml` 属于更改，导致无法正常 `git pull`。更新完之后，请对照您的旧版 `configuration.toml` 对新版 `configuration.toml` 进行修改。

> [!Warning]
> 
> ToolsBot 已更新，请在 git pull 下来后，执行 python ./scripts/quickmove.py 来迁移用户数据

## 如何使用
先 git clone 下来整个项目。

`
git clone https://github.com/BL-BlueLighting/RE-ToolsBot.git
`

以下操作二选一

<details>
<summary>安装依赖(主环境内)</summary>

使用下面这行命令安装所有依赖。

`
python ./scripts/install/installTB.py
`

或者，直接通过 pip 安装：

`
pip install -r ./scripts/install/requirements.txt
`

</details>

<details>
<summary>安装依赖(虚拟环境)</summary>

1.安装版本>=3.10的python

2.运行`pip install poetry`

3.运行`poetry install`

(备注:真的有人会想把这个项目部署在主环境里吗)

</details>

(只创建一个空项目，选择全局安装)

在所有的事情干完后，修改 `.env.prod` `bot.py` 中的 SUPERUSER 为你自己的 QQ号码。

接下来，打开 `data/configuration_template.toml`，修改其中的 api_key 项目为你的服务提供商 API Key。随后重命名为 `configuration.toml`。
若不需要，请直接重命名为 `configuration.toml`。

随后，运行 `nb run --reload` 来启动 bot.

## 这个 bot 怎么链接到 QQ？

先安装NapCat并登录Bot的QQ账号 https://github.com/NapNeko/NapCatQQ.

随后在“网络配置”…
