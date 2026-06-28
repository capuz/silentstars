---
repo: "xiaohuliming/KOOK-play-system"
name: "KOOK-play-system"
description: "基于flask开发的kook陪玩店后台管理操作系统，带有kookbot管理功能"
url: "https://github.com/xiaohuliming/KOOK-play-system"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [58, 41]
stars: 43
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T02:57:20Z"
lastCommitAt: "2026-06-28T03:10:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 26
maintainers: ["xiaohuliming"]
openGraphImageUrl: "https://opengraph.githubassets.com/e42b5c85875e60a12ad2a5ae643e80cfcc0f4b18b61c5b47d534e1c92431adb7/xiaohuliming/KOOK-play-system"
---

# 嗯呢呗电竞 - KOOK 陪玩店系统

基于 Flask + MySQL + KOOK Bot 的陪玩店中控系统，包含订单、礼物、财务、提现、抽奖、播报、用户/身份管理等功能。

## 主要功能

- 账号与身份管理：支持主角色 + 身份标签（老板/陪玩/客服可并存）
- 订单中心：建单、派单、报单、确认、退款、删除未付款订单
- 礼物中心：礼物配置、赠送/退款、礼物播报、礼物图片播报
- 财务中心：余额变动、提现申请与审批、双收款码（微信/支付宝）
- 播报管理：充值/消费/礼物/升级/抽奖等模板化播报
- 抽奖系统：后台抽奖 + 机器人互动抽奖（`/发布抽奖`、`/结束抽奖`）
- KOOK 机器人：私信通知、卡片按钮、常用命令（`/help`、`/roll`、`/提现` 等）
- 定时任务：订单自动确认、打卡超时处理、抽奖自动开奖、参与人数更新

## 技术栈

- Python 3.11
- Flask 3
- SQLAlchemy + Flask-Migrate（Alembic）
- MySQL（默认库名：`peiwan_admin`）
- APScheduler
- khl.py（KOOK Bot）

## 项目结构

```text
app/
  models/           数据模型
  views/            页面与接口蓝图
  services/         业务服务（订单、礼物、KOOK推送、抽奖等）
  templates/        前端模板
  static/           静态资源与上传目录
bot/
  bot.py            KOOK 机器人命令入口
migrations/         数据库迁移
run.py              Flask 启动入口
init_db_data.py     初始化演示数据脚本
```

## 环境准备

1. 创建并激活虚拟环境

```bash
python3 -m venv .venv
source .venv/bin/activate
```

2. 安装依赖

```bash
pip install -r requirements.txt
```

3. 准备 MySQL 数据库

```sql
CREATE DATABASE peiwan_admin CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

4. 配置环境变量（建议使用项目根目录 `.env`）

## 环境变量说明

| 变量名 | 是否必填 | 说明 |
|---|---|---|
| `SECRET_KEY` | 建议 | Flask 会话密钥 |
| `DATABASE_URL` | 建议 |…
