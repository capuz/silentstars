---
repo: "YasinDoyle/e-mall"
name: "e-mall"
description: "An example e-commerce backend project in Go based on Gin + GORM, currently includes user, product, shopping cart, order payment, flash sales, ES search, Redis caching, RabbitMQ events, Kafka asynchronous ordering, and basic link tracing capabilities."
originalDescription: "一个基于 Gin + GORM 的 Go 电商后端示例项目，当前已经包含用户、商品、购物车、订单支付、秒杀、ES 搜索、Redis 缓存、RabbitMQ 事件、Kafka 异步下单和基础链路追踪能力。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YasinDoyle/e-mall"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [59, 32]
stars: 8
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-06T04:11:06Z"
lastCommitAt: "2026-07-24T06:07:01Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 75
undervaluedScore: 49
maintainers: ["YasinDoyle"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac507b7b792837114c4e3663bb6dac59744543fab4a58b42bce224f1b175d65/YasinDoyle/e-mall"
---

# e-mall

An example e-commerce backend project in Go based on Gin + GORM, currently includes user, product, shopping cart, order payment, flash sales, ES search, Redis caching, RabbitMQ events, Kafka asynchronous ordering, and basic link tracing capabilities.

## Current Status

The key capabilities implemented in the repository so far:

- User registration, login, profile updates, following, avatar upload, email verification
- Regular e-commerce modules such as products, categories, carousel images, shopping cart, favorites, shipping addresses
- Order creation, listing, details, deletion, shipping, receiving
- Payment idempotency, inventory concurrency control, successful payment RabbitMQ event publishing
- Flash sales cache warming, Redis Lua pre-reduction of inventory, prevention of duplicate flash sales, Kafka asynchronous order creation
- Elasticsearch product search
- Basic integration of Jaeger tracing, HTTP -> DB/Redis/MQ links can continue to be passed down

## Project Structure

```text
cmd/                Program entry
api/v1/             Handler layer
service/            Business layer
repository/db/dao/  Data access layer
repository/cache/   Redis
repository/es/…
