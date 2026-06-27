---
repo: "22carlo22/AcousticCam"
name: "AcousticCam"
description: "A DIY esp32 acoustic camera"
url: "https://github.com/22carlo22/AcousticCam"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [47, 31]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-07T03:33:47Z"
lastCommitAt: "2026-06-27T06:27:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 33
maintainers: ["22carlo22"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d2128fef9f8e3bb978b263c420cae639cb4ce09ca92a0ac104b7671b17d2891/22carlo22/AcousticCam"
---

# ESP32 Acoustic Camera
Acoustic cameras are incredibly cool devices—they literally let you see sound in real-time. However, professional ones cost thousands of dollars. The goal of this project is to figure out the secrets behind how they work and build a simple version using parts anyone can buy:
- Freenove ESP32-S3 CAM Board
- IPS LCD Display Screen (240×320) 
- 4x INMP441 Digital Microphones 

# Updates
- Switched from GNU Octave to Python: I started out writing the math scripts in Octave (an open-source MATLAB alternative). But Octave gave me huge headaches when trying to do camera streams due to compatibility issues. Moving the math over to a multi-threaded Python script fixed everything and made it much faster.
- Upgraded the Main Brain (ESP32-WROVER to ESP32-S3): During early testing, I discovered a major hardware conflict—the older WROVER board shares its internal camera clock lines with one of its I2S peripheral buses. Activating the camera physically disabled two of my microphones. Upgrading to the ESP32-S3 gave me two completely independent I2S buses, allowing all 4 microphones to sample simultaneously alongside the camera.
- Cleaner Frame & Thinner Wires: I redesigned…
