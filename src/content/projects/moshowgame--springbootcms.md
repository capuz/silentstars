---
repo: "moshowgame/SpringBootCMS"
name: "SpringBootCMS"
description: "做个简单易用的SpringBootCMS BackEnd后台:SpringBoot2 + MybatisPlus3 + Freemarker AdminUI管理页面:LayMini2(based on LayUI) FrontEndUI前端页面:Bootstrap3/4"
url: "https://github.com/moshowgame/SpringBootCMS"
homepage: "http://zhengkai.blog.csdn.net"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [52]
topics: ["springboot", "cms", "mybatis-plus", "freemarker", "layui"]
stars: 16
forks: 16
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-05-23T08:27:52Z"
lastCommitAt: "2026-06-28T03:09:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 61
maintainers: ["moshowgame"]
openGraphImageUrl: "https://opengraph.githubassets.com/d35dbaec53b231e46d749cb3d74b622fe7188fb69fa2f4a830f45cc74c9bb252/moshowgame/SpringBootCMS"
---

# SpringBootCMS

基于 Spring Boot 3 的内容管理系统，使用现代技术栈重构，安全可靠、易于扩展。

## 技术栈

| 模块 | 技术 |
|------|------|
| 后端框架 | Spring Boot 3.x (Jakarta EE) |
| ORM | MyBatis (原生XML Mapper) |
| 安全框架 | Spring Security + Session |
| 密码存储 | BCrypt Hash |
| 缓存 | Caffeine |
| 数据库 | MySQL 8.x (InnoDB, utf8mb4) |
| 模板引擎 | FreeMarker |
| 连接池 | HikariCP |
| JSON | Jackson |
| 验证码 | Kaptcha |
| 前端UI(后台) | Layui / layuimini (规划迁移至 Bootstrap5) |
| 前端UI(前台) | Bootstrap (规划迁移至 Bootstrap5) |

## 功能模块

### 核心功能
- **用户管理**：用户CRUD、角色权限、BCrypt密码加密
- **菜单管理**：二级菜单、角色权限控制
- **文章管理**：文章CRUD、频道分类、标签、封面图、浏览量统计、定时发布、URL Slug
- **频道管理**：二级频道、频道类型(列表/单页/外链)、URL Slug
- **模板管理**：页面模板值动态配置、`#+文章id` 引用文章链接

### 扩展功能
- **标签系统**：标签管理、文章-标签多对多关联
- **媒体资源管理**：文件/图片上传管理、媒体类型分类(image/video/audio/document)
- **站点配置**：全局配置项、分组管理(general/seo/email/upload)
- **操作日志**：审计日志记录与查询、IP/UA追踪
- **活动管理**：活动发布与签到
- **表单管理**：动态表单定义与提交、审核流程

### 安全特性
- Spring Security + Session 认证
- BCrypt 密码 Hash 存储与校验
- 逻辑删除（deleted字段软删除，保留数据历史）
- SQL参数化（`#{}` 防注入）
- 验证码（Kaptcha）

## 数据库表结构 (v2.0)

共 17 张表，全部使用 InnoDB 引擎 + utf8mb4 字符集：

| 表名 | 说明 | 逻辑删除 | 审计字段 |
|------|------|---------|---------|
| user | 用户表 | ✅ | ✅ |
| role | 角色表 | ✅ | ✅ |
| menu | 菜单表 | ✅ | ✅ |…
