---
repo: "USTC-iCourse/ustc-course"
name: "ustc-course"
description: "USTC iCourse - a popular course rating platform for USTC students"
originalDescription: "USTC iCourse - a popular course rating platform for USTC students"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/USTC-iCourse/ustc-course"
homepage: "https://icourse.club/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 40]
topics: ["ustc", "flask-sqlalchemy-web", "ustc-course"]
stars: 278
forks: 67
openIssues: 3
closedIssues: 14
watchers: 18
contributors: 13
recentReleases: 0
createdAt: "2015-03-09T13:28:56Z"
lastCommitAt: "2026-07-23T06:13:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 26
maintainers: ["bojieli"]
openGraphImageUrl: "https://opengraph.githubassets.com/31abb04822b578685791f2827ee25ec680160c55ca468525f19a3c0c15d8cfa3/USTC-iCourse/ustc-course"
---

# USTC Course Rating Community

USTC Course Rating Community is a web system developed using Python 3 + Flask + SQLAlchemy.

## Installation

Before installing this system, please first install:

1. Python 3
2. MySQL 5.7+
3. Nginx

### Configuration and Database Creation

Add the following lines to the end of the MySQL configuration file (e.g. ```/etc/mysql/my.cnf```), and restart the database (e.g. ```service mysql restart```).

The purpose of these lines is:

- Set the database to use utf8mb4 as the default connection character set and storage character set to avoid garbled characters and support emojis.
- Set the minimum word length for MySQL full-text search to 1 to support Chinese search.
- Disable stopword settings.

```
[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
collation-server = utf8mb4_unicode_ci
init-connect='SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci'
character-set-server = utf8mb4
innodb_ft_min_token_size = 1
ft_min_word_len = 1
innodb_ft_enable_stopword = OFF
ft_stopword_file = ''
```

Then create the database: ```mysql -u root -p``` to enter the MySQL console.

```CREATE DATABASE icourse;```
If the database is created…
