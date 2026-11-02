---
repo: "niujt/Hospital"
name: "Hospital"
description: "Medical information management system (ssm+layui+freemaker)"
originalDescription: "医疗信息管理系统（ssm+layui+freemaker）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/niujt/Hospital"
language: "Java"
languages: ["Java", "FreeMarker"]
languagePcts: [38, 35]
stars: 138
forks: 45
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2019-03-07T02:58:51Z"
lastCommitAt: "2026-11-02T15:16:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 22
maintainers: ["niujt"]
openGraphImageUrl: "https://opengraph.githubassets.com/43e1959a19504891be0e17f8cf11c22d5d189a64d8d0ed46f015c85e2cbcfef8/niujt/Hospital"
---

# Hospital
Medical information management system (ssm+layui+freemaker)
## Create a MySQL schema with Docker
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d -i -p 3306:3306 mysql:latest
MYSQL_ROOT_PASSWORD=123456 means the account is root and the password is 123456
## Run the SQL file
Hospital/sql/hospital.sql
## About gen.xml
Running the class Hospital/src/main/java/com/hospital/uitls/MybatisGen.java generates the initial MyBatis XML files.
## System screenshots

The following screenshots were captured on 2026-11-02 from the real system running from the current code. They use an isolated H2 in-memory database and synthetic demo data, and do not connect to the production database or real payments. Browser page screenshots do not capture the mouse pointer.

### Home page and login

### Patient services

### Doctor workbench

### Admin workbench

For the results of this regression run and the verification scope, see [pre-merge validation record](https://github.com/niujt/Hospital/blob/HEAD/docs/merge-validation-2026-11-02.md).
