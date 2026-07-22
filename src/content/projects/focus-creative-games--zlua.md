---
repo: "focus-creative-games/zlua"
name: "zlua"
description: "ZLua is a high-performance, rock-solid, and elegantly designed modern Lua solution for Unity, aggressively optimized for IL2CPP and .NET."
originalDescription: "ZLua is a high-performance, rock-solid, and elegantly designed modern Lua solution for Unity, ​​aggressively optimized​​ for IL2CPP and .NET.  ZLua是一个高效、稳定、优雅的针为il2cpp和.net 极致优化 的现代Unity lua脚本方案。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/focus-creative-games/zlua"
homepage: "https://www.zlua.cn"
language: "C++"
languages: ["C++", "C"]
languagePcts: [44, 42]
topics: ["hybridclr", "luban", "obfuz", "puerts", "slua", "tolua", "xlua"]
stars: 174
forks: 15
openIssues: 0
closedIssues: 5
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-05-25T10:57:24Z"
lastCommitAt: "2026-07-22T06:08:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 40
maintainers: ["pirunxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd61117e615345390bbca7d9b292f06a8959044e13dce7388a77454f42fcb373/focus-creative-games/zlua"
---

# ZLua

ZLua is a modern native Lua solution for Unity Il2Cpp that is aggressively optimized.

## Why Choose ZLua

- Extremely easy to use, simple, and elegant, unifying bidirectional calls between C# and Lua. Treats Lua as another type of `Native`, innovatively and clearly proposing the concepts of `[LuaInvoke]`, `[LuaCallback]`, and `[LuaMarshalAs]`. Completely shields developers from the underlying complex and error-prone operations of Lua.
- Extremely efficient. Embeds Lua in IL2CPP, bypassing the inefficient C# interaction interface between Lua and C#, allowing direct interaction between the IL2CPP and Lua virtual machines at the C++ level, optimizing the call overhead between C# and Lua by several times, even more than ten times.
- Completely solves the huge problem of traditional Lua solution wrappers. All field and property accesses directly access memory by offset, eliminating the need to generate wrapper functions, and all functions with the same signature share the same bridging function. No longer need to separately optimize the wrapper function issues.
- Dedicated maintenance. Timely follows up on Unity version changes, supports all Lua versions from 5.1 to 5.5,…
