---
repo: "Bd-Mutant7/ClimaPy"
name: "ClimaPy"
description: "ClimaPy is a Django-based command-line weather application that provides real-time weather information for cities worldwide. Originally developed as a learning project, it has evolved into a practical tool for developers and weather enthusiasts."
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/ClimaPy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "command-line", "django", "openweathermap-api", "python", "weather-api"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-09T10:47:52Z"
lastCommitAt: "2026-08-20T04:09:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e1f440dd4390a84227b490340d2ef25f8c3fe34d5ef8763fe1d30f1d3b771b2/Bd-Mutant7/ClimaPy"
---

# 🌤️ ClimaPy

A Django-based weather information application that fetches weather data from OpenWeather API.


## Setup

1. Clone the repository
```bash
git clone https://github.com/Bd-Mutant7/ClimaPy
cd climapy

python -m venv venv
```

## On Windows
```bash
venv\Scripts\activate
```
## On Unix or MacOS
```bash
source venv/bin/activate
```
```bash
pip install -r requirements.txt
OPENWEATHER_API_KEY=your_api_key_here
```
# 🔑 API Key Setup Guide

## Getting Your OpenWeather API Key

### Step 1: Sign Up for a Free Account
1. Visit [OpenWeather Signup Page](https://home.openweathermap.org/users/sign_up)
2. Fill in your email, password, and details
3. Verify your email address (check your inbox)

### Step 2: Generate Your API Key
1. Log in to your [OpenWeather account](https://home.openweathermap.org/)
2. Navigate to **"API Keys"** tab in the top menu
3. You'll see a default API key, or click **"Generate"** to create a new one
4. Your key will look like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### Step 3: Set Up Your `.env` File

In your ClimaPy project root, create a `.env` file:
```env
# Required: Your OpenWeather API Key…
