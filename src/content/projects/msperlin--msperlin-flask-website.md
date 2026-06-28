---
repo: "msperlin/msperlin-flask-website"
name: "msperlin-flask-website"
description: "my website"
url: "https://github.com/msperlin/msperlin-flask-website"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-10T20:46:20Z"
lastCommitAt: "2026-06-28T03:10:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 44
maintainers: ["msperlin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ee07281ad14c8aab9be7c537bcef9db640683c68d99b2b7a4f85b0e3af3c246/msperlin/msperlin-flask-website"
---

# msperlin-flask-website

This is the source code for the personal academic website of msperlin, built with **Flask** and **Python**. The site is designed to be easily maintainable by separating content (data) from the presentation (code/templates).

## 🚀 Quick Start (Local Development)

Follow these steps to run the website on your local machine.

### Prerequisites
*   Python 3.10+ installed.

### 1. Clone & Setup
```bash
# Clone the repository (if not already done)
git clone https://github.com/msperlin/msperlin-flask-website.git
cd msperlin-flask-website

# Create a virtual environment
python3 -m venv .venv

# Activate the virtual environment
# On Linux/MacOS:
source .venv/bin/activate
# On Windows:
# .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Run the Application
```bash
python app.py
```
The website will be available at **http://127.0.0.1:5000**.
Debug mode is enabled by default, so changes to code or templates will auto-reload the server.

---

## 📝 How to Edit and Maintain

Most of the content on this website is data-driven, meaning you don't need to edit HTML `templates` for routine updates. Instead, you modify JSON files in…
