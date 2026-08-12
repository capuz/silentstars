---
repo: "botuniverse/php-libonebot"
name: "php-libonebot"
description: "PHP 的 LibOneBot 库，助力 Onebot 多平台适配"
readmeQualityOk: true
url: "https://github.com/botuniverse/php-libonebot"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["libonebot", "onebot", "php"]
stars: 17
forks: 4
openIssues: 3
closedIssues: 17
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2021-09-03T08:28:54Z"
lastCommitAt: "2026-08-12T05:13:49Z"
lastReleaseAt: "2023-01-28T05:34:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 37
maintainers: ["crazywhalecc"]
openGraphImageUrl: "https://opengraph.githubassets.com/72131fe359db8affc1bd5595b6ab6b665f82044ccc5cac7b12f5580ef4205878/botuniverse/php-libonebot"
---

</a>
</p>

# php-libonebot

PHP 的 LibOneBot 库。LibOneBot 可以帮助 OneBot 实现者快速在新的聊天机器人平台实现 OneBot v12 接口标准。

基于 LibOneBot 实现 OneBot 时，OneBot 实现者只需专注于编写与聊天机器人平台对接的逻辑，包括通过长轮询或 webhook 方式从机器人平台获得事件，并将其转换为 OneBot 事件，以及处理 OneBot
动作请求，并将其转换为对机器人平台 API 的调用。

此外，内部的通信方式有相应的抽象方法，你可以在 libob 的基础上开发或整合其他 Web 框架。

**当前版本还在开发中，在发布正式版之前此库内的接口可能会发生较大变动。**

开发进度见 [更新日志](https://github.com/botuniverse/php-libonebot/blob/HEAD/docs/update.md)。

## 使用

```shell
composer require onebot/libonebot
```

## 尝试 Demo

在 require 下载 libob 库后，新建文件 `demo.php` 和 `demo.json`，并在 `demo.php` 中写如下代码：

```php
<?php

declare(strict_types=1);

require_once 'vendor/autoload.php';

$ob = new \OneBot\V12\OneBot('repl', 'qq', 'REPL-1');
$ob->setLogger(new \OneBot\Logger\Console\ConsoleLogger());
$ob->setDriver(
    // 此处也可以在 Linux 系统下安装 swoole 扩展后使用 SwooleDriver() 拥有协程能力
    new \OneBot\Driver\Workerman\WorkermanDriver(), 
    new \OneBot\Config\Repository('demo.json')
);
$ob->setActionHandlerClass(\OneBot\V12\Action\ReplAction::class);
$ob->run();
```

在 `demo.json` 中写如下代码：

```json
{
    "lib": {
        "db": false
    },
    "communications": {
        "http": {
            "enable": true,
            "host": "0.0.0.0",…
