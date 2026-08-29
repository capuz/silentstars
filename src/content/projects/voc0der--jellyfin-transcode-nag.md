---
repo: "voc0der/jellyfin-transcode-nag"
name: "jellyfin-transcode-nag"
description: "Configurable messages to users causing avoidable transcodes"
readmeQualityOk: true
url: "https://github.com/voc0der/jellyfin-transcode-nag"
language: "C#"
languages: ["C#"]
languagePcts: [81]
stars: 24
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-23T12:47:16Z"
lastCommitAt: "2026-08-29T10:22:44Z"
lastReleaseAt: "2026-02-02T11:04:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["voc0der", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/98b5859df9640d32858219cafc8e8176a40aa903b5793c4474aac8712830a3fe/voc0der/jellyfin-transcode-nag"
---

</p>

# Jellyfin Transcode Nag Plugin

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

A Jellyfin plugin that intelligently nags users when they're transcoding due to **unsupported formats or codecs**, while allowing bitrate-based transcoding to pass through without harassment.

</p>
  <em>Playback nag configuration and trigger reason selection</em>
</p>

</p>
  <em>Login nags, user exclusions, and the live session monitor</em>
</p>

## What It Does

- Sends a playback nag when Jellyfin reports selected `TranscodeReasons`.
- Ignores bitrate-only transcodes, so users lowering quality for bandwidth do not get warned.
- Can exclude Live TV channel streams from playback nags and login nag history.
- Can send a login nag when a user keeps hitting bad transcodes over the last week or month.
- Lets you exclude users from all nags.
- Includes a live session monitor in the plugin settings page.
- Can broadcast an optional Message of the Day to users at login, with its own user exclusions and client filters.
- Can refuse an NVIDIA hardware transcode before FFmpeg starts when that job's conservative VRAM budget will not fit.

## Installation

### Plugin Repository

1. Go to **Dashboard** →…
