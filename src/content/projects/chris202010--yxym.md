---
repo: "chris202010/yxym"
name: "yxym"
description: "采集优选ip.proxyip"
url: "https://github.com/chris202010/yxym"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 19
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-09-30T13:15:54Z"
lastCommitAt: "2026-06-25T02:08:42Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 54
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/1000d06477c533209b733f8aec53993a18225446175f8049843265ee02968453/chris202010/yxym"
---

# github项目
- 原github作者[ tianshipapa ](https://github.com/tianshipapa)和
[ymyuuu](https://github.com/ymyuuu/BestDomain)
- 老王只是合并两个项目
- github项目地址

https://github.com/jc-lw/youxuanyuming

![image.png](https://img.kjzl.me/images/18b0be4bca205491b1aaf70983319fe504bef426.png)




# cfipcaiji 原理和需要修改的地方

- 每3小时自动抓取  https://ip.164746.xyz 的优选ip，形成ip.txt 
- 还有js自动生成的https://cf.090227.xyz 
![image.png](https://img.kjzl.me/images/51e6dd9bbb99f98d3241509b804d98a4fc1fa5db.png)

- `collect_ips.py`文件 这里是抓取优选IP的网站，如需要可自行修改
![image.png](https://img.kjzl.me/images/38a3d57288da468b17964664e54da54a4175ba0e.png)


# BestDomain 需要Cloudflare API令牌

- 这里修改你的二级域名开头
![image.png](https://img.kjzl.me/images/85362a2f5680355d4d73a2293ce82099c42e3308.png)
![image.png](https://img.kjzl.me/images/5def5f757d7a63978358e5a950714bed3dc6c213.png)
- 把上面的链接 修改成 你自己的链接，因为你抓取优选ip可能跟我不一样。
![image.png](https://img.kjzl.me/images/52f07d0b88279fb13694e1071d3184082408cf3d.png)



1. 创建 Cloudflare API 令牌
访问 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)

2. 选择需要解析的域名，创建编辑 DNS 权限的` CF_API_TOKEN`…
