---
repo: "aaaaadrien/hermes"
name: "hermes"
description: "Création de mon chatbot avec support des outils annexes. (N'a aucun lien avec le Hermes Agent  de nousresearch)"
readmeQualityOk: true
url: "https://github.com/aaaaadrien/hermes"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-14T12:49:30Z"
lastCommitAt: "2026-09-12T08:02:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 41
maintainers: ["aaaaadrien"]
openGraphImageUrl: "https://opengraph.githubassets.com/53ad230267a2c05749bb31669e129daee469ee1c3ef3a9b7417bd5f307c82ef7/aaaaadrien/hermes"
---

# Chatbot perso avec gestion d'outils (testé avec llama.cpp) 

- Agent conversationnel en Python connecté à un modèle LLM tournant en local via **llama.cpp**.
- Disponible en deux interfaces : **terminal (CLI)** et **web (Streamlit)**.
- Expérimentation de l'usage de tools, nécessite un modèle compatible.

__Pourquoi Hermès ?__

Dans la religion grecque antique, Hermès est le messager des dieux. Quoi de mieux pour nommer un outil qui est le messager de l'IA :)

## Fichiers

- hermes.conf : Configuration partagée
- hermes-cli.py : Interface en ligne de commande
- hermes-web.py : Interface web Streamlit

## Prérequis pour Hermes

### Sur le système 

- Python **3.9+**
- python-pip (Fedora/RHEL/Debian/Ubuntu : **python3-pip**)
- Python venv (Inclus dans Python sur Fedora/RHEl. Pour Debian/Ubuntu : **python3-venv**)

### Création d'un venv Python 

Pour isoler les dépendances python, créer un virtual env :
```bash
python3 -m venv venv
source venv/bin/activate
```

Mettre à jour pip :
```bash
pip install --upgrade pip
```

### Installation des dépendances

Via pip (universel)
```bash
pip install -r requirements.txt
```
- Gestion LLM : openai
- Requêtes LLM et externe : requests
-…
