---
repo: "gjj-star/dsh-conversation-navigator"
name: "dsh-conversation-navigator"
description: "DSH 会话导航"
readmeQualityOk: true
url: "https://github.com/gjj-star/dsh-conversation-navigator"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cordis", "dsh", "dsh-plugin", "dsh-plugins", "ui"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-17T07:40:44Z"
lastCommitAt: "2026-08-25T04:10:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 39
maintainers: ["gjj-star"]
openGraphImageUrl: "https://opengraph.githubassets.com/666ac4d1647cafea1bd3dba432da3860bb63a31f677334d72c330e33f83b4b65/gjj-star/dsh-conversation-navigator"
---

# DSH 会话导航插件(dsh-conversation-navigator)

**DeepSeek Harness(DSH)Web 端会话导航面板**:在对话页**右侧**悬浮展示按轮折叠的对话大纲,点击任意节点平滑跳转,滚动对话时实时高亮当前阅读位置,步次徽标配色与内置"轨迹"视图统一。

纯浏览器插件(无宿主行为)、纯 JavaScript、零构建、零 npm 依赖(按钮/Tooltip 复用 DSH 内核 seed 的官方 primitives)。

> 完整截图见 [assets/screenshots](https://github.com/gjj-star/dsh-conversation-navigator/blob/HEAD/assets/screenshots)。其中「社区皮肤适配」两张为第三方皮肤下的效果(动漫女仆主题与君の名は主题),非插件自带。

## 功能

- **按轮折叠大纲**:默认只显示"第 N 轮 + 你的问题"列表,长对话一目了然
- **关键词过滤**:点击左上角搜索图标呼出输入框,只按「你的提问 + 助手实际回复文本」过滤(上下文、工具、命令、压缩、推理等不参与匹配),命中词高亮,列表文本自动定位到关键词处
- **展开/折叠步次**:点击轮次行右侧的箭头按钮(`▸ N`,展开时旋转为 `▾`)平滑展开/折叠该轮的步次明细(助手回复、工具调用、命令、压缩点等)
- **悬停查看全文**:鼠标在轮次行停留片刻,气泡显示该轮用户提问的完整原文,不再被单行截断
- **显示 / 隐藏轮次**:头部切换按钮一键切换两种风格——「显示轮次」为经典分组视图(压缩等系统事件与轮次同级加粗展示);「隐藏轮次」为极简视图,每一行统一为轨迹徽标 + 文本(用户 = 业务蓝、助手 = 紫罗兰、压缩 = 中性灰),搜索框展开时按钮自动让位
- **丝滑动效**:面板开合淡入淡出、步次展开/折叠高度过渡、过滤结果逐条级联淡入、折叠箭头旋转——全部纯 CSS 实现,零依赖
- **点击定位**:点击轮次主体或步次条目,平滑滚动跳转到对话中对应位置(不改变折叠状态)
- **加载更早 / 加载全部**:面板顶部两个按钮——「加载更早」向后翻一页、「加载全部」一键把所有历史轮次载入导航,之后可任意跳转(页面默认仍懒加载,只有点按钮才补载)
- **位置跟踪**:手动滚动对话时,面板自动高亮并跟随当前正在阅读的轮次
- **右侧定位**:面板锚定视口右侧,收起/展开左侧边栏时纹丝不动
- **回到最新 / 全部折叠**:面板底部两个快捷按钮
- **轨迹配色**:用户/插话 = 业务蓝、上下文 = 成功绿、助手 = 紫罗兰、工具 = 琥珀、压缩 = 中性灰(与内置轨迹视图一致的 `--dsw` 主题 token,自动适配明暗主题)
-…
