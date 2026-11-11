---
repo: "punit2911/MedQueryDoc-AI-Intelligent-Medical-Document-Assistant"
name: "MedQueryDoc-AI-Intelligent-Medical-Document-Assistant"
description: "AI-powered medical document chatbot using LLaMA-2 and LangChain, enabling semantic search and question answering over PDF files via Pinecone vector indexing and a Flask-based interface."
readmeQualityOk: true
url: "https://github.com/punit2911/MedQueryDoc-AI-Intelligent-Medical-Document-Assistant"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [77]
topics: ["flask", "langchain", "llama2", "llm", "medical-chatbot", "pinecone", "python", "rag"]
stars: 33
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-17T13:52:28Z"
lastCommitAt: "2026-11-11T19:48:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 26
maintainers: ["punit2911"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1160060766/ec2e9a63-21ac-41b2-8682-50e0c7914aa9"
---

# 🩺 MedQueryDoc AI – Intelligent Medical Document Assistant 

**Stop Ctrl+F-ing through medical PDFs. Ask in plain English, get answers from Llama-2.**

## 📌 About the Project

This project is an AI-powered **medical document question-answering system** built using **Large Language Models (LLMs)** and **vector-based information retrieval**. It enables users to ask natural language questions and receive accurate, context-aware answers derived from medical PDF documents.

The system works by loading and splitting PDF documents into smaller chunks, generating vector embeddings using a Hugging Face embedding model, and storing them in **Pinecone**, a scalable vector database. During inference, user queries are matched against relevant document chunks using similarity search, and responses are generated using **LLaMA-2** through a retrieval-augmented generation (RAG) pipeline.

This project demonstrates practical implementation of **LLMs + LangChain + Vector Databases** for real-world AI applications.

### 🔄 How it works

```
PDFs → split into chunks → embeddings → Pinecone
                                          ↓
Your question → similarity search → top chunks → Llama-2 → answer…
