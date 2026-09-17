---
repo: "LBXaaa/ensp-vbox-shim"
name: "ensp-vbox-shim"
description: "让原版华为 eNSP 直接运行在 VirtualBox 7.x 上,无需降级 VBox 或关闭 WSL2/Hyper-V"
readmeQualityOk: true
url: "https://github.com/LBXaaa/ensp-vbox-shim"
language: "PowerShell"
languages: ["PowerShell", "Python"]
languagePcts: [56, 22]
stars: 110
forks: 10
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-01T14:48:34Z"
lastCommitAt: "2026-09-17T08:51:49Z"
lastReleaseAt: "2026-09-17T07:42:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 35
maintainers: ["LBXaaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e6f4b5adefe095ad7884e81ea6a958664b06d40fd9d6947f7f41a632b2333d2/LBXaaa/ensp-vbox-shim"
discussionCount: 1
---

# ensp-vbox-shim

让原版 **华为 eNSP** 直接跑在 **VirtualBox 7.x** 上，底层是真实vbox
7.2.x 虚拟机引擎，全程不降级组件。

> 本工具开源于 https://github.com/LBXaaa/ensp-vbox-shim
> 若是付费获得，则为他人倒卖，请到上述地址免费下载。

## 为什么做这个

我在备考广东省职业技能等级认定《信息通信网络运行管理员》中级工，考试要求在
原版 eNSP 上操作。可我这台机器卡在一对矛盾上：eNSP 依赖的是 VirtualBox
**5.2**，而我日常离不开 WSL2/Hyper-V——只要开着这些虚拟化组件，VBox 5.2 在
现代 Windows（Win11、Win10 24H2 及以上）上**根本装不上**；偏偏这些组件我一个
都关不掉，5.2 这条路就这么堵死了。

网上流传的那些办法——降级 VirtualBox、改注册表、打补丁、换用 eNSP Pro——
大多要么挑系统版本，要么治标不治本，要么和现有环境冲突，要么干脆难以获取，
没一个撑得起稳定备考。

于是我写了这套二进制 COM 垫片：让原版 eNSP 直接运行在 VirtualBox 7.x 上，既不
降级任何组件，也不动本机的 WSL2/Hyper-V——对 eNSP 假装成 5.2，背地里把调用
翻译给真正的 7.2.x。

## 工作原理

三处改动，让 eNSP 把 7.2 当成 5.2：

1. **`VBox52.dll` 垫片**（放进 `eNSP\tools\`）—— 对外呈现 5.2 形状的
   `IVirtualBox` vtable，把每个槽位转发到重映射后的 7.2 方法；eNSP 经
   `GetVBoxInstance()` 或 COM 类厂拿到它。
2. **版本伪装** —— 注册表和进程内都把版本报成 `5.2.x`，放行 eNSP 的版本闸门
   （二进制实为 `7.2.x`）。
3. **`VAR_Plugin.dll` 补丁** —— AR 插件按写死的 5.2 偏移直接调 `IVirtualBox`，
   一个 28 站点的可逆补丁把偏移重映射到 7.2。

```
eNSP_Client.exe → eNSP_VBoxServer.exe → VBox52.dll (垫片) → VBoxSVC.exe 7.2.x
```

细节见 [架构](https://github.com/LBXaaa/ensp-vbox-shim/blob/HEAD/docs/architecture.md)、[vtable…
