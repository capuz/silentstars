---
repo: "SkyAerope/TOTP-Generator-Web"
name: "TOTP-Generator-Web"
description: "A static web tool for generating time-based one-time passwords (TOTP)."
originalDescription: "一个静态网页工具，用于生成基于时间的一次性密码（TOTP）。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SkyAerope/TOTP-Generator-Web"
homepage: "https://totp.skae.top/"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [69, 31]
stars: 35
forks: 25
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-06-18T04:56:57Z"
lastCommitAt: "2026-10-17T07:59:13Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 37
maintainers: ["SkyAerope"]
openGraphImageUrl: "https://opengraph.githubassets.com/a07f9ffed8e34fa59a5372347c0924b8e91702ee4f325c49fa18b766a54e2708/SkyAerope/TOTP-Generator-Web"
---

# TOTP Generator

This project is a JavaScript-based web tool that provides a simple and practical interface, allowing users to enter a key (Key) and generate TOTP passwords related to the current time directly on the webpage.

## Deployment

### Server Hosting
Clone all files in the project folder into the root directory of your web server, or host it using any static website hosting service (such as GitHub Pages, Vercel, Netlify, etc.).

### Local Preview

You can open the `index.html` file locally to preview the website.

## Usage Workflow

1. **Save the key when setting up two-factor authentication (2FA)**: When setting up an authenticator app such as Google Authenticator, choose to enter the key manually instead of scanning the QR code. The website will display the 2FA key; save it in a secure place.

2. **Enter the key to get a TOTP**:
   - Open the deployed TOTP generator website.
   - Enter your 2FA key in the input box.
   - The website will generate a short-lived TOTP password based on the current time and the key you entered.
   - Click the generated TOTP password card to copy the password, for use when verification is needed.

## What is TOTP?

TOTP (Time-Based…
