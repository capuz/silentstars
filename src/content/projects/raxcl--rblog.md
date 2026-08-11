---
repo: "Raxcl/RBlog"
name: "RBlog"
description: "基于springboot + vue 实现的博客网站"
readmeQualityOk: true
url: "https://github.com/Raxcl/RBlog"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [49, 37]
topics: ["spring-boot", "java"]
stars: 52
forks: 12
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-11-18T02:00:55Z"
lastCommitAt: "2026-08-11T04:47:19Z"
lastReleaseAt: "2024-01-19T03:15:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 25
maintainers: ["Raxcl"]
openGraphImageUrl: "https://opengraph.githubassets.com/86e9ab70ce79ce34133b1dbdd880bcfff4228c128413b26b84523b3c3a4571b2/Raxcl/RBlog"
---

# raxcl-blog
</p>

## 简介
为了拥有一个属于自己的网站，基于springboot + vue 开发了前后端分离博客系统

## 待更新功能
部署教程，一键docker部署等功能

## 更新功能 2025-02-05
1. qq邮箱端口25存在安全问题，且不被各大云厂商支持，已改为 465

## 更新功能
1. mysql数据库持久化：每天定时任务将mysql备份至七牛云
2. 图床改为腾讯云的cos，腾讯云cdn加持（免费cdn国内凉了，改为使用付费，不过还好不算贵，一个月不到 1RMB）
3. 更新 ip2region 版本，以及相关方法
4. 升级 pox.xml 旧的依赖

## 博客预览
博客地址：[https://raxcl.cn](https://raxcl.cn)

后台管理平台：[https://admin.raxcl.cn](https://admin.raxcl.cn) 账号`Visitor`密码`666666`

博客上线部署过程可以参考：[https://blog.csdn.net/RAXCL/article/details/121276028](https://blog.csdn.net/RAXCL/article/details/121276028)

本项目长期维护，欢迎fork代码和star！。

## 服务器部署
```
cd /www/wwwroot/RBlog/deploy
# 确保 .env 已就绪且密码正确
bash bootstrap.sh

# 修改后端代码后
cd /www/wwwroot/RBlog/deploy
docker compose build blog-api
docker compose up -d blog-api

#若仍有问题，查看后端日志快速定位：
docker logs -f rblog-api | cat
```
前台页面：http://43.139.211.77:8081/

后台页面：http://43.139.211.77:8080/
账号`Visitor`密码`666666`

## 快速开始

1. 创建 MySQL 数据库`r_blog`，并执行`/blog-api/r_blog.sql`初始化表数据
2. 安装 Redis、mysql 并启动
3. 修改配置信息`blog-api/src/main/resources/application.yml`,需要修改必要配置信息
4. 启动后端服务
5. 分别在`blog-cms`和`blog-view`目录下执行`npm install`安装依赖
6. 分别在`blog-cms`和`blog-view`目录下执行`npm run serve`启动前后台页面

## 部署…
