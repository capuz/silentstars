---
repo: "SilkageNet/mygardenworld"
name: "mygardenworld"
description: "Personal local automation prototype"
readmeQualityOk: true
url: "https://github.com/SilkageNet/mygardenworld"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [80, 20]
stars: 5
forks: 2
openIssues: 4
closedIssues: 40
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-19T17:18:05Z"
lastCommitAt: "2026-09-14T09:12:18Z"
lastReleaseAt: "2026-05-31T00:59:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 59
maintainers: ["SilkageNet"]
openGraphImageUrl: "https://opengraph.githubassets.com/58764eff29901c00db0b52d651ab9b016120ff9582292c1d5f3107bbbc9d2f09/SilkageNet/mygardenworld"
---

# 小云朵

个人自用的本地游戏自动化原型，由 `gardend` 守护进程和内嵌 Web 控制台组成。

> 本项目仅供学习和本人授权账号的本地使用，不保证功能完整性、正确性或长期可用性。使用者应自行遵守相关服务条款、平台规则和当地法律法规。

## 安装

Linux / macOS：

```sh
curl -fsSL https://raw.githubusercontent.com/SilkageNet/mygardenworld/main/scripts/install.sh | sh
```

Windows PowerShell：

```powershell
powershell -ExecutionPolicy Bypass -Command "iwr https://raw.githubusercontent.com/SilkageNet/mygardenworld/main/scripts/install.ps1 -UseB | iex"
```

也可以从 GitHub Release 下载对应平台的压缩包并运行其中的安装脚本。

## 启动

```sh
JWT_SECRET="$(openssl rand -hex 32)" \
ADMIN_PASSWORD="Use-A-Long-Local-Admin-Password-123!" \
gardend serve --listen 127.0.0.1:50051
```

打开 <http://127.0.0.1:50051>，使用管理员账号登录后添加游戏账号。默认管理员用户名为 `admin`。

目前仅支持 **iOS** 和 **Alipay**：iOS 使用游戏账号密码，Alipay 通过二维码自动完成授权。控制台按基础、花园、订单、公会、活动、仓库、统计和日志组织；读取状态通过一条 Protobuf WebSocket 推送，明确的账号与策略命令使用 Connect API。

已有账号可在账号详情中重新登录或更新凭据，无需删除重建。基础设置支持复制、粘贴完整 JSON 来导出、导入配置；导入校验后仍需手动保存，不改变账号启停状态。添加账号时，也可选择已有账号的已保存配置作为初始配置。

每位系统用户（包括 admin）只能查看和操作自己的游戏账号。顶部铃铛可配置个人通知，支持企业微信、钉钉、飞书群机器人和自定义 Webhook（可复制 JSON 示例及查看对接说明）；钉钉、飞书支持加签。默认关闭，一个渠道覆盖本人全部游戏账号，通知设置不随游戏配置复制。仅支持公网 HTTPS，推送请求保护、会话失效等重要状态，默认同类异常冷却 30 分钟；失败有限重试，自定义接收端可按 `id` 去重，投递记录保留 7 天。不推送无法归属到用户的全局错误。

公开兑换码中心位于…
