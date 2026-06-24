---
repo: "e5sub/mark-six"
name: "mark-six"
description: "这是一个基于 Flask 和原生前端技术构建的全功能 Web 应用。它旨在为用户提供香港和澳门地区的彩票历史数据查询、多维度数据可视化、多种策略的号码推荐以及一个集成的 AI 智能聊天室。"
url: "https://github.com/e5sub/mark-six"
homepage: "https://6.071717.xyz"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [53, 31]
stars: 25
forks: 10
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-17T00:13:21Z"
lastCommitAt: "2026-06-24T00:23:37Z"
lastReleaseAt: "2026-01-13T02:18:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 52
maintainers: ["e5sub"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bdb38b7fc38101c68a8d37b4d3a1653b1cbc2a11d163f328fb4dcc2274b799b/e5sub/mark-six"
---

# 彩研所 - AI 数据分析预测系统

一个基于 Flask 的香港、澳门六合彩数据分析与智能预测平台，包含用户系统、激活码机制、管理后台、历史开奖数据、策略预测、自动学习、通知推送和移动端 Flutter 应用。

## 许可协议

本项目采用 `PolyForm Noncommercial License 1.0.0`。

- 允许查看、复制、分发和修改代码
- 仅限个人学习、研究、测试和其他非商业用途
- 禁止将本项目或其修改版本用于商业用途

正式协议见 [LICENSE](./LICENSE)，中文说明见 [LICENSE.zh-CN.md](./LICENSE.zh-CN.md)。

## 主要功能

### 用户与权限

- 用户注册、登录、修改密码
- 激活码开通与有效期控制
- 激活码申请与管理员发放
- 可选 GitHub 登录、Turnstile 人机验证
- 管理员后台用户管理

### 数据分析

- 支持香港、澳门开奖记录
- 历史开奖数据查询与展示
- 号码、生肖、波色、单双等多维统计
- 用户维度预测记录和准确率统计
- 回测快照与策略表现排行

### 智能预测

- 多策略预测：热门、冷门、走势、综合、均衡、马尔科夫、机器学习、AI
- 预测记录自动保存
- 特码命中、平码/生肖命中统计
- 支持同一期多策略预测汇总
- 可选按用户差异化预测，关闭后同一期同策略使用统一号码

### 自动学习与优化

- 马尔科夫策略会学习转移概率、二阶转移、阶段转移、属性转移、失败反馈等信号
- 机器学习策略会参考其他本地策略近期表现，动态调整特征画像、运行画像、融合比例和集成偏好
- 新增自适应学习强度：
  - `responsive`：近期表现弱或样本不足时，提高近期权重并降低学习门槛
  - `balanced`：默认均衡模式
  - `conservative`：近期表现稳定时收紧学习强度，降低短期波动影响
- 管理后台支持策略自动优化，可按历史模拟回测择优调整参数
- 自动优化支持轻度、均衡、积极三档，并可配置最小提升阈值

### 通知与推送

- 站内通知中心
- 邮件通知
- Webhook、Telegram Bot、PushPlus、Bark 推送
- 预测汇总和命中通知支持球形号码展示
- 球形号码包含数字、生肖、红/绿/蓝波属性，站内通知和邮件样式同步

### 管理后台

- 激活码管理
- 激活码申请处理
- 系统配置管理
- 策略学习面板
- 预测记录和数据统计
- 自动优化开关与参数配置

### 移动端支持

- 提供移动端 API
- Flutter 移动端位于 `mobile/mark_six`
- 支持移动端登录、注册、激活、预测、预测记录、统计和通知相关数据

## 技术栈

### 后端…
