---
repo: "camilesing/DataPoly"
name: "DataPoly"
description: "An data service platform that turns SQL or Groovy scripts into RESTful APIs and MCP tools, with many data sources and built-in auth, rate limiting, firewall, and version rollback.数据服务平台：把 SQL / Groovy 脚本一键发布为 RESTful API 或 MCP 工具，支持多种数据源，内置鉴权、限流、防火墙与版本回滚。"
readmeQualityOk: true
url: "https://github.com/camilesing/DataPoly"
language: "Java"
languages: ["Java"]
languagePcts: [78]
stars: 46
forks: 7
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-08-26T16:13:21Z"
lastCommitAt: "2026-11-22T11:36:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 27
maintainers: ["camilesing"]
openGraphImageUrl: "https://opengraph.githubassets.com/803adc6bec48c0efb87c8e38cf77bb3de5696e42b67525f84c8c090c5a2951a3/camilesing/DataPoly"
---

# DataPoly
Language: [简体中文](https://github.com/camilesing/DataPoly/blob/HEAD/README.zh.md) [English](https://github.com/camilesing/DataPoly/blob/HEAD/README.md)

> A convenient tool that transforms SQL operations into RESTful APIs

DataPoly is an open-source SQL/DSL data access middleware: pick a data source, configure SQL or scripts, and set a
path to create RESTful APIs — no backend code required. It supports 20+ databases including mainstream Chinese
domestic ones, with MyBatis dynamic SQL, Groovy scripting, GraphQL APIs (SDL definitions with `@sql`-bound SQL and
runtime schema assembly), token authentication, Sentinel flow control, Hazelcast/Redis caching, online API docs,
and LLM MCP services.

## Quick Start With Docker Compose
```
sh ./build.sh
sh ./build-docker/build_and_push_image.sh
cd build-docker/install 
docker compose up -d
```
open `http://127.0.0.1:8091/#/login` then enter user `admin` and password `DataPoly@123456`.

## Building DataPoly from Source

Prerequisites for building DataPoly:
