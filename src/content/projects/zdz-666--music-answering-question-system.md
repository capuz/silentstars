---
repo: "zdz-666/music_answering_question_system"
name: "music_answering_question_system"
description: "a music AQ system with rag"
originalDescription: "a music AQ system with rag"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zdz-666/music_answering_question_system"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-22T05:10:36Z"
lastCommitAt: "2026-10-03T09:23:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 22
maintainers: ["zdz-666"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb56362bde9ba2125f432f26488b9a98bf5f488561526d79df25166bef58b640/zdz-666/music_answering_question_system"
---

# Music Assistant (Music Chatbot)

A music knowledge Q&A system based on **RAG (Retrieval-Augmented Generation)**. The backend uses FastAPI + LangChain to orchestrate a complete pipeline of "Query Rewriting → Intelligent Routing → Vector/Web Retrieval → Reranking → Self-Reflection Filtering → Generation", with a React frontend providing a chat interface, and vector data persisted locally by ChromaDB.

---

## Features

- **Multi-Source Retrieval Fusion**: Supports both local knowledge base retrieval and web search simultaneously, with the LLM automatically deciding whether to query the knowledge base, search the web, or both based on the question, without manual switching.
- **Retrieval Reflection**: After retrieval, the LLM determines if the information is sufficient; if not, it performs additional retrieval rounds with reformulated queries, up to 2 supplementary rounds.
- **Query Rewriting**: Converts colloquial user questions into formal queries suitable for vector retrieval; performs separate keyword refinement before web searches.
- **Intelligent Routing (Collection Router)**: The LLM determines which collection(s) a question should query, supporting simultaneous matching…
