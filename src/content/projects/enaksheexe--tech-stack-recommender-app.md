---
repo: "enaksheexe/tech-stack-recommender-app"
name: "tech-stack-recommender-app"
description: "AI-powered teach stack recommender that I build with Streamlit and my fine tuned Qwen 2.5 3B model) to help developers choose the optimal frontend, backend, database and deployment stack. "
readmeQualityOk: true
url: "https://github.com/enaksheexe/tech-stack-recommender-app"
homepage: "https://stackverse.streamlit.app/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [98]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-26T21:02:29Z"
lastCommitAt: "2026-11-01T22:59:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 23
maintainers: ["enaksheexe"]
openGraphImageUrl: "https://opengraph.githubassets.com/698da86dac565a2739e99f2126ae7476c08888ae647ed2b7ff98e1188c8ed635/enaksheexe/tech-stack-recommender-app"
---

# StackVerse: AI-Powered Tech Stack Recommender

**Live Demo:** [https://stackverse.streamlit.app/](https://stackverse.streamlit.app/)  
**My Fine-Tuned Model:** [`Enaksheexe/stackverse-llm`](https://huggingface.co/Enaksheexe/stackverse-llm)  
**Google Colab Training Notebook:** [](https://colab.research.google.com/drive/1ZG8qniX9LqgMO1hTtS3OCrNUMgiCK7eC)

I built StackVerse to help developers choose the right frontend, backend, database, and deployment tools based on their specific project requirements, constraints, and scalability targets. 

Instead of just building a generic prompt wrapper around a proprietary API, I created this application on top of my own custom fine-tuned `Qwen 2.5 3B` model (`Enaksheexe/stackverse-llm`), which I trained specifically to evaluate software architecture trade-offs and recommend practical tech stacks.

## My Motivation & Why I Built This

Whenever I start a new project, I noticed that choosing a tech stack often defaults to whatever is currently trending rather than what actually fits the system architecture. Furthermore, when I asked general-purpose LLMs for stack recommendations, they gave me overly verbose, non-committal "it depends"…
