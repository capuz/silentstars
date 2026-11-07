---
repo: "ArteVisualenVivo/fabric-pipeline-express-7"
name: "fabric-pipeline-express-7"
description: "Event-driven OneLake pipeline with automated Upsert merge and Python reporting"
readmeQualityOk: true
url: "https://github.com/ArteVisualenVivo/fabric-pipeline-express-7"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["activator", "data-engineering", "data-factory", "data-pipeline", "delta-lake", "dp-600", "dp-700", "etl", "event-driven", "francais"]
stars: 82
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-06T14:14:02Z"
lastCommitAt: "2026-11-07T13:54:44Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 15
maintainers: ["ArteVisualenVivo", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1448345885/71a24bcf-75a3-4cec-820d-1194eace5ad7"
---

# Fabric Pipeline Express 7: Event-Driven OneLake Upsert Automation for Windows 11

### 📦 PowerShell Install Button

---

fabric-pipeline-express-7 implémente un pipeline Microsoft Fabric Data Factory entièrement événementiel : dès qu'un fichier de suivi de colis est déposé dans OneLake, le pipeline se déclenche automatiquement sans intervention manuelle. Il fusionne les enregistrements reçus dans une table Delta via une opération Upsert sur la clé shipment_id, garantissant qu'aucune ligne n'est dupliquée, même lorsqu'un fichier est rejoué. Une fonction Python hébergée dans Fabric analyse ensuite le nom du fichier et le volume de lignes traitées pour rédiger un compte rendu de vague, qui est publié dans Microsoft Teams. Le projet repose sur quatre activités — Set variable, Copy data, Functions et Microsoft Teams — orchestrées par un déclencheur OneLake, et inclut le code de la fonction, les expressions du pipeline et un guide PDF détaillant chaque étape.

## 🔧 Requirements

- Windows 10 or Windows 11
- PowerShell 5.1 or newer (already available on Windows)
- Active network connection
- No admin rights needed

## Features

- **Event-driven orchestration**: A trigger bound to…
