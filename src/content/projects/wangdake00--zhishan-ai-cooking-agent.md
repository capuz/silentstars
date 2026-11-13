---
repo: "Wangdake00/zhishan-ai-cooking-agent"
name: "zhishan-ai-cooking-agent"
description: "智膳 AI is a multimodal conversational Agent application for everyday cooking. Users can upload photos of ingredients or type text requests. The system automatically recognizes intent and calls the matching tools (recipe knowledge base retrieval, nutrition calculation, shopping list generation, web search, recipe favoriting), and returns results in a streaming fashion.  What sets this project apart from an ordinary demo is that it does not use `create_react_agent` as a one-line shortcut. Instead, it hand-builds a **three-path explicit workflow** on LangGraph `StateGraph`, with intent routing, toolsets, and System Prompts isolated per node. It also implements engineering designs such as **closure-level user identity binding**, **full-chain RAG degradation**, and **two-layer anti-hallucination for tool parameters**, so the Agent stays controllable, usable, and within its permissions during open-ended conversation."
originalDescription: "智膳 AI 是一个面向日常烹饪场景的多模态对话 Agent 应用。用户可以上传食材照片或输入文字需求，系统自动识别意图并调用对应工具（菜谱知识库检索、营养计算、购物清单生成、联网搜索、食谱收藏），以流式方式返回结果。  与普通 Demo 的区别在于：本项目不是用 `create_react_agent` 一把梭，而是基于 LangGraph `StateGraph` 手写了**三路显式工作流**，意图路由、工具集、System Prompt 按节点隔离；同时实现了**闭包级用户身份绑定**、**全链路 RAG 降级**、**工具参数双层防幻觉**等工程化设计，保证 Agent 在开放式对话中可控、可用、不越权。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Wangdake00/zhishan-ai-cooking-agent"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [76, 23]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-07T16:14:13Z"
lastCommitAt: "2026-11-13T18:33:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 36
maintainers: ["Wangdake00"]
openGraphImageUrl: "https://opengraph.githubassets.com/2122109f642fc469ce3e79b8b5d6edb768f8e1f78acb664223e516f12805fd50/Wangdake00/zhishan-ai-cooking-agent"
---

# 智膳 AI｜Multimodal Intelligent Cooking Conversational Agent

> An intelligent cooking assistant that combines multimodal large models, six-stage RAG retrieval, an explicit LangGraph Agent Workflow, deterministic Grounding for anti-hallucination, and tool-calling capabilities. It supports recognizing ingredients from images, voice input, recipe recommendations, nutrition calculation, shopping list generation, one-click favoriting, and cross-session dietary preference memory.

## Project Overview

智膳 AI is a multimodal conversational Agent application for everyday cooking. Users can upload photos of ingredients, speak by voice, or type text requests. The system automatically recognizes intent and calls the matching tools (recipe knowledge base retrieval, nutrition calculation, shopping list generation, web search, recipe favoriting). It remembers users' long-term preferences such as dietary restrictions and allergies across multiple conversation turns, and returns results in a streaming fashion.

What sets this project apart from an ordinary demo is that it does not use `create_react_agent` as a one-line shortcut. Instead, it hand-builds a **three-path explicit workflow** on…
