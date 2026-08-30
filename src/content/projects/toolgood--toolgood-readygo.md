---
repo: "toolgood/ToolGood.ReadyGo"
name: "ToolGood.ReadyGo"
description: "Micro ORM framework"
readmeQualityOk: true
url: "https://github.com/toolgood/ToolGood.ReadyGo"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 10
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-09-29T12:18:10Z"
lastCommitAt: "2026-08-30T00:45:16Z"
lastReleaseAt: "2020-04-26T12:58:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 71
maintainers: ["toolgood"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9527918127b881093cfb4dbe964fac56a81f1512c74dc40fc0e227455705018/toolgood/ToolGood.ReadyGo"
---

ToolGood.ReadyGo
===

欢迎使用`ToolGood.ReadyGo`！它是一款轻量级 ORM，基于 NPOCO 核心修改，
汇聚作者多年经验，简单、快捷，能增加代码的可读性。
支持 SqlServer、MySql、SQLite、Oracle、Access、DuckDB。

### 快速上手

```csharp
using ToolGood.ReadyGo;

var helper = SqlHelperFactory.OpenSqliteFile("test.db");
helper._TableHelper.CreateTable(typeof(User));

helper.Insert(new User { Name = "Ted", Age = 21 });
var user = helper.FirstOrDefault<User>("Where Name=@0", "Ted");
var users = helper.Where<User>().Where(x => x.Age > 18).OrderBy(x => x.Name).ToList();
```

### 功能简介

* 表操作：支持表创建、删除、截断，支持索引与唯一索引，定制 Attribute。
* Object 快速增删改：Insert / Update / Delete / Save，批量 SaveList / UpdateList / InsertList。
* 快照局部更新：StartSnapshot 记录对象变更，只更新变更的列。
* 批量更新与删除：UpdateMany / DeleteMany 链式操作，集合批量 UpdateList（含快照）/ SaveList。
* 原生 SQL：支持 SQL 简化、分页查询、多结果集 SelectMultiple、一对多 SelectOneToMany。
* 动态查询：Where&lt;T&gt;() 链式，支持表达式、IfTrue* 条件开关、WhereIn / WhereLike / WhereExists。
* object 条件查询：以对象为条件执行 Select / Update / Delete / Count / Exists。
* 异步 API：全部核心操作均提供 _Async 异步版本。
* SQL 执行监控。

#### 1、数据表生成与删除

##### 1.1、简单的数据表操作

目前支持【表操作】的数据库有 SqlServer、MySql、MariaDb、SQLite、DuckDb、Oracle、PostgreSQL、FirebirdDb。

```csharp
using ToolGood.ReadyGo.Attributes;

public class User
{…
