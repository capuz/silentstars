---
repo: "TaterTotterson/microWakeWords"
name: "microWakeWords"
description: "Tater/Home Assistant voice satellite firmware and microWakeWords for VoicePE, Satellite1, and ReSpeaker XVF3800 with microWakeWord, openWakeWord, and nanoWakeWord support."
url: "https://github.com/TaterTotterson/microWakeWords"
homepage: "https://taterassistant.com"
language: "C"
languages: ["C", "C++"]
languagePcts: [50, 35]
stars: 191
forks: 29
openIssues: 6
closedIssues: 677
watchers: 2
contributors: 2
recentReleases: 8
createdAt: "2025-09-30T13:33:01Z"
lastCommitAt: "2026-06-25T01:38:00Z"
lastReleaseAt: "2026-06-25T00:40:04Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 41
maintainers: ["TaterTotterson", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/831f750401ec21d0e63097b751fba47bb0f0e015c59c28057650c4d61afa09d0/TaterTotterson/microWakeWords"
---

</a>
</div>
<h3 align="center">
</h3>

## 🗣️ Request a New Wake Word

You can request a new microWakeWord model by opening a GitHub issue.

### ✅ How to request a word

1. Go to the **Issues** tab  
2. Click **New issue**
3. Set the **title** to:

mww: your wake word here

Examples:
```
mww: hey tater  
mww: tater totterson  
mww: hello computer  
```
That’s it — no labels, no templates, no body text required.

---

### 🔄 What happens next
- The `.tflite` and `.json` files are added to the repository
- The issue is labeled, commented on, and closed when complete

---

### ⚠️ Notes

- **Test your wake word with TTS first.**  
  Make sure your text-to-speech engine pronounces the phrase the way you expect.  
  You may need to spell it *phonetically* or a little “funny” so TTS says it correctly — the trainer uses the same pronunciation.
- Please request **one wake word per issue**
- Avoid punctuation or emojis in the title
- Training runs sequentially if multiple requests are open

---

## 🗣️ Set Up Your Custom Wake Word on Home Assistant Voice

⚠️ **Important:** voicePE-TaterTimer.yaml is for **Voice PE**, satellite1-TaterTimer.yaml is for **Satellite1**,…
