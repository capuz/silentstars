---
repo: "Cheese-nya/uku-furigana"
name: "uku-furigana"
description: "Automatically annotates kanji in text with kana, translates it, and outputs it as SRT, TXT, or DOCX"
originalDescription: "自动标注文本内汉字的假名,翻译,并以srt,txt,docx输出"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Cheese-nya/uku-furigana"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 30]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-27T11:49:05Z"
lastCommitAt: "2026-10-22T08:48:21Z"
lastReleaseAt: "2026-10-12T11:48:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["Cheese-nya"]
openGraphImageUrl: "https://opengraph.githubassets.com/096ffc41b6283ddaffb186d8452f5936577bae73e154a08df57e59633bee3a04/Cheese-nya/uku-furigana"
---

# Furigana Dubbing Studio

An offline furigana (ルビ) annotation and layout tool for Japanese learners. It addresses mispronunciation of polyphonic characters, counter sound changes, jukujikun (熟字訓) splitting, and Word layout misalignment.

---

## Problems Solved

Common kana annotation tools simply look up dictionaries, which often produces the following errors:

| Scenario | Common error | How this tool handles it |
| :--- | :--- | :--- |
| **Polyphonic characters** | `辛い` readings confused (spicy vs. painful) | Distinguishes `からい` from `つらい` automatically using surrounding particles; `何` (なに/なん) and `風` (かぜ/ふう) are handled the same way |
| **Counter sound changes** | `一発` and `一本` read as いちはつ and いちほん | Built-in numeral-counter sound change rules correctly output `いっぱつ`, `いっぽん`, `三分(さんぷん)`, and other sokuon and handakuon forms |
| **Jukujikun** | `二人` split into `二(に)人(にん)` | Recognizes the whole compound and annotates it as `二人(ふたり)` or `大人(おとな)`; verb okurigana are aligned precisely |
| **Print layout** | After export to Word, kana drop off or turn into parentheses | Outputs the standard Word `<w:ruby>` structure, with kana centered above the kanji; font size and line spacing…
