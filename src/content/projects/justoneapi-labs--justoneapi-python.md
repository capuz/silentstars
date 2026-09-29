---
repo: "justoneapi-labs/justoneapi-python"
name: "justoneapi-python"
description: "主账号已千🌟众多用户选择  Just One API - Python SDK: 接口,小红书,小红书数据接口,小红书爬虫,小红书数据采集,Xiaohongshu,RedNote,淘宝,天猫,Taobao,Tmall,抖音,Douyin,抖音电商,Douyin E-commerce,小红书蒲公英,巨量星图,抖音星图,腾讯互选,微信公众号,TikTok,TikTok Shop,快手,Kuaishou,微博,Sina Weibo,哔哩哔哩,bilibili,豆瓣,WeChat,优酷,贝壳,京东,美团,大众点评,携程,今日头条,Toutiao,知乎,Zhihu,亚马逊,Amazon,Facebook,Twitter,Temu,Shopee,拼多多,YouTube,Instagram,谷歌搜索"
readmeQualityOk: true
url: "https://github.com/justoneapi-labs/justoneapi-python"
homepage: "https://justoneapi.com/en/?utm_source=github.com&utm_medium=referral&utm_campaign=justoneapi_team_justoneapi_python&utm_content=repo_about_link"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["amazon-api", "bilibili-api", "douban-crawler", "douyin-api", "google-search-api", "instagram-api", "jingdong-api", "kuaishou-api", "taobao-api", "tiktok-api"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-16T15:02:46Z"
lastCommitAt: "2026-09-29T08:10:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e95fab74374fafee45bb0bd2ade9493091e602308fda3634759e1e8223bdf6aa/justoneapi-labs/justoneapi-python"
---

</a>
</p>

[简体中文](https://github.com/justoneapi-labs/justoneapi-python/blob/HEAD/README.md) | [English](https://github.com/justoneapi-labs/justoneapi-python/blob/HEAD/README.en.md)

# Just One API - Python SDK

官方 Python SDK，用于访问 [Just One API](https://justoneapi.com/zh/?utm_source=github.com&utm_medium=referral&utm_campaign=justoneapi_labs_justoneapi_python&utm_content=repo_readme)。

Just One API 是一个统一的数据服务平台，提供来自社交媒体、电商和内容平台的结构化数据。

支持的平台包括淘宝、天猫、小红书、小红书蒲公英、抖音、抖音星图、快手、微博、哔哩哔哩、京东、微信、豆瓣、TikTok、TikTok Shop、优酷、Instagram、YouTube、Reddit、头条、知乎、亚马逊、Facebook、X(Twitter)、贝壳、IMDb 等接口。想了解更多，可以访问[官网](https://justoneapi.com/zh/?utm_source=github.com&utm_medium=referral&utm_campaign=justoneapi_labs_justoneapi_python&utm_content=repo_readme)。

## 系统概览

文档中心支持查看接口健康状态、版本化 API 路径、请求参数以及各平台的使用提示。

控制台提供 API 令牌管理、余额展示、接口调用记录、调用量趋势和消费金额分析。

## 安装

```bash
pip install justoneapi
```

## 快速开始

```python
from justoneapi import JustOneAPIClient

client = JustOneAPIClient(token="your_token")

# 示例：搜索抖音视频
response = client.douyin.search_video_v4(keyword="deepseek")

print(response.success)  # 仅当 code == 0 时为 True
print(response.code)     # 服务端返回的业务码
print(response.message)  # 服务端消息
print(response.data)…
