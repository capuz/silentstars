---
repo: "jinyangcruise/GDSQL"
name: "GDSQL"
description: "A database SQL workbench plugin for Godot Engine"
url: "https://github.com/jinyangcruise/GDSQL"
homepage: "https://jinyangcruise.github.io/GDSQL/"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [99]
topics: ["database", "godot", "orm", "sql"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-13T08:31:31Z"
lastCommitAt: "2026-06-28T03:10:55Z"
lastReleaseAt: "2026-06-18T08:04:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 70
undervaluedScore: 48
maintainers: ["jinyangcruise"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d5391ea67a510850103915181afe11577686bcfe1872cf3b04e8a6f9b75c67f/jinyangcruise/GDSQL"
fundingLinks: ["KO_FI:https://ko-fi.com/jinyangcruise", "CUSTOM:https://afdian.com/a/jinyangcruise"]
---

# GDSQL

**Database SQL Workbench Plugin for Godot Engine**

**English** | [简体中文](README_zh.md)

A database SQL workbench plugin for Godot Engine built on top of the `ConfigFile` system. It provides a visual database management interface, Excel-like data editing, a full SQL query engine, a MyBatis-style ORM mapping framework (GBatis), and AES-256-CBC data encryption. **Pure GDScript, zero external dependencies, no database server required.**

</div>

---

## Basic Usage

### Fluent DAO API
Complete database operations through GDScript method chaining — no XML required:

```gdscript
# Select
var result = GDSQL.BaseDao.new() \
	.use_db("GameConfig") \
	.select("id, name, hp, mp") \ # Or: .select("id", "name", "hp", "mp") Or: .select("*")
	.from("c_hero") \
	.where("hp > 100 AND mp >= 50") \
	.order_by("hp") \
	.limit(10) \
	.query()

# Insert
GDSQL.BaseDao.new() \
	.use_db("GameConfig") \
	.insert_into("c_hero") \
	.values({"id": 101, "name": "NewHero", "hp": 200}) \
	.query()

# Update
GDSQL.BaseDao.new() \
	.use_db("GameConfig") \
	.update("c_hero") \
	.sets({"hp": 300}) \
	.where("id == 101") \
	.query()

# Delete
GDSQL.BaseDao.new() \
	.use_db("GameConfig") \…
