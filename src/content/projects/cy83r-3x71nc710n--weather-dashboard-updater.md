---
repo: "CY83R-3X71NC710N/Weather-Dashboard-Updater"
name: "Weather-Dashboard-Updater"
description: "Python script that retrieves weather information from OpenWeatherMap API and saves it to a CSV file"
readmeQualityOk: true
url: "https://github.com/CY83R-3X71NC710N/Weather-Dashboard-Updater"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 17
closedIssues: 646
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-01-29T02:09:50Z"
lastCommitAt: "2026-09-19T01:15:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 75
maintainers: ["CY83R-3X71NC710N"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0bf95c1b193138bd53247c69e8e4aa089d12f021dc23f4016556ccc42037a68/CY83R-3X71NC710N/Weather-Dashboard-Updater"
---

# Weather-Dashboard-Updater
Gathers data about the weather from OpenWeatherMap API

```
https://home.openweathermap.org/api_keys
```

# How to run this script?:
```
Go sign up for openweathermap to obtain an API key
git clone https://github.com/CY83R-3X71NC710N/Weather-Dashboard-Updater.git
rm -rf weatherupdate.csv # Remove the existing .csv as this includes previous data.
API_KEY = Insert_API_Key
pip install requests pandas
python3 get_weather_data.py

The file will be outputed to a .csv in the current working directory allowing you to view the weather data in .csv format
```

# Improving the structure and appearance of the output
The weather data is now saved in a CSV file (`weatherupdate.csv`) with improved structure and readability. The script `get_weather_data.py` extracts weather data from the OpenWeatherMap API and saves it to a CSV file, with the data well-organized and formatted for easy readability.

# Interpreting the structured weather data
The CSV file contains the following columns:
- `coord_lon`: Longitude of the location
- `coord_lat`: Latitude of the location
- `weather_id`: Weather condition id
- `weather_main`: Group of weather parameters (Rain, Snow, Extreme,…
