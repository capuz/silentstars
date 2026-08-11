---
repo: "sorry510/go_binance_futures"
name: "go_binance_futures"
description: "币安合约量化交易+自定义策略+新币抢购+价格预警通知"
readmeQualityOk: true
url: "https://github.com/sorry510/go_binance_futures"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["binance-futures", "binance-trader", "bitcoin", "bot", "crpyto", "crypto-trade-bot", "futures", "trade"]
stars: 223
forks: 46
openIssues: 0
closedIssues: 21
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2024-03-24T11:04:51Z"
lastCommitAt: "2026-08-11T04:48:50Z"
lastReleaseAt: "2024-11-01T14:43:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 26
maintainers: ["HaoZhengZhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8374baa345e922450dd0e06484d44add9b5b2c46eb880b2ff4a1fc33a9ba436/sorry510/go_binance_futures"
---

·
</p>

# 币安交易机器人

## 数据库更新
> 如果是第一次使用程序，配置好数据库之后，直接运行即可(会自动生成相应的数据表)，如果已经使用了一段时间，下载新版本程序后，可以把旧数据库文件(适用于 sqlite 驱动)直接放到 `db` 目录下，然后运行程序即可

## 特色

## 实时推送
> dingding, slack

- 钉钉

- slack

## 自定义交易策略

新版 UI 可在 `合约交易 → 策略模板` 中维护技术指标和策略方法，再到 `合约交易 → 合约交易` 为单个币种选择全局策略或自定义策略。

# 免责申明
>！！！本项目不构成任何投资建议，投资者应独立决策并自行承担风险！！！

# 功能

## 新版 Web UI

访问 `http://<服务器 IP>:<web.port>/zmkm/index.html`，登录后通过左侧菜单进入各功能页。登录账号和密码来自 `conf/app.conf` 的 `web.username`、`web.password`。

| 菜单 | 页面与用途 |
| --- | --- |
| 配置中心 | 管理合约交易、WebSocket、抢新、币种提醒、市场监听、资金费率监听、通知通道、调试推送和外部链接等全局开关与参数 |
| 合约交易 → 合约交易 | 按 `自选`、`USDT`、`USDC` 查看币种；新增、查询、批量编辑、全部开启或全部关闭币种配置 |
| 合约交易 → 合约订单 | 查询真实合约订单，可按币种和时间筛选 |
| 合约交易 → 合约账户 | 查看币安合约资产、持仓和当前挂单 |
| 合约交易 → 本地合约账户 | 查看程序记录的本地资产、持仓和挂单 |
| 合约交易 → 策略模板 | 新增和维护技术指标、策略方法模板 |
| 合约交易 → 测试结果 | 查询模拟交易结果，可按币种和时间筛选 |
| 合约交易 → 市场波动日志 | 查询和分组查看快速波动记录 |
| 币种提醒 → 现货提醒 / 合约提醒 | 配置到价提醒和可选的自动交易 |
| 市场监听 → 现货监听 / 合约监听 | 配置 K 线、阈值、技术指标和自定义策略监听 |
| 资金费率监听 | 查看资金费率并配置自动交易 |
| 抢新配置 | 配置现货、挖矿币和合约的新币抢购 |
| 系统配置 | 在线编辑 `conf/app.conf`，并提供保存、重启服务和停止服务按钮 |
| 日志 | 查看 `web.commend_log` 命令返回的服务日志 |

### 新版 UI 页面截图

截图使用当前新版 UI。涉及账户、订单、配置密钥和日志正文的页面只展示安全区域。

#### 登录

#### 配置中心

#### 合约交易

#### 合约订单

#### 合约账户

####…
