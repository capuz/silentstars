---
repo: "danielkouame091-source/mtechbro94-chine-ivoire-import"
name: "mtechbro94-chine-ivoire-import"
description: "import and export china to ivory coast"
readmeQualityOk: true
url: "https://github.com/danielkouame091-source/mtechbro94-chine-ivoire-import"
homepage: "https://github.com/danielkouame091-source/mtechbro94-chine-ivoire-import"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-22T17:32:13Z"
lastCommitAt: "2026-09-29T10:05:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 48
maintainers: ["danielkouame091-source"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c17270b3b6833d3cf42f9150d3eb2850c3ce2c1171c36f73d277594a5d4d06d/danielkouame091-source/mtechbro94-chine-ivoire-import"
---

import io
import os
import re
import sqlite3
from datetime import datetime
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path
from urllib.parse import quote

import pandas as pd
import requests
import streamlit as st
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

try:
    from groq import Groq
except ImportError:  # pragma: no cover
    Groq = None

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "transit_enterprise.db"
UPLOAD_DIR = BASE_DIR / "uploads_dossiers"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

STATUTS = [
    "En cours",
    "FDI & RFC Validées",
    "Visite Douanière en Cours",
    "Bon à Enlever (BAE) Émis",
    "Livré au Client",
]

def setting(name: str, default: str = "") -> str:
    try:
        value = st.secrets.get(name, default)
        if value not in (None, ""):
            return str(value)
    except Exception:
        pass
    return…
