---
repo: "vlad-ds/ai-trader-frontend"
name: "ai-trader-frontend"
description: "A Streamlit dashboard application for visualizing trading account information and positions from the Alpaca Trading API. Features real-time portfolio tracking, profit/loss monitoring, and a trading diary interface with automated data updates via GitHub Actions."
readmeQualityOk: true
url: "https://github.com/vlad-ds/ai-trader-frontend"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 8
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-05-08T06:45:35Z"
lastCommitAt: "2026-11-07T13:54:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 54
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/89726aec69464d8127a5f90292969efdd0065f91185f8c511a6dda13884ef40f/vlad-ds/ai-trader-frontend"
---

# AI Trader Frontend

A Streamlit dashboard application for visualizing trading account information and positions from the Alpaca Trading API. The dashboard displays portfolio value, positions, profit/loss metrics, and trading diary entries.

## 📊 Features

- **Real-time Account Data**: View portfolio value, cash balance, and buying power
- **Positions Tracking**: Monitor your positions with detailed information on current prices, market values, and profit/loss
- **Trading Diary**: Keep track of your trading thoughts and strategies with date-organized diary entries
- **Collapsible Interface**: Clean UI with collapsible diary sections and intuitive navigation

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-trader-frontend.git
   cd ai-trader-frontend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables in a `.env` file:
   ```
   ALPACA_API_KEY=your_api_key
   ALPACA_SECRET_KEY=your_secret_key…
