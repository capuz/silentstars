---
repo: "deepakguptabca/InstantPhotos"
name: "InstantPhotos"
description: "Get Ready Passport size photo in seconds "
readmeQualityOk: true
url: "https://github.com/deepakguptabca/InstantPhotos"
homepage: "https://instantphotos-4t2zkh.apps.sagyboar.space/"
language: "HTML"
languages: ["HTML"]
languagePcts: [83]
topics: ["passport-size-photo-maker", "projects", "passport-photos", "photoshop", "instant-photos"]
stars: 152
forks: 74
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-11-28T12:41:27Z"
lastCommitAt: "2026-08-28T14:37:34Z"
status: "thriving"
tags: []
healthScore: 61
undervaluedScore: 14
maintainers: ["deepakguptabca"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e6b443c1a3dddcb0dd1ec2e24eed64a87ec9a52304c70e887c781118442fbc6/deepakguptabca/InstantPhotos"
---

#  Passport Photo Pro

A web-based tool to generate print-ready passport photo sheets from uploaded images. Supports multiple photos, per-photo copy counts, AI background removal, image enhancement, and multi-page PDF export — all on an A4 layout at 300 DPI.

## 🧰 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | HTML, Tailwind CSS, Vanilla JS    |
| Backend   | Python, Flask                     |
| Image AI  | remove.bg API                     |
| PDF gen   | Pillow (PIL)                      |

---

##  Prerequisites

- Python 3.8+
- pip
- A [remove.bg](https://www.remove.bg/api) API key

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/passport-photo-pro.git
cd passport-photo-pro
```

### 2. Create a virtual environment (recommended)

```bash
python -m venv venv

# On macOS/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

>  Never commit your `.env` file. Add it to `.gitignore`.

### 4. Run the app

```bash
python app.py
```

The server will start at…
