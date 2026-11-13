---
repo: "HyxiaoGe/LingDraft"
name: "LingDraft"
description: "A conversational AI agent that can search, read, and answer with cited sources. It can view images and files, query the user's own knowledge base, and write finished work (documents, web pages, code) into files, with the right-hand pane showing the writing as it happens and each revision producing a new version. Built on LangGraph: create_agent + 16 custom middleware, parallel sub-agents, context compression designed around the prefix cache, multi-model and free-quota routing, and Postgres + pgvector."
originalDescription: "能搜、能读、回答标来源的 AI 对话 agent，能看图读文件、查用户的资料库、把成品写成文件出版本。基于 LangGraph：create_agent + 16 个自写中间件、并行子 agent、围着前缀缓存的上下文压缩、多模型和免费额度路由、Postgres + pgvector"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/HyxiaoGe/LingDraft"
homepage: "https://lingdraft.seanfield.org"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [71, 23]
topics: ["ai-agent", "context-engineering", "deepseek", "fastapi", "langchain", "langgraph", "llm", "long-term-memory", "multi-agent", "postgresql"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-02T06:41:15Z"
lastCommitAt: "2026-11-13T11:27:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: ["HyxiaoGe"]
openGraphImageUrl: "https://opengraph.githubassets.com/89349a9427c8f45984c8dfed6fac22a6e5c5b480f08c78d463a0e5cd86448bd4/HyxiaoGe/LingDraft"
---

# 灵稿 · LingDraft

From an idea to a piece of work you can be proud of.

An AI conversational agent that can search, read, and answer with cited sources. It can view images and files the user sends, and it can query the user's own knowledge base. When the user asks for a finished product, it writes documents, web pages, and code into files; the right-hand pane shows the writing as it happens, and each revision produces a new version. If it reaches a point that only the user can decide, it stops and asks, then continues once the user answers. It can also schedule work: say "send me an AI news digest every morning at 8," and when the time comes it runs another round on its own within that conversation, with the results kept for the user to read later. The main agent and sub-agents are both LangChain `create_agent`, with 16 custom middleware attached. The runtime layer is also custom: it handles queueing, stopping, interjections, pausing to ask the user a question, launching scheduled tasks on time, and resuming the event stream after a disconnect. It uses DeepSeek by default and connects directly to 7 other model providers; "auto" picks a model based on the first message.…
