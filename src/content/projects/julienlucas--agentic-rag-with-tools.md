---
repo: "julienlucas/agentic-rag-with-tools"
name: "agentic-rag-with-tools"
description: "RAG agentique (Recherche, VérificateurPertinence, FactChecker). 96% de réponses correctes évalué sur FinanceBench 4 documents et 26 questions, avec citation des sources et indice de confiance"
readmeQualityOk: true
url: "https://github.com/julienlucas/agentic-rag-with-tools"
homepage: "https://agentic-rag-docchat.vercel.app"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 22]
topics: ["agentic-rag", "multi-agent", "rag", "langgraph", "bm25", "chromadb", "django", "evals"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-27T09:46:16Z"
lastCommitAt: "2026-09-29T08:10:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 59
maintainers: ["julienlucas"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a7192d4d130c55bb9a197b4d2869cd0784c292b82a3ce0a2a5d28f090916360/julienlucas/agentic-rag-with-tools"
---

# RAG Agentique évalué ~96 % de réponses correctes sur un sous-ensemble de FinanceBench

Si vous appréciez, ajoutez une ⭐ au repo pour soutenir mon travail. 🙏

Ce système RAG combine un récupérateur hybride (BM25 + embeddings + reranking Cohere), un routage
par document et un modèle de réponse équipé d'outils (`search` / `grep` / `read_page`), sur des
rapports SEC de 150 à 260 pages. Il est **mesuré** sur
[FinanceBench](https://github.com/patronus-ai/financebench), le benchmark utilisé par Mistral pour
évaluer Agentic Search (150 questions). Le résultat qui compte est l'ablation, à retrieval
strictement identique : **96,2 % de réponses correctes avec les outils, contre 76,9 % sans**, et
des hallucinations qui passent de 15,4 % à 3,8 %. Dix-neuf points gagnés par l'agent équipé, sur
le même index et les mêmes 10 passages initiaux. Le run complet coûte environ 1 € à relancer.
Tous les chiffres sont reproductibles à partir des sorties dans
`evaluation/financebench/outputs_sonnet5/` —
[résultats, coût et limites](#évaluation-financebench-documents-financiers-difficiles).

## Architecture IA à la base avant améliorations

### 1. **Agent Vérificateur de Pertinence**
Évalue si les…
