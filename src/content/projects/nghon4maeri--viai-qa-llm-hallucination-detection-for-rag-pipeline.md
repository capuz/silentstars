---
repo: "nghon4maeri/ViAI-qa-llm-hallucination-detection-for-rag-pipeline"
name: "ViAI-qa-llm-hallucination-detection-for-rag-pipeline"
description: "Multi-class hallucination detection for LLM safety using contextual NLP classification. Supports experiment tracking with MLflow and model serving on Kubernetes using KServe."
readmeQualityOk: true
url: "https://github.com/nghon4maeri/ViAI-qa-llm-hallucination-detection-for-rag-pipeline"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [74, 20]
topics: ["ci-cd-pipeline", "hallucination-detection", "jenkins", "kubernetes-deployment", "multi-class-classification", "dvc-mlflow-pipeline", "gcp-storage", "gke-cluster"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-26T14:35:41Z"
lastCommitAt: "2026-11-27T16:28:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 56
maintainers: ["nghon4maeri"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3338388a5f45a6962dd99d69fa2a8c73629a92963f517808ae8431d141e2915/nghon4maeri/ViAI-qa-llm-hallucination-detection-for-rag-pipeline"
---

# ViAI-QA: LLM Hallucination Detection for RAG Pipelines

ViAI-QA checks the answers of Vietnamese RAG systems (medical domain) against their retrieved documents. It runs a hybrid detector (PhoBERT, NLI, NER and LLM signals fused into a LightGBM ensemble), an online guard, and a Claude judge agent for doubtful claims.

---

## Table of Contents

- [System Architecture](#system-architecture)

- [Tech Stack](#tech-stack)
- [Introduction](#introduction)
- [Problem Definition](#problem-definition)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [1. Local Development (Docker Compose)](#1-local-development-docker-compose)
  - [2. GKE Deployment (Terraform + Ansible)](#2-gke-deployment-terraform--ansible)
  - [3. CI/CD Pipeline](#3-cicd-pipeline)
- [Model Training](#model-training)
- [API Usage](#api-usage)
- [Monitoring & Observability](#monitoring--observability)
- [Configuration](#configuration)

---
