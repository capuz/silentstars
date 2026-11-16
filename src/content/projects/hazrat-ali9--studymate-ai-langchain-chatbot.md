---
repo: "Hazrat-Ali9/StudyMate-AI-LangChain-Chatbot"
name: "StudyMate-AI-LangChain-Chatbot"
description: "🐳 StudyMate 🐬 AI 🦋 LangChain 🐹Chatbot 🐙 is 🌺 an 💐 AI 🏵 powered 🍎 educational 🍋 assistant 🍏 built 🫑 with LangChain 🍑 and 🍔 Large 🌰 Language 🌽 Models 🚃 to ✈ deliver 🚀 personalized 🛫 context 🛸 aware 🚟 and 🚠 interactive 🚢 learning 🛼 experiences 🚁"
readmeQualityOk: true
url: "https://github.com/Hazrat-Ali9/StudyMate-AI-LangChain-Chatbot"
homepage: "https://github.com/Hazrat-Ali9/StudyMate-AI-LangChain-Chatbot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "ai-agents", "chatbot", "python-library", "lagachain"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-02T15:54:31Z"
lastCommitAt: "2026-11-16T04:26:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 16
maintainers: ["Hazrat-Ali9"]
openGraphImageUrl: "https://opengraph.githubassets.com/c47756533d2adc6c7ec7c3c7b92a484a1e7359a7800dc3bf2dbd808ecf9562c3/Hazrat-Ali9/StudyMate-AI-LangChain-Chatbot"
---

# StudyMate AI — LangChain Chatbot

StudyMate AI is a beginner-friendly chatbot built with Streamlit and the latest
LangChain Expression Language APIs. It routes questions to a specialized
assistant, creates several useful outputs concurrently, and returns a validated
Pydantic object.

## Features

- Streamlit chat interface with conversation history
- Groq chat model configured through a `.env` file
- `PromptTemplate` objects with dynamic question and history variables
- Programming, mathematics, and general routes with `RunnableBranch`
- Concurrent answer, summary, and keyword pipelines with `RunnableParallel`
- Strict, validated structured output using Pydantic `BaseModel`
- Optional **Clear chat** button
- Friendly missing-key and API error messages

## How the pipeline works

```text
User question
     |
     v
RunnableBranch
  |-- Programming prompt
  |-- Mathematics prompt
  `-- General prompt (default)
     |
     v
RunnableParallel
  |-- Routed detailed answer
  |-- Short answer / summary
  `-- Keywords
     |
     v
Structured-output model
     |
     v
ChatbotResponse (Pydantic validation)
     |
     v
Streamlit chat UI
```

### RunnableBranch…
