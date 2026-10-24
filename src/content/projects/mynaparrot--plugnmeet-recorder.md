---
repo: "mynaparrot/plugNmeet-recorder"
name: "plugNmeet-recorder"
description: "Plug-N-Meet - Recorder"
readmeQualityOk: true
url: "https://github.com/mynaparrot/plugNmeet-recorder"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 23
forks: 26
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-02-25T07:31:14Z"
lastCommitAt: "2026-10-24T08:08:47Z"
lastReleaseAt: "2022-08-14T08:54:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: ["jibon57", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e9e664b2466f1e0c5e1779983aa2d236fc253c490b378d7a657e184d3f60f70/mynaparrot/plugNmeet-recorder"
---

# plugNmeet-recorder

The plugnmeet-recorder handles session recording and RTMP streaming for plugnmeet. It is designed for scalability and can record multiple sessions simultaneously. You can deploy multiple recorder instances to create a horizontally scalable, highly available recording infrastructure. The plugnmeet-server will automatically balance the load across the available recorders.

## Requirements

*   A Linux system (Ubuntu is recommended)
*   Google Chrome
*   PulseAudio
*   Xvfb (X virtual framebuffer)
*   FFmpeg

## Installation

These instructions are for Ubuntu.

### 1. Install Dependencies

```bash
# Install PulseAudio, Xvfb, and FFmpeg
sudo apt install -y pulseaudio xvfb ffmpeg

# Start PulseAudio and enable it to start on boot
pulseaudio -D --verbose --exit-idle-time=-1 --disallow-exit
systemctl --user enable pulseaudio

# Install Google Chrome
curl -fsSL https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee…
