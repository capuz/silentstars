---
repo: "Arnab758/ai-gateway"
name: "ai-gateway"
description: "AI-Gateway reverse proxy that uses semantic caching and aims to reduce LLM API bills and token costs by 40-70%."
url: "https://github.com/Arnab758/ai-gateway"
homepage: "https://arnab758.github.io/ai-gateway/"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [52, 48]
topics: ["ai-agents", "api-gateway", "golang", "llmops", "token-optimization", "token-usage", "tokenization", "redis", "semantic-caching"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-08T05:39:52Z"
lastCommitAt: "2026-06-27T06:24:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Arnab758"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0b00ab4d0faf537f716afad9b30abd9246c6807d704b84d12e9d95b5bea0f22/Arnab758/ai-gateway"
discussionCount: 1
---

# AI Gateway

**Cut your LLM API costs by 40-70% with zero code changes.**

A semantic caching layer that sits between your app and AI providers (OpenAI, Groq, etc.). When you ask a similar question twice, it returns the cached answer instantly instead of calling the API again.

## 🎯 What Problem Does This Solve?

You're building an AI app and your API bill is $500/month. 40-70% of that is for **repeat questions**:
- "What is RAG?" asked 100 times = 100 API calls
- "How do I reset my password?" asked 50 times = 50 API calls

**With AI Gateway:** Those 150 calls become 2 calls (one for each unique question). You save $200-350/month.

## 💬 Feedback & Support

**How was your deployment experience?**

*Takes 30 seconds. Helps us improve AI Gateway for everyone.*

**What we want to know:**
- ⭐ How did deployment go? (Excellent / Average / Bad)
- 🐛 Any problems you faced?
- 💡 What features would you like to see?
- 📊 How much are you saving on API costs?

**Your feedback directly shapes the roadmap.**

---

## 🚀 Deploy in 60 Seconds (3 Options)

### Option 1: Railway (Recommended - Includes Redis)

**Steps:**
1. Click the button above
2. Sign in with GitHub
3. Enter your API key…
