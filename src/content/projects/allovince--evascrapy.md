---
repo: "AlloVince/EvaScrapy"
name: "EvaScrapy"
description: "Scrapy components for generic crawling"
readmeQualityOk: true
url: "https://github.com/AlloVince/EvaScrapy"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-07-08T12:45:54Z"
lastCommitAt: "2026-08-14T05:15:57Z"
lastReleaseAt: "2019-06-06T08:21:23Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 57
maintainers: ["AlloVince"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eade20036ff1a3ec068b8eb9619a07d8f319fea8da45f795704b7802f957827/AlloVince/EvaScrapy"
---

# EvaScrapy

基于 Scrapy 的**原始数据**抓取基础设施。只负责抓取与落盘/通知，ETL 由外部项目完成。

- 单机 / 分布式（scrapy-redis）
- 增量与全量（`APP_RUN_DEEP` + spider `deep_*`）
- 存储：本地文件 / 阿里云 OSS / S3（MinIO 客户端）
- 可选通知：Kafka、阿里云 MNS
- 周期调度：`start.py` + APScheduler
- Docker 运行

## 要求

- Python ≥ 3.14（见 `.python-version` / `pyproject.toml`）
- [uv](https://docs.astral.sh/uv/) 管理依赖

## 快速开始

```bash
uv sync
# 开发依赖（pytest 等）
uv sync --extra dev

# 根目录创建 .env（已 gitignore），按需配置
```

校验：

```bash
uv run pytest tests/
uv run scrapy list
```

## 运行

配置优先级：**环境变量 > `.env` > `settings.py` > Scrapy 默认**。

### 周期调度（推荐常驻）

```bash
uv run python start.py
APP_SPIDER=nyaa uv run python start.py
```

- 按 `APP_CRAWL_INTERVAL` 重复启动 crawl
- 未指定 `APP_TASK` 时，由 `APP_STORAGE_SHUFFLE_INTERVAL` 按时间桶生成

### 一次性抓取

```bash
uv run scrapy crawl <spider_name>
APP_TASK=full APP_RUN_DEEP=1 uv run scrapy crawl <spider_name>
```

### 全量（deep）

设 `APP_RUN_DEEP=1`。Spider 可定义：

- `deep_start_urls`
- `deep_rules`
- `deep_allowed_domains`

运行时优先使用上述字段覆盖普通配置。

### 分布式

基于 scrapy-redis。空闲时会退出（与 scrapy-redis 默认常驻不同），需先写入 start_urls：

```bash
redis-cli sadd <name>:start_urls https://example.com
APP_DISTRIBUTED=1 uv run scrapy crawl <name>

# 清理
redis-cli KEYS…
