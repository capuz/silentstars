---
repo: "ATang007ZH/freenode"
name: "freenode"
description: "内容 base64 转换后保存，订阅才能识别"
url: "https://github.com/ATang007ZH/freenode"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-07-02T14:25:20Z"
lastCommitAt: "2026-06-28T01:36:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 70
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89e946416842ed630a2344d2808e0e3b285ab06a0e0c0cccb430a6324ee3864/ATang007ZH/freenode"
---

passwall使用建议:

	节点订阅，添加
		备注：myfreenode
		网址：https://cdn.jsdelivr.net/gh/ATang007ZH/freenode@main/freenode-base64
		开启自动更新订阅：勾选
		更新模式：循环
		更新间隔：1小时
		订阅网址访问方式：直连	【不要选自动，会用代理；直连里添加bgithub.xyz，否则会自动走代理导致无法更新。】

	规则列表，直连列表，添加: dgithub.xyz

	【配置多节点自动切换：】设置方法: https://github.com/ATang007ZH/Action-237-immortalwrt-mt798x-24.10/discussions/16 
	
  

~~updatechecker-pw.sh是passwall用的~~
----------------------------------------------
passwall新版代码已改进为先检测，有变化才执行更新。
且本身支持每小时更新。

所以passwall可以不用此代码了。

2025-1-13

updatechecker-hp.sh是homeproxy用的
----------------------------------------------
updatechecker-hp.sh使用方法：（-pw的类似）

ssh登录

上传updatechecker-hp.sh到目录：

/etc/homeproxy/scripts/

赋予执行权限

chmod +x /etc/homeproxy/scripts/updatechecker-hp.sh

openwrt里

添加计划任务：

*/15 * * * * /etc/homeproxy/scripts/updatechecker-hp.sh

备份，配置，里添加此文件：

/etc/homeproxy/scripts/updatechecker-hp.sh
