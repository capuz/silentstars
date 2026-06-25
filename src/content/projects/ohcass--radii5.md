---
repo: "ohcass/radii5"
name: "radii5"
description: "CLI music downloader. powered by yt-dlp with parallel chunk downloading and automatic ID3 tagging."
url: "https://github.com/ohcass/radii5"
language: "Go"
languages: ["Go", "PowerShell"]
languagePcts: [65, 29]
topics: ["ffmpeg", "mp3", "yt-dlp", "parallel-download"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-03-13T12:44:17Z"
lastCommitAt: "2026-06-25T01:40:34Z"
lastReleaseAt: "2026-06-24T22:02:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 29
maintainers: ["ohcass", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f5a9d9f51b8a7dd338a791519fc74692800ad2b2a698dd4b2785e90fa18ed02/ohcass/radii5"
---

# radii5

**Parallel, cross-platform downloader for YouTube, SoundCloud, Bandcamp, and more**

</div>

---

**Single track**

**Playlist**

</div>

## Install

**Windows**
```powershell
irm https://ohcass.github.io/radii5/install.ps1 | iex
```

**Linux / macOS**
```sh
curl -fsSL https://raw.githubusercontent.com/ohcass/radii5/main/scripts/install.sh | sh
```

<details>
<summary>Build from source</summary>

```sh
git clone https://github.com/ohcass/radii5.git
cd radii5
go build -o radii5 ./cmd/radii5
```
</details>

### To remove

**Windows**
```powershell
Remove-Item "$env:USERPROFILE\.radii5\bin\radii5.exe"
```

**Linux / macOS**
```sh
rm ~/.radii5/bin/radii5
```

## Usage

```sh
radii5 <url>                                          # default: mp3 audio
radii5 --type video <url>                             # download as mp4 video
radii5 --type video --quality 720 <url>               # 720p video
radii5 --mp4 720 <url>                                # shorthand: 720p video
radii5 --mp4 <url>                                    # video at default quality (1080)
radii5 <url> --format flac                            # audio format
radii5 "https://youtube.com/playlist?list=..."…
