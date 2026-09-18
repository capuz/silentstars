---
repo: "525815266/YYB-Go-Enhanced"
name: "YYB-Go-Enhanced"
description: "应用宝协议服务，支持扫码登录、账号与 OpenID 管理、wx.login code 获取、Token 自动续期，以及 Docker 和青龙部署。"
readmeQualityOk: true
url: "https://github.com/525815266/YYB-Go-Enhanced"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 258
forks: 142
openIssues: 6
closedIssues: 42
watchers: 2
contributors: 3
recentReleases: 7
createdAt: "2026-07-30T09:37:13Z"
lastCommitAt: "2026-09-18T14:02:52Z"
lastReleaseAt: "2026-09-18T01:26:37Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 34
maintainers: ["525815266", "lcmovie"]
openGraphImageUrl: "https://opengraph.githubassets.com/1075fdb7fe5c82d948af69a9f81f40b415b77fdcd6560e0eb28fe5457f1bcbd4/525815266/YYB-Go-Enhanced"
---

# YYB Go Enhanced

主要功能变化请查看 [更新日志](https://github.com/525815266/YYB-Go-Enhanced/blob/HEAD/CHANGELOG.md)。

登录后的控制台顶栏会显示当前运行版本、构建 commit 短 SHA 和构建时间；点击版本标识可进入发布页核对是否需要更新。源码直接运行时会显示 `dev`，并尽量读取 Go 构建时的 VCS 信息。

应用宝协议服务增强版，提供微信扫码登录、账号与 OpenID 管理、`wx.login` code 获取、凭据按需续期、带用户权限的 Web 控制台，以及 Docker 和面板接入。

## 功能

- 默认使用手机扫码添加账号，授权成功后显示账号 ID、OpenID 和存活状态；实验性本机微信快速授权默认关闭
- 扫码成功后可填写账号备注，并一键合并到面板 `YYB_SERVER`，重复操作不会产生重复账号
- 可为选中账号生成一次性扫码授权链接：更新链接只接受同一 OpenID，新增链接只接受系统中尚不存在的 YYB 账号；链接支持有效期并在成功使用后立即失效
- 管理分类新增“已激活短链接”：普通用户只管理自己的授权链接，管理员可查看全部；支持状态/类型筛选、复制打开、作废和删除；生成链接前会拦截同范围未消费链接，避免重复占用资源
- 授权链接与二维码会话分开计时：二维码过期或刷新页面只重新生成二维码，不消耗授权链接；手机误打开后可在电脑继续打开同一链接，直到成功授权或链接到期
- Web 控制台支持配置 **青龙面板** 与 **呆呆面板 (daidai-panel)** OpenAPI，支持自动识别与测试连接，且不会回传 Secret 明文
- Web 控制台管理账号并复制 OpenID
- 每个微信账号可独立选择直连、静态代理、动态代理 API，或命名的品赞/巨量供应商配置；支持按账号选择省市、HTTP CONNECT、SOCKS5、代理认证以及 `txt`、`json`、`json2` 响应
- 扫码时可根据手机定位或公网出口推荐代理省市；推荐不会自动覆盖配置，代理测试会显示实际出口地区并提示目标地区不一致
- 提供 `/wx/*` 和 `/wxapp/*` 两套兼容接口：小程序 code、用户信息、手机号、加密 Key、云函数、二维码授权、文章会话/扩展数据/点赞
- 应用宝短期凭据接近失效时由后台任务主动续期，业务调用失败时也会按需续期
- 重复扫码更新原账号，不再消耗新编号；授权后保存失败会清理本次新建的占位记录
- SQLite 持久化账号与协议会话
- 独立登录与注册页面，支持管理员、普通用户、用户启停、密码重置和会话管理
-…
