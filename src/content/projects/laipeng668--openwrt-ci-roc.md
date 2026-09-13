---
repo: "laipeng668/openwrt-ci-roc"
name: "openwrt-ci-roc"
description: "京东云（亚瑟&雅典娜&太乙）路由器满血NSS云编译，新增IPQ60XX、IPQ807X与x86-64机型！"
readmeQualityOk: true
url: "https://github.com/laipeng668/openwrt-ci-roc"
homepage: "https://forum.openwrt.org/t/qualcommax-nss-build/148529/8888"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 221
forks: 434
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2024-11-09T00:38:26Z"
lastCommitAt: "2026-09-13T08:29:20Z"
lastReleaseAt: "2026-06-26T16:20:49Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 76
undervaluedScore: 41
maintainers: ["laipeng668"]
openGraphImageUrl: "https://opengraph.githubassets.com/afb3708c11ce4d73033c91a94c1d5cbf9da6b00415c95ae54b54765edfd417d7/laipeng668/openwrt-ci-roc"
---

<h1>OpenWrt — 云编译</h1>

## 特别提示

- **本人不对任何人因使用本固件所遭受的任何理论或实际的损失承担责任！**

- **本固件禁止用于任何商业用途，请务必严格遵守国家互联网使用相关法律规定！**

## 项目说明
- 默认管理地址：**`192.168.2.1`**，默认用户：**`root`**，默认密码：**`none`**
- [云编译来源](https://github.com/haiibo/OpenWrt) [视频教程](https://www.youtube.com/watch?v=6j4ofS0GT38) [问题合集](https://github.com/LiBwrt/openwrt-6.x/issues)

## 仓库说明
- 本人 fork 的仓库：[ImmortalWrt](https://github.com/laipeng668/immortalwrt) [LibWrt](https://github.com/laipeng668/openwrt-6.x)，内容大体一致。
- `ImmortalWrt` 和 `LibWrt` 分别通过 rebase 和 merge 进行更新，相互印证。
- `LibWrt` 因为 DTS 更为丰富，所以支持更多的机型。

## 定制固件
- 首先要登录 Github 账号，然后 fork 此项目到你自己的 Github 仓库。
- 修改 `configs` 目录对应的文件添加或删除插件，或者上传自己的 `xx.config` 配置文件。
- 不需要的软件包请把 `y` 改成 `n` ，仅在前面添加 `#` 是无效的。
- 插件对应名称及功能请参考恩山网友帖子：[OpenWrt软件包全量解释](https://www.right.com.cn/FORUM/forum.php?mod=viewthread&tid=8384897)。
- 如需修改默认 IP、添加或删除插件包以及一些其他设置请在 `scripts/Roc-script.sh` 文件内修改。
- 固件构建只会拉取设备配置和 `configs/General.config` 中实际启用的第三方软件包，并始终使用对应分支的最新提交。
- 每次固件构建都会记录第三方仓库的实际分支和 commit，并在 Release 中附带 `<固件前缀>.third-party-sources.txt` 供核对；该记录文件不会写入固件。
- 添加或修改 `xx.yml` 文件，最后点击 `Actions` 运行要编译的 `workflow` 即可开始编译。
- 编译大概需要 1-2 小时，编译完成后在仓库主页…
