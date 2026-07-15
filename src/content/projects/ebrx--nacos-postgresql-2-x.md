---
repo: "ebrx/nacos-postgresql-2.x"
name: "nacos-postgresql-2.x"
description: "基于nacos2.5.1集成postgres,参考[https://github.com/Zhao2018Mr/nacos-postgresql-2.4.0.1]"
readmeQualityOk: true
url: "https://github.com/ebrx/nacos-postgresql-2.x"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 409
recentReleases: 0
createdAt: "2025-04-11T13:29:27Z"
lastCommitAt: "2026-07-15T05:54:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 47
maintainers: ["KomachiSion", "ebrx", "zmz789"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6e7007b75f04e3b21df760df59387875b6a9943a45df011c05361c2e3055848/ebrx/nacos-postgresql-2.x"
---

# Nacos PostgreSQL 数据源集成（2.5.1 版本）

---

## 📝 简介
本项目基于Nacos 2.5.1 集成PostgreSQL数据源插件。

---

## 🛠️ 环境要求
| 组件       | 版本要求          |
|------------|-------------------|
| Nacos      | 2.5.1+            |
| PostgreSQL | 14.0+             |
| Java       | JDK 8+            |
| Maven      | 3.5.0+            |

---

## 🚀 快速开始

### 1. 下载与构建
```bash
git clone https://github.com/ebrx/nacos-postgresql-2.5.1.git
cd nacos-postgresql-2.5.1
mvn -Prelease-nacos -Dmaven.test.skip=true clean install -U
```

### 2. 配置修改
在 `distribution/conf/application.properties` 中配置：
```properties
# 数据源配置
spring.datasource.platform=postgresql
db.num=1
db.url.0=jdbc:postgresql://localhost:5432/nacos_config
db.user=postgres
db.password=your_password

# 连接池配置
db.pool.config.driver-class-name=org.postgresql.Driver
db.pool.config.max-active=200
db.pool.config.max-idle=50
```

### 3. 初始化数据库
执行 SQL 脚本（位于 `distribution/conf/postgres-schema.sql`）：
```sql
CREATE DATABASE nacos_config WITH OWNER = postgres;
GRANT ALL PRIVILEGES ON DATABASE nacos_config TO postgres;
```

### 4. 启动验证
```bash
sh bin/startup.sh -m standalone
```
访问 `http://localhost:8848/nacos` 验证控制台

---

## 📜 配置说明
| 配置项                | 说明…
