---
repo: "pinecone-io/pinecone-neo4j-explorer"
name: "pinecone-neo4j-explorer"
description: "Demo integrating Pinecone with Neo4j to analyze and explore Supreme Court cases."
readmeQualityOk: true
url: "https://github.com/pinecone-io/pinecone-neo4j-explorer"
language: "TypeScript"
languages: ["TypeScript", "Jupyter Notebook"]
languagePcts: [54, 29]
topics: ["demo", "knowledge-graph", "neo4j", "pinecone", "rag", "vector-database"]
stars: 10
forks: 5
openIssues: 16
closedIssues: 6
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2024-07-10T23:32:53Z"
lastCommitAt: "2026-08-28T15:31:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 56
maintainers: ["jhamon", "pinecone-groundskeeper[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96c2928c546b636b88e2340a72cbe6992aff61894989cc907610c96e5585a043/pinecone-io/pinecone-neo4j-explorer"
---

# Pinecone - Neo4j integration demo

### Supreme Court Case Analysis 

This project consists of several components for processing, analyzing, and exploring Supreme Court cases. The main components are:

1. MongoDB Database
2. Neo4j Account
3. Pinecone Account

## Setup

1. Clone the repository
2. Install dependencies:
   - In the root directory, install Python dependencies using Poetry:
     ```
     poetry install
     ```
   - In the `explorer` directory, install Node.js dependencies:
     ```
     cd explorer
     pnpm install
     ```
3. Set up environment variables in a `.env` file:
   - NEO4J_URI
   - NEO4J_USERNAME
   - NEO4J_PASSWORD
   - MONGODB_USERNAME
   - MONGODB_PASSWORD
   - MONGODB_HOST
   - MONGODB_DATABASE
   - PINECONE_API_KEY
   - OPENAI_API_KEY

## Data Processing

The data processing scripts are located in Jupyter notebooks:

1. `process_raw.ipynb`: Fetches and processes raw case data
2. `process_scotus.ipynb`: Processes SCOTUS cases and generates embeddings

## Running the Application 
Once you complete processing the data, you can start the application by running the following in the `explorer` directory:

```
pnpm dev
```
