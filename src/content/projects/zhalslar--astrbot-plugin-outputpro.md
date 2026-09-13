---
repo: "Zhalslar/astrbot_plugin_outputpro"
name: "astrbot_plugin_outputpro"
description: "Astrbot输出管道：图片外显 → 报错处理 → 消息拦截 → 解析艾特 → 文本清洗 → 文本替换 → 错字模拟 → 文转语音 → 文转图片 → 智能引用 → 合并转发 → 自动撤回 → 分段回复"
readmeQualityOk: true
url: "https://github.com/Zhalslar/astrbot_plugin_outputpro"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 77
forks: 12
openIssues: 0
closedIssues: 26
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-08-15T13:57:07Z"
lastCommitAt: "2026-09-13T08:29:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 42
maintainers: ["Zhalslar", "Foolllll-J"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce7a0e7e8f6f53e41ad5df2fe79ca7426f65670fb965d3e02fdab3ffc47aa348/Zhalslar/astrbot_plugin_outputpro"
---

# astrbot_plugin_outputpro

_✨ 输出增强 ✨_  

</div>

> ⚠️ **v2.1.0 起配置结构已调整**  
>
> - 阶梯统一由 `pipeline.steps` 控制  
> - 是否仅对 LLM 生效由 `pipeline.llm_steps` 控制  
> - 升级后请重新确认勾选需要启用的步骤

## 🤝 介绍

OutputPro 作用于 AstrBot **发送前**的“最后一公里”，把一条消息从原始文本到最终呈现拆成 13 个可独立开关的阶梯。  
阶梯顺序 = 配置里的 `pipeline.steps`，默认自上而下执行：

| 序号 | 阶梯 | 配置名 | 功能一句话 | 可关闭 | 仅 LLM |
|----|----|----|----|----|----|
| ① | 图片外显 | `summary` | 图片在群列表显示“金句” | ✅ | ❌ |
| ② | 报错处理 | `error` | 拦截 / 转发异常消息 | ✅ | ❌ |
| ③ | 消息拦截 | `block` | 官腔 / 复读 / 超时拦截 | ✅ | ✅ |
| ④ | 解析艾特 | `at` | 假 @ 转真 @，概率保留 | ✅ | ✅ |
| ⑤ | 文本清洗 | `clean` | 去括号 / emoji / 前后缀 | ✅ | ✅ |
| ⑥ | 文本替换 | `replace` | 敏感词替换 | ✅ | ✅ |
| ⑦ | 错字模拟 | `typo` | 生成同音错字与纠正提示 | ✅ | ✅ |
| ⑧ | 文转语音 | `tts` | 模型 TTS / QQ 声聊中转 | ✅ | ✅ |
| ⑨ | 文转图片 | `t2i` | 长文转图（pillowmd） | ✅ | ✅ |
| ⑩ | 智能引用 | `reply` | 插嘴自动引用 | ✅ | ✅ |
| ⑪ | 合并转发 | `forward` | 超长消息转发/折叠 | ✅ | ❌ |
| ⑫ | 自动撤回 | `recall` | 关键词延迟撤回 | ✅ | ❌ |
| ⑬ | 分段回复 | `split` | 智能分段 / 打字延迟 | ✅ | ✅ |

> 想改顺序？把 `pipeline.lock_order` 设成 `false`，然后 UI 拖拽即可。  
> 想让某一步只对 LLM 生效？在 `pipeline.llm_steps` 里勾选对应阶梯即可。

---

## 🧩 各阶梯说明

---

### ① 图片外显（summary）

单张图片在群列表中不再显示 `[图片]`，而是随机显示一句“金句”。  
用于提升群聊列表的可读性与趣味性。

**特性说明：**

- 仅在 **aiocqhttp**…
