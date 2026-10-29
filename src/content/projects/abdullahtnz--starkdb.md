---
repo: "abdullahtnz/starkdb"
name: "starkdb"
description: "A custom database for well-oriented performance and user experience. "
readmeQualityOk: true
url: "https://github.com/abdullahtnz/starkdb"
language: "C"
languages: ["C"]
languagePcts: [30]
stars: 17
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-17T04:48:40Z"
lastCommitAt: "2026-10-29T10:36:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 16
maintainers: ["abdullahtnz"]
openGraphImageUrl: "https://opengraph.githubassets.com/18266c95c89cf4fd59f5c493af04fd6204f3697b462f89f6e453df898251ffae/abdullahtnz/starkdb"
---

# Introducing STARK v.1.2.0

# What is STARK ?
STARK is a *key-value based, b-tree implemented local* database. It is specifically designed for mobile applications, desktop applications, offline video games. With its *speed,  lightness and easy syntax*, STARK stands  among other databases.

## Workflow

STARK works with .dat and .idx files to save data. It supports *ACID properties*, ensuring save and reliable data saving. After building STARK, users can choose to add data via either STARK CLI or C++ code.

#  🪟 Windows installation

 

  

    # 1. Download STARK 
    # Go to https://github.com/abdullahtnz/stark and download the ZIP file
    # Extract it to your project folder C:\my_project
    # You must get a path like: C:\my_project\stark
    
    # 2. Open Command Prompt as Administrator
    # Press Windows Key, type "cmd", right-click, "Run as Administrator"
    
    # 3. Go to STARK folder
    cd C:\my_project\stark
    mkdir build
    cd build
    
    # 4. Build
    cmake .. -G "MinGW Makefiles" -DBUILD_SHARED=ON
    mingw32-make
    
    # 5. Install (copy to MinGW)
    copy libstark.dll C:\mingw64\bin\
    copy libstark.dll.a C:\mingw64\lib\
    copy…
