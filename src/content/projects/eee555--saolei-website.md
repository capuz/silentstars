---
repo: "eee555/saolei_website"
name: "saolei_website"
description: "开源扫雷网是专业玩家建设的扫雷排名网站。在这里，你可以上传扫雷录像参与全球排名；也希望有开发能力的雷友可以发挥专业能力，为网站贡献代码、增加功能。Open minesweeper website is a community-built ranking website for minesweeper. Here, you can upload minesweeper videos to participate in global rankings. We also encourage minesweeper enthusiasts with development skills to contribute and add new features to us."
readmeQualityOk: true
url: "https://github.com/eee555/saolei_website"
homepage: "https://openms.top"
language: "Vue"
languages: ["Vue", "TypeScript", "Python"]
languagePcts: [35, 31, 28]
stars: 11
forks: 13
openIssues: 4
closedIssues: 15
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2023-08-30T10:05:39Z"
lastCommitAt: "2026-07-31T06:31:44Z"
lastReleaseAt: "2025-03-24T10:46:14Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 85
maintainers: ["putianyi889", "dependabot[bot]", "eee555"]
openGraphImageUrl: "https://opengraph.githubassets.com/487c6cceb0a5afb4af958ade93e03953f91f27367fb65a70ad8bad0a60eeb88c/eee555/saolei_website"
fundingLinks: ["CUSTOM:https://github.com/eee555/saolei_website?tab=readme-ov-file#%E8%B5%9E%E5%8A%A9"]
---

# <a href="https://github.com/eee555/saolei_website" >开源扫雷网（Open Minesweeper）</a>

[English](https://github.com/eee555/saolei_website/blob/HEAD/Readme_en.md)

开源扫雷网（Open Minesweeper）成立于2023年12月3日，是一个由资深扫雷玩家志愿开发与维护的​​非营利性扫雷录像排名网站​​。与传统的中心化网站相比，开源扫雷网秉承​​社区驱动​​的核心理念，构建的是一个开放的协作生态。欢迎​​开发者、赞助者、赛事主办方​​乃至​​每一位用户​​的加入。

前端：Vue3 + Ts + Element-ui + wasm  
后端：Django + Mysql + redis  
部署：Nginx + uwsgi + acme.sh  
安全：百度大脑  

## 项目安装流程：

本项目可在windows上开发，在Linux上部署。开发调试步骤如下：首先将项目克隆到本地，例如E://saolei_website下

后端：
1. cd saolei_website\back_end\saolei
1. pip install -r requirements.txt
1. 安装mysql，根据saolei_website\back_end\saolei\saolei\setting.py中的配置，（默认）创建名为saolei的数据库，用户名root，密码123456
1. 新建一个文件夹saolei_website\back_end\saolei\logs（用来存放日志）
1. 新建一个文件夹saolei_website\back_end\saolei\assets（存放录像、头像、文章）
1. （可选，假如需要看文章）在saolei_website\back_end\saolei\assets下执行`git clone https://gitee.com/ee55/saolei_website_article.git`，并将文件夹名由saolei_website_article改为article
1. python manage.py makemigrations
1. python manage.py migrate userprofile
1. python manage.py migrate
1. python manage.py runserver --nostatic
1. （可选，假如要启动定时任务，不做相关功能时可以不启动）
   ```
   python manage.py runapschedulermonitor
   python manage.py…
