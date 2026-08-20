---
repo: "murexide-project/Murexide"
name: "Murexide"
description: "一个云湖第三方客户端"
readmeQualityOk: true
url: "https://github.com/murexide-project/Murexide"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 17
forks: 5
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-29T17:02:14Z"
lastCommitAt: "2026-08-20T04:09:25Z"
lastReleaseAt: "2026-07-19T07:28:29Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 53
maintainers: ["GinHsYr", "shijuhao"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1253636415/42520efa-1d65-4a0d-ae9a-3c05a9e64e02"
---

# Murexide

一个云湖第三方客户端，采用 Material 3 设计 

# 构建

项目使用 litehtml 原生子模块渲染静态 HTML 消息。克隆后先初始化子模块：

```shell
git submodule update --init --recursive
```

Android 构建环境需要 CMake 3.22.1 和 NDK 28.2.13676358。

连接 API 23+ 真机或模拟器后，可运行 100 条静态 HTML 消息滚动基准：

```shell
./gradlew :benchmark:connectedBenchmarkAndroidTest
```

# 声明
此项目（Murexide）仅为个人兴趣开发, 只可用于学习和测试，请于下载后24小时内删除。 所用API皆从官方网站收集, 不提供任何破解内容。

# 已经实现的功能
- [x] 手机号 / 邮箱登录
- [x] 显示会话
    - [x] 显示普通会话
    - [x] 显示置顶会话
    - [x] 消息红点
    - [x] 免打扰状态
    - [ ] 官方/城市群标识
- [x] 查看消息
    - [x] 解析文本消息
    - [x] 解析 Markdown 消息
    - [x] 解析图片消息
    - [x] 解析表情消息
    - [x] 解析文件消息
    - [x] 解析HTML消息
    - [x] 解析文章消息
    - [ ] 解析语音消息
    - [x] 解析视频消息
- [x] 发送消息
    - [x] 文本 / Markdown / HTML
    - [x] 表情包
    - [x] 图片 / 视频 / 文件
- [x] 查看机器人看板
- [x] 修改群聊设置
- [x] 修改我的群名称
- [x] 修改个人资料
- [x] 撤回/编辑消息
- [x] WebSocket 实时通讯
- [x] 引用消息
- [x] 查看会话详情
- [x] 社区
    - [x] 查看帖子
    - [x] 查看我的帖子
    - [x] 点赞帖子
    - [x] 收藏帖子
    - [ ] 评论帖子
