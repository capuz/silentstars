---
repo: "x-mate/MicroApi"
name: "MicroApi"
description: "基于SqlKata下可根据数据表自动生成Restful API的.net5中间件/A dotnet middleware based on SqlKata Query Builder that can automatically generate restful API according to the database"
readmeQualityOk: true
url: "https://github.com/x-mate/MicroApi"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-05-19T13:35:19Z"
lastCommitAt: "2026-08-14T05:13:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 32
maintainers: ["VictorTzeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/54ea3b7650ed2792a53d88b7279e2ad53ac71044137a48a52abd6b6a47f4f15a/x-mate/MicroApi"
---

[English](https://github.com/x-trip/MicroApi/blob/master/README-EN.md)

# MicroApi

基于 [SqlKata Query Builder](https://github.com/sqlkata/querybuilder) 的表驱动 Restful API 中间件。

> **v1.2**：支持资源映射（路由别名、列别名、`/{id}`）。未声明资源默认不可访问；PUT/DELETE 必须带过滤条件（路径 id 也算）。

## 支持的数据库

1. MySql *[MicroApi.MySql](https://www.nuget.org/packages/MicroApi.MySql/)*
2. SqlServer *[MicroApi.SqlServer](https://www.nuget.org/packages/MicroApi.SqlServer/)*
3. PostgreSQL *[MicroApi.PostgreSQL](https://www.nuget.org/packages/MicroApi.PostgreSQL/)*
4. Oracle *[MicroApi.Oracle](https://www.nuget.org/packages/MicroApi.Oracle/)*
5. Sqlite *[MicroApi.Sqlite](https://www.nuget.org/packages/MicroApi.Sqlite/)*
6. Firebird *[MicroApi.Firebird](https://www.nuget.org/packages/MicroApi.Firebird/)*

## 接口认证中间件

*[MicroApi.Authorization](https://www.nuget.org/packages/MicroApi.Authorization)*

可选 claim：`microapi.permission`，格式 `resource:METHOD` / `resource:*` / `*:*`（resource 为 API 资源名，不是物理表名）。

## 示例

[MicroApi.Demo](https://github.com/x-trip/MicroApi/tree/master/MicroApi.Demo)

## 用法

简写（路径名 = 表名）：

```csharp
services.AddMicroApi(option =>
    {
        option.AuthorizeType = AuthorizeType.JWT;
        option.ApiRoutePrefix =…
