---
repo: "muyuewang/qq-farm-bot-li"
name: "qq-farm-bot-li"
description: "Science-driven farming, supports QQ and WeChat QR-code login"
originalDescription: "科技興農，支持QQ、微信掃碼登錄"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/muyuewang/qq-farm-bot-li"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [51, 33]
stars: 45
forks: 14
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2026-09-08T08:15:18Z"
lastCommitAt: "2026-11-27T12:53:22Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 35
maintainers: ["muyuewang", "ccpopy", "liyangpengs"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2924961f52941bb7a100783118d50c73a2c6768d75fc1725eb4435046be0279/muyuewang/qq-farm-bot-li"
---

# QQ 农场多账号挂机 + Web 面板

基于 Node.js 的 QQ 农场自动化工具，提供多账号挂机、农场与好友自动化、独立图鉴与藏品、活动中心、商城、数据分析和 Web 控制面板。当前项目版本为 `20261117`，QQ 与微信游戏协议版本均为 `1.17.1.10_20261117`，两端独立维护版本配置和 TSDK/WASM。

> **Important**
>
> 首次启动会创建默认管理员 `admin` / `admin`，Web 面板默认端口为 `3007`。对外部署后请立即修改密码，并避免将未加防护的管理端口直接暴露到公网。

## 项目截图
|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

## 功能概览

### 账号与登录

- 游戏账号可无限添加并独立运行，每个账号可单独配置种植、好友、自动化和执行间隔策略
- 支持抓包 Code 登录、微信扫码登录和 QQ扫码登录
- 支持账号启停、状态监控、实时日志和离线提醒
- Web 面板只保留一个超级管理员，不提供注册、普通用户和租户隔离

### 农场自动化

- 自动收获、种植、浇水、除草、除虫、铲除和土地升级
- 自动施肥、多季作物补肥、指定土地类型施肥和化肥自动购买
- 支持一键务农、一键种植、一键收获、一键铲除和一键全收等面板操作
- 支持多种种植策略、背包种子优先级、作物黑名单和执行间隔配置
- 汇总任务、免费礼包、分享奖励、会员礼包、月卡礼包和图鉴奖励等每日状态，并按天自动处理支持的领取项

### 图鉴

- 在“个人 → 图鉴”中查看作物图鉴和超变图鉴的等级、进度及果实收藏状态
- 作物图鉴按游戏配置排序展示作物，收藏奖励统一放在详情弹窗中查看
- 超变图鉴依据 `Illustrated.json` 的 `param` 和 `type` 字段区分黄金果实、活动果实与装扮果实，不依赖果实名或协议奖励分类字段推断
- 超变属性弹窗顶部汇总当前生效加成，等级列表展示属性名称、触发概率或数量，以及已达成状态或所需进度
- 移动端图鉴使用四列果实布局，等级进度和弹窗样式与现有面板保持一致

### 好友互动

- 自动访问好友、偷菜、帮忙浇水、除草除虫及放草放虫
- 支持好友黑名单、安静时段和互动经验上限
- 支持已知好友 GID 的批量维护、同步参数和互动记录查询
- 好友巡查合并为单次访问：每位好友只进一次农场，一次做完帮忙（除草/除虫/浇水）、偷菜和捣乱（放草/放虫）
- 好友上场宠物按天缓存：进好友农场时顺手记录，另有后台分批的每日补齐，“护主犬经验满仍帮忙”不再每轮逐个进农场试探
- 面板可对指定好友执行单次访问或农场操作
