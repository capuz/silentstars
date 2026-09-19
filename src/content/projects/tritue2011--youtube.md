---
repo: "TriTue2011/youtube"
name: "youtube"
description: "Home Assistant add-on, Docker image, custom integration and Lovelace music player card for YouTube, Zing and HTTP audio"
readmeQualityOk: true
url: "https://github.com/TriTue2011/youtube"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [56, 43]
topics: ["hacs", "home-assistant", "home-assistant-addon", "home-assistant-custom-component", "youtube-player"]
stars: 5
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-29T04:39:34Z"
lastCommitAt: "2026-09-19T01:36:39Z"
lastReleaseAt: "2026-09-17T23:31:32Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 69
undervaluedScore: 64
maintainers: ["TriTue2011", "TrianhTuenhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fcd2b386eef545c06bed1a78408ca55aa3b91da66b133f1e23f0f6f9452f067/TriTue2011/youtube"
---

# TriTue YouTube Player cho Home Assistant

Phát **nhạc YouTube, Zing MP3 và HTTP audio ra bất kỳ loa nào** trong Home
Assistant — loa Google Cast, DLNA, ESPHome hay mọi `media_player` hỗ trợ
`play_media` — điều khiển từ một Lovelace card duy nhất. YouTube ra loa hoạt
động giống hệt TTS: add-on tự lấy luồng audio rồi tiếp sóng cho loa.

Không cần license key. Token in trong log add-on chỉ là khóa kết nối nội bộ giữa
integration và add-on, **không phải khóa kích hoạt** — đừng đăng công khai.

## Gồm ba phần

| Thành phần | Thư mục | Công dụng |
|---|---|---|
| Add-on / Docker image | [`youtube_player`](https://github.com/TriTue2011/youtube/blob/HEAD/youtube_player/) | Tìm kiếm, Web UI, API, và **relay luồng audio có chữ ký** (YouTube qua yt-dlp, Zing công khai) |
| Custom integration | [`custom_components/tritue_youtube_player`](https://github.com/TriTue2011/youtube/blob/HEAD/custom_components/tritue_youtube_player/) | Media player ảo, action `play_on_players`, ma trận capability của từng loa |
| Lovelace card | (đi kèm integration) | Tìm nhạc, chọn nhiều loa, hàng đợi, âm lượng từng loa |

Hỗ trợ **`amd64` và `aarch64`** (đã kiểm chứng chạy thật trên cả hai).

## Tính năng

-…
