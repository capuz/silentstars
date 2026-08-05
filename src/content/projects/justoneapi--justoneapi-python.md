---
repo: "justoneapi/justoneapi-python"
name: "justoneapi-python"
description: "Just One API - Python SDK: 接口,小红书,Xiaohongshu,RedNote,淘宝,天猫,Taobao,Tmall,抖音,Douyin,抖音电商,Douyin E-commerce,TikTok,TikTok Shop,快手,Kuaishou,微博,Sina Weibo,哔哩哔哩,bilibili,豆瓣,小红书蒲公英,抖音星图,巨量星图,微信公众号,WeChat,优酷,贝壳,IMDb,京东,美团,大众点评,携程,今日头条,Toutiao,知乎,Zhihu,亚马逊,Amazon,Facebook,Twitter,Temu,Reddit,Shopee,拼多多,YouTube,Instagram,谷歌搜索API,Google Search API,SERP API"
readmeQualityOk: true
url: "https://github.com/justoneapi/justoneapi-python"
homepage: "https://justoneapi.com/en/?utm_source=github.com&utm_medium=referral&utm_campaign=justoneapi_justoneapi_python&utm_content=repo_about_link"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["youku", "douban-crawler", "jingdong-api", "xiaohongshu-pgy", "xiaohongshu-scraper", "google-search-api", "xiaohongshu-api", "instagram-api", "youtube-api", "taobao-api"]
stars: 232
forks: 15
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-07-11T17:08:28Z"
lastCommitAt: "2026-08-05T06:07:40Z"
lastReleaseAt: "2025-08-18T13:15:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c300eaae850c47929c608e4ed84119f5688a9cd4860d394a1f52299316531326/justoneapi/justoneapi-python"
---

</a>
</p>

[简体中文](https://github.com/justoneapi/justoneapi-python/blob/HEAD/README.md) | [English](https://github.com/justoneapi/justoneapi-python/blob/HEAD/README.en.md)

# Just One API - Python SDK

官方 Python SDK，用于访问 [Just One API](https://justoneapi.com/zh/?utm_source=github.com&utm_medium=referral&utm_campaign=justoneapi_justoneapi_python&utm_content=repo_readme)。

Just One API 是一个统一的数据服务平台，提供来自社交媒体、电商和内容平台的结构化数据。

支持的平台包括淘宝、天猫、小红书、小红书蒲公英、抖音、抖音星图、快手、微博、哔哩哔哩、京东、微信、豆瓣、TikTok、TikTok Shop、优酷、Instagram、YouTube、Reddit、头条、知乎、亚马逊、Facebook、X(Twitter)、贝壳、IMDb 等接口。想了解更多，可以访问[官网](https://justoneapi.com/zh/?utm_source=github.com&utm_medium=referral&utm_campaign=justoneapi_justoneapi_python&utm_content=repo_readme)。

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
print(response.data)     # 实际业务数据
```

##…
