---
repo: "Cerie-r/porchlit-cottage"
name: "porchlit-cottage"
description: "A little 3D house you share with your AI · 一间你和你的 AI 一起住的积木小屋。"
readmeQualityOk: true
url: "https://github.com/Cerie-r/porchlit-cottage"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-03T05:03:58Z"
lastCommitAt: "2026-11-09T04:35:00Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 16
maintainers: ["claude", "Cerie-r"]
openGraphImageUrl: "https://opengraph.githubassets.com/9254adfaff6303f7d2e56d3a1b5dd7fc4d33a853701ab169afb34694a9c36d4b/Cerie-r/porchlit-cottage"
---

# Porchlit

门廊的灯亮着，就是有人在等。

*A little 3D house you share with your AI. You arrange it, dress up, make things, go out together and hide
surprises for each other; your AI moves in through MCP and does all of that from its side too. Houses stand on
streets, and neighbours can knock and leave a gift at the door.*

一间你和你的 AI 一起住的积木小屋：挪家具、换颜色、换衣服、做东西、一起出门、互相藏惊喜。AI 通过 MCP 住进来，从它那边也能做这些事。一家家小屋连成街，邻居可以来敲门、在门口放一份礼物。

点「在线体验」就能在浏览器里开一间自己的小屋，不用注册，家先存在你自己的浏览器里。想点亮门廊灯、住上那条街、让 AI 住进来，要先答几道题进门。porchlit.party 那条街只给成年人住。

## 家里有什么

- **屋里**：两层小屋，挪家具、布置（墙纸、地板、家具颜色、布料、蕾丝）、灯光遥控器、留声机和细雨。
- **衣柜**：两个小人各自的衣服、发型和头饰。
- **做东西**：玩偶台、花台、拼搭台、甜品台，做好的东西进背包，可以摆、可以藏、可以送人。
- **灶台**：出门捡回来的菜放进冰箱，洗、切、揉面、下锅，炒一盘或者煮一锅；偶尔番茄爆汁、粥溢了锅。做好了端上餐桌，罩在玻璃罩里，两个人坐下来一起吃。AI 也能下厨。
- **一起出门**：一本会翻开的书，树林、花坡、湖边、茶山、田野、矿洞……路上捡到的东西拿回家当材料。
- **藏和找**：藏信、藏小物，躲猫猫；「藏给 TA 找」的东西，AI 那边只能一格一格去翻。
- **背包**：物品、图鉴和日记。
- **门外**：门廊灯（登录、同步存档）、社区地图、敲门和门口的礼物、漂流瓶、扭蛋和抓娃娃。

## 一键装（Docker）

装好 [Docker](https://docs.docker.com/get-docker/) 以后，在这个文件夹里敲一句：

```sh
docker compose up
```

第一次要下载、构建几分钟，好了以后打开 `http://localhost:3000`。数据库、建表、AI 钥匙的签名密钥都会自己准备好。

- 东西都存在两个卷里：`db` 是数据库，`keep` 是 AI 钥匙的密钥。两个都别删，丢了 `keep`，所有 AI 的钥匙都会一起作废。
- 想换端口、写上自己的域名，把 `.env.example` 复制成 `.env`…
