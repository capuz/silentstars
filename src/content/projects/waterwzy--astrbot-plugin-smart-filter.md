---
repo: "Waterwzy/astrbot_plugin_smart_filter"
name: "astrbot_plugin_smart_filter"
description: "An AstrBot filter for role play"
url: "https://github.com/Waterwzy/astrbot_plugin_smart_filter"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-01-09T01:20:17Z"
lastCommitAt: "2026-07-04T06:11:31Z"
lastReleaseAt: "2026-05-17T14:19:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 54
maintainers: ["Waterwzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f87844df656ef5c08eb8a28bfd4606d96a7c1f7486ce235de1ea4ffbf7b64f1/Waterwzy/astrbot_plugin_smart_filter"
---

# 用户输入审核管理插件

</p>

---

一个低侵入式，便于管理的 AstrBot 用户输入审核插件。

> [!TIP]
> 
> 更加适用于角色扮演类bot！

> [!WARNING]
> 
> 在插件更新v2.5.0以后，为正常加载Page所需要的AstrBot版本需要大于v4.26.0，如果你的插件在更新后无法启动请更新你的AstrBot。

## 核心亮点

- 低侵入式：用户在正常语境下与bot互动几乎不会感知到插件的存在。

- 跨平台管理：只需进行简单的配置，就支持跨消息平台进行管理操作。

- 高度定制化：不同于其他审核，通过支持自定义的审核提示词，让审核适应多种完全不同的语境，避免单一审核标准带来的高度不确定性。

- **语境低侵入** ：在审核出用户的异常行为后，**不会发出生硬的拦截提示消息**；支持通过其他人格进行**对高风险消息的特异化回复**，保持对话的沉浸性。

- 高效管理：集成封禁系统；用户发出的高风险消息会自动进行持久化记录，方便查询与进行封禁操作。

- **违规通知**：支持实时推送违规消息通知给管理员，发送失败自动重试，确保管理员及时了解违规情况。

- **Webui**：集成AstrBotPage，可以在与AstrBot管理面板的Page下可视化执行几乎所有命令。（查看消息，批量封禁，解封等）
  

### 特性详解

> 为了使用户更好地理解此插件的配置，这里会对插件的关键特点进行详细介绍

#### 最核心亮点：双 llm 机制

本插件需要用户配置两 个llm 和相应的人设，与本插件的审核思路密切相关。

本插件最大的特点是使用**两个 llm 模型**进行完整的审核流程：

- 第一个模型是**审核主模型**（建议为thinking模型），通过审查用户的输入判定是否违背人设中提供的标准。
  
- 第二个模型是**回复模型**，你可以选择换一个人设（例如A角色监听B角色的通话，在发现异常后切断了通话）针对异常的对话内容做出回复。
  

这种设计的目的是**提高审核的针对性**（相比于普通内容审核服务，llm 进行审核相对不那么黑盒），而且**不会有很强的语境破坏感**（用户能看到的可能就是另一个角色黑入了系统）。这也是本插件的核心亮点。

#### ISO8601持续时间表示

`ISO8601` 是一种规范的表示时间的格式。本插件使用 ISO8601 表示封禁持续时长。

一个ISO8601持续时间字符串可以是以下格式：

`P1Y2M3DT4H5M6S` 其中：

- `P` 代表周期，**必填。**
  
- `1Y` 为一年。
  
- `2M`…
