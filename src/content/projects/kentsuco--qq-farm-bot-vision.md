---
repo: "KenTsuCo/qq-farm-bot-vision"
name: "qq-farm-bot-vision"
description: "Automate QQ Farm tasks with AI vision: harvest, weed, water, plant, and steal crops with CV-based bot control"
url: "https://github.com/KenTsuCo/qq-farm-bot-vision"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["chat", "chatbot", "compiler", "computer-vision", "deep-learning", "discord", "express", "language-models", "nodejs", "qq-farm"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-17T11:16:55Z"
lastCommitAt: "2026-06-23T23:17:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 39
maintainers: ["flh155", "redcatH", "KenTsuCo"]
openGraphImageUrl: "https://opengraph.githubassets.com/69d7c64b31330d35d8a3bdf6fe5f8a8a31ff78feb040b9ffdd43138783c46d5a/KenTsuCo/qq-farm-bot-vision"
---

# qq-farm-bot-vision
# QQ经典农场机器人（AI视觉版本）
## 基于CV视觉匹配的初版已开发完成，Alaph版本已发布，注意：这是早期测试版本，功能不全还在持续开发和优化中，主要是想让部分用户试用一下，协助测试BUG和提意见。
## 最新功能更新日志请查看：[update_cv.txt](./update_cv.txt)
## 试用过程中遇到问题可提issue：[issue问题区](https://github.com/flh155/qq-farm-bot-vision/issues)
## 技术交流可以进Discord：[农民交流频道](https://discord.gg/xbpVKG9wKw)

## 以下是CV版本的部署试用方法
### 备注：因这是测试版本，会存在很多问题以及功能的缺失，因此暂时不提供docker、exe等一键安装部署的方法使用，仅提供源码启动的方式，供一些有一定技术基础且愿意尝鲜的用户试用，后续待版本更新优化的比较完善且稳定后再提供一键部署的方案给大家使用，望理解

## ❗ 用前必读：
- 当前版本要求游戏窗口必须实时保持在前台，但可以被遮挡
- 当前版本已有初版GUI界面，如需使用请启动`python main_gui.py`
- 当前版本已实现`自动收菜`、`自动除草/除虫/浇水`、`自动种植（测试中）`、`自动偷菜`、`自动帮忙除草/除虫/浇水`、`自动领取每日免费化肥` 功能，相关功能在不断测试优化中
- 图像模板匹配可能会因各种因素导致匹配不到或是误匹配情况出现，需要根据使用情况调整相关参数阈值，阈值参数调整方法参考：[threshold_adjust.txt](./threshold_adjust.txt)
- 设置了按键监听便于快捷控制机器人，快捷键：`Ctrl+c`立马停止并退出机器人，`p` 临时暂停/恢复机器人巡检

---
## 分支说明
- ### ~~[silence-click分支](https://github.com/flh155/qq-farm-bot-vision/tree/silence-click)：将点击模式为了静默点击，要求游戏画面仍然在前端，但不会和用户抢鼠标进行点击，注意：这种模式下可能会存在被封号的风险，请各位自行决定是否使用，若使用了希望多观察反馈情况~~ (该分支已合并进main分支)
- ### [gui-pr分支](https://github.com/flh155/qq-farm-bot-vision/tree/gui-pr)：该分支提供给大家进行GUI界面的PR，项目默认GUI界面会比较简单，如果你有好的GUI界面设计，可以提交PR到这个分支（目前该分支暂时无提交）

---
## GUI界面展示

## 系统配置要求
- Windows…
