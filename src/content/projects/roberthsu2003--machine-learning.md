---
repo: "roberthsu2003/machine_learning"
name: "machine_learning"
description: "scikit-learn"
readmeQualityOk: true
url: "https://github.com/roberthsu2003/machine_learning"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [97]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-19T05:24:15Z"
lastCommitAt: "2026-07-10T07:02:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 31
maintainers: ["roberthsu2003"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b53055c88772ad67a9f28595664b61e96181cfc60613360c31cef6f59b18c55/roberthsu2003/machine_learning"
---

# 🎓 實戰機器學習：從基礎理論到雲端部署

本專案是一套專為機器學習初學者與學生設計的**實戰教學教材**。從最基礎的 AI 術語、數據處理工具（NumPy），到各種監督與非監督式演算法，並進一步探討特徵工程與評估指標。最後，我們將理論落地，帶領大家建立 **FastAPI + Gradio** 預測服務，並一鍵部署至 **Hugging Face Spaces** 雲端。

---

## 💻 快速開始 (Quick Start)

為了讓學生能快速在本機執行本專案的所有代碼，我們推薦使用現代化的 Python 套件管理器 [uv](https://github.com/astral-sh/uv) 或是傳統的 `pip` 來配置環境。

### 1. 複製本專案至本地
```bash
git clone https://github.com/roberthsu2003/machine_learning.git
cd machine_learning
```

### 2. 建立虛擬環境並安裝依賴
*   **使用 `uv`（推薦，極速）：**
    ```bash
    # 建立環境並安裝套件
    uv venv
    uv pip install -r requirements.txt
    ```
*   **使用傳統 `pip`：**
    ```bash
    # 建立環境
    python -m venv .venv
    source .venv/bin/activate  # macOS/Linux
    # .venv\Scripts\activate   # Windows
    
    # 安裝套件
    pip install -r requirements.txt
    ```

---

## 🗺️ 機器學習學習地圖

我們將學習流程細分為以下四個主要模組。你可以依照此學習地圖循序漸進地研習。

### 1. 🌱 基礎觀念與工具準備
在正式進入演算法之前，我們必須先掌握數據工具與基本數學觀念。

*   **[何謂 AI、機器學習與深度學習](https://github.com/roberthsu2003/machine_learning/blob/HEAD/簡報圖片)**：釐清三者之間的關係，並提供簡報檔案下載。
*   **[機器學習常用術語](https://github.com/roberthsu2003/machine_learning/blob/HEAD/名詞解釋)**：釐清 Feature, Label, Train/Test Split, Overfitting 等核心術語。
*   **[數據集與 NumPy…
