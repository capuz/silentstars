---
repo: "KabosuNeko/Sudachi"
name: "Sudachi"
description: "TUI Vietnamese-subtitled movie/TV/anime player for Linux."
readmeQualityOk: true
url: "https://github.com/KabosuNeko/Sudachi"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["anime", "bash", "cli", "fzf", "movies-streaming", "mpv", "shell-script", "tui", "video-player", "vlc"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-17T15:17:34Z"
lastCommitAt: "2026-07-06T07:03:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 11
maintainers: ["KabosuNeko"]
openGraphImageUrl: "https://opengraph.githubassets.com/044ec441fa14f30a0e8a305a81ed422b8184b408b912416148cff3b315428406/KabosuNeko/Sudachi"
---

# Sudachi

<p><br/></p>
</p>
<p><br/></p>

Trình phim/TV/anime phụ đề Việt chạy trong Terminal, dành cho Linux.

## Dependencies

**Bắt buộc:** `fzf` + `jq` + `curl` — kèm `mpv` hoặc `vlc` để phát.

**Khuyến nghị thêm:** `chafa` (poster preview), `yt-dlp` + `aria2c` (tải đa luồng), `notify-send` (thông báo khi tải xong).

### Cài đặt theo distro

**Arch**
```bash
sudo pacman -S fzf jq curl mpv yt-dlp chafa aria2 libnotify
```

**Debian/Ubuntu**
```bash
sudo apt install fzf jq curl mpv aria2 libnotify-bin chafa
# yt-dlp từ apt thường bản cũ — hãy cài binary thủ công:
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

**Fedora**
```bash
sudo dnf install fzf jq curl mpv yt-dlp chafa aria2 libnotify
```

## Quick start

### Chạy trực tiếp (không cần cài đặt)
```bash
bash -c "$(curl -sL https://raw.githubusercontent.com/KabosuNeko/sudachi/main/sudachi.sh)"
```

### Hoặc thêm alias vào `~/.bashrc`
```bash
alias sudachi='bash -c "$(curl -sL https://raw.githubusercontent.com/KabosuNeko/sudachi/main/sudachi.sh)"'
```

## Hệ thống Phím tắt (episode picker)

| Phím | Chức năng |
| :--- | :--- |
|…
