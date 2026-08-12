---
repo: "zhamao-robot/zhamao-framework"
name: "zhamao-framework"
description: "协程、高性能、灵活的聊天机器人 & Web 开发框架（炸毛框架）"
readmeQualityOk: true
url: "https://github.com/zhamao-robot/zhamao-framework"
homepage: "https://framework.zhamao.xin"
language: "PHP"
languages: ["PHP"]
languagePcts: [95]
topics: ["php", "cqhttp", "cqhttp-php-sdk", "qqbot", "coolq", "coroutine", "http-server", "swoole", "onebot", "framework"]
stars: 165
forks: 24
openIssues: 8
closedIssues: 71
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2018-03-27T12:54:30Z"
lastCommitAt: "2026-08-12T05:15:31Z"
lastReleaseAt: "2020-06-05T05:41:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 34
maintainers: ["crazywhalecc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a001e2d2b52e3204df0874f69ce69a4e6adea177b5757e81daac2162ca8b7d90/zhamao-robot/zhamao-framework"
discussionCount: 4
---

<h2>炸毛框架</h2>
  炸毛框架 (zhamao-framework) 是一个高性能的聊天机器人 + Web 服务器开发框架<br><br>

  </a>

  </a>

  </a>

  </a>

  </a>

  </a>
</p>

</div>

开发者 QQ 群：**670821194** [点击加入群聊](https://jq.qq.com/?_wv=1027&k=YkNI3AIr)

**如果有愿意一起开发框架本身的开发者，请提出 PR 或 Issue 参与开发！如果对框架本身的核心设计有更好的想法，可与作者成立开发组（目前仅 2 人），参与 OneBot V12 生态和框架本身的开发。**

**相关正在进行的版本任务见 Projects 一栏！**

## 简介

炸毛框架使用 PHP 编写，主要面向 API 服务，聊天机器人，包含 Websocket、HTTP
等监听和请求库，用户代码采用模块化处理，使用注解可以方便地编写各类功能。

框架主要用途为 HTTP 服务器，机器人搭建框架。尤其对于聊天机器人消息处理较为方便和全面，提供了众多会话机制和内部调用机制，可以以各种方式设计你自己的插件。

```php
#[\BotCommand('你好')]
public function hello(\BotContext $ctx) {
  $ctx->reply("你好，我是炸毛！"); // 简单的命令式回复
}
#[\Route('/index')]
public function index() {
  return "<h1>hello!</h1>"; // 快速的 HTTP 服务开发
}
```

## 开始

框架目前支持 Linux、WSL、macOS、Windows 环境直接运行，其中 Linux、macOS 环境可直接使用下方一键安装脚本。

> 如果你想在其他环境安装部署，可使用 Docker 快速部署或手动安装环境后安装框架，详见文档。

```bash
# Linux、macOS 下一键检测 PHP 环境、安装框架
bash <(curl -fsSL https://zhamao.xin/v3.sh)

# 启动框架
cd zhamao-v3
./zhamao server
```

一键安装脚本还有可以自定义参数的方式，比如：

```bash
# 脚本默认会检测系统的PHP，如果想直接跳过检测，安装独立的PHP版本，则添加此环境变量
export ZM_NO_LOCAL_PHP="yes"
# 脚本如果安装独立版本PHP，默认版本为8.1，如果想使用其他版本，则添加此环境变量指定版本
export ZM_DOWN_PHP_VERSION="8.2"
# 脚本默认会将框架在当前目录下的…
