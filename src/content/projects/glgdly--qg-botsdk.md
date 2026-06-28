---
repo: "GLGDLY/qg_botsdk"
name: "qg_botsdk"
description: "简洁、容易上手，适用于QQ官方频道机器人的Python轻量应用级SDK【已支持webhook、ws和远程webhook三种连接方式】"
url: "https://github.com/GLGDLY/qg_botsdk"
homepage: "https://qg-botsdk.readthedocs.io/zh_CN/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bot", "qq", "sdk"]
stars: 51
forks: 9
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-05-05T08:44:25Z"
lastCommitAt: "2026-06-28T03:12:26Z"
lastReleaseAt: "2022-06-09T10:33:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 36
maintainers: ["SaucePlum", "GLGDLY", "JaxonBurling"]
openGraphImageUrl: "https://opengraph.githubassets.com/62487ad97388baa665f91149f12867b4e6dadb7ae32896670f5f4750d18a6fab/GLGDLY/qg_botsdk"
discussionCount: 1
---

✨ 用于 QQ 官方频道机器人，兼顾实用与容易入门的 Python 应用级 SDK✨

[文档](https://qg-botsdk.readthedocs.io/zh_CN/latest/)
·
[例程](https://github.com/GLGDLY/qg_botsdk/tree/master/example)
·
[快速入门](https://qg-botsdk.readthedocs.io/zh_CN/latest/quick_start)

</div>

#### 引言

对于使用 python 进行频道官方机器人开发而言，市面上确实有不同的 sdk 可以选用，但其很多只提供异步 asyncio+类继承的开发方式，对于不会相关技巧的朋友们，尤其新手，会有开发难度。

为此，qg_botsdk 相应提供了另一个选择，这一款 sdk 虽然同样使用 asyncio 编写 sdk 底层，但其同时提供了 threading 和 asyncio 封装下的应用层调用，以抽象化封装的库编写方式，极大地降低应用层的开发难度。

#### 亮点

##### - 已支持 Websocket、Webhook、Remote Webhook（wh 转 ws 允许本地调试）三种连接方式

##### - 已支持 SDK 层面的沙箱处理，允许沙箱过滤外部消息、外部过滤沙箱消息；已支持频道、频道私信、群、QQ 私信四种沙箱过滤模式

##### - 两种应用层开发方式（threading、asyncio），可根据自己的喜好选择，而底层均为 asyncio 实现，保持高并发能力

##### - 灵活的构建方式，即使官方删除或新增字段，SDK 也不会规范于原来的数据格式，而会把真实数据反馈给你

##### - 轻量，简洁，统一的代码结构，通过录入回调函数处理不同事件，10 行即可构建一个简单的程序

##### - 容易入门，无需学会 asyncio、类继承等编程技巧也可使用，同时保留较高并发能力

##### - 保留官方 http API 中 Json 数据的结构字段，带你学习官方结构，日后可自行开发适合自己的 SDK

##### - 简单易用的 plugins 编写与加载，使用例子可参阅 [example_13(装饰器).py](<./example/example_13(%E8%A3%85%E9%A5%B0%E5%99%A8).py>)

##### - 方便多场景（频道+群等）构建机器人的抽象化封装，使用例子可参阅 [example_16(Q 群简单工作流).py](<./example/example_16(Q%E7%BE%A4%E7%AE%80%E5%8D%95%E5%B7%A5%E4%BD%9C%E6%B5%81).py>)

---

### 下载方式…
