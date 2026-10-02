---
repo: "NadirAliOfficial/telegram-weather-bot"
name: "telegram-weather-bot"
description: "A Telegram bot that fetches real-time weather updates using the OpenWeather API. Users can get current temperature, humidity, and weather conditions for any city."
readmeQualityOk: true
url: "https://github.com/NadirAliOfficial/telegram-weather-bot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "bot", "open-source", "openweathermap", "python", "telegram", "weather"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-07T12:35:48Z"
lastCommitAt: "2026-10-02T10:00:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["NadirAliOfficial"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0feba780fac54ac7f2042104766d00786179caa85c59e9f5d94a61a83003ce5/NadirAliOfficial/telegram-weather-bot"
---

# Telegram Weather Bot

A Telegram bot that fetches real-time weather updates using the OpenWeatherMap API.

**Description**
This bot integrates with Telegram to provide users with current weather information for any city. It retrieves data from the OpenWeatherMap service and presents temperature, humidity, and weather conditions directly in the chat.

## Features
- Current weather by city name
- Temperature, humidity, wind speed
- Simple command interface

## Requirements
```
pip install python-telegram-bot requests
```

*Alternatively, install all dependencies via the provided requirements file:* 
```
pip install -r requirements.txt
```

## Setup
```python
BOT_TOKEN = "your_telegram_token"
WEATHER_API_KEY = "your_openweathermap_key"
```

## Configuration
Create a `.env` file in the project root with the following variables:
```
BOT_TOKEN=your_telegram_token
WEATHER_API_KEY=your_openweathermap_key
```
These variables are loaded at runtime using `python-dotenv`.

```bash
python weather-bot.py
```

## Commands
- `/weather <city>` — get current weather
- `/help` — show available commands

## Usage
Run the bot with:
```
python weather-bot.py
```
The bot will start polling Telegram…
