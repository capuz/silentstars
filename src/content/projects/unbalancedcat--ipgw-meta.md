---
repo: "UnbalancedCat/ipgw-meta"
name: "ipgw-meta"
description: "东北大学非官网跨平台校园网关客户端 IPGW-Meta"
readmeQualityOk: true
url: "https://github.com/UnbalancedCat/ipgw-meta"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-19T14:03:08Z"
lastCommitAt: "2026-08-30T00:43:41Z"
lastReleaseAt: "2026-03-24T10:54:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 37
maintainers: ["UnbalancedCat"]
openGraphImageUrl: "https://opengraph.githubassets.com/de89c3d70cc91eaef024a2b0704309ddfe0ffc89bf62226491a465d09355d566/UnbalancedCat/ipgw-meta"
---

</p>

<h1 align="center">IPGW-Meta</h1>

> [!WARNING]
> 本仓库正在执行 `IPGW-META-V1` 收敛计划，当前不是可发布的 v1。历史敏感数据清理、远端协调和真实校园网候选版本验收尚未完成；在这些门禁关闭前不会发布新版本。当前代码可用于审阅、开发和合成测试，但“今天能登录”不等同于发布证据。

## 项目定位

IPGW-Meta 是对 [`neucn/ipgw`](https://github.com/neucn/ipgw) 工作流的下一代升级。项目采用一个公开 Go SDK、内部 NEU/CAS/Srun/Dashboard 协议边界和三套薄入口，重点解决旧实现中的明文 ticket、成功误判、凭据落盘、错误退出码和接口漂移问题。

当前设计坚持以下安全边界：

- status、activation、logout 和认证材料只走正常系统 PKI 验证的 HTTPS；不提供跳过证书或自动 HTTP 降级开关。
- CAS 保留已注册的 HTTP service 字符串，但程序会在带 ticket 的下一跳发出前截获它；ticket 只交给 HTTPS activation。
- 登录成功要求网关业务成功、最终状态在线且最终用户名与目标账号精确一致；公网可访问不是成功证据。
- YAML 只保存 profile 与 credential provider 引用，不保存密码。Base64 是编码，不是加密，也不再作为凭据保护方案。
- JSON、日志、Observer、缓存和诊断不得包含密码、手机号、验证码、Cookie、ticket、LT、QR payload 或原始认证响应。

完整规范以 [`docs/`](https://github.com/UnbalancedCat/ipgw-meta/blob/HEAD/docs/README.md) 为唯一事实源；当前进度见 [`docs/upgrade/status.md`](https://github.com/UnbalancedCat/ipgw-meta/blob/HEAD/docs/upgrade/status.md)。

## 三个入口

| 二进制 | 用途 | 无参数行为 |
|---|---|---|
| `ipgw-meta` | v1 现代命令入口 | 只读查询状态，不隐式登录或注销 |
| `ipgw-legacy` | 1.x 兼容入口 | 保留旧版无参数登录工作流；最早在 2.0 移除 |
| `ipgw` | 安装级分发器 | 选择并启动同目录下的 meta 或 legacy；自身不处理网络和凭据 |

`ipgw` 的模式选择优先级固定为：

```text
--mode > IPGW_MODE > OS…
