---
repo: "learnweb/moodle-mod_moodleoverflow"
name: "moodle-mod_moodleoverflow"
description: ":speech_balloon: Non-linear discussion module for Q&A forums"
readmeQualityOk: true
url: "https://github.com/learnweb/moodle-mod_moodleoverflow"
language: "PHP"
languages: ["PHP"]
languagePcts: [84]
topics: ["moodle", "plugin", "discussion", "qa", "questions"]
stars: 17
forks: 28
openIssues: 10
closedIssues: 114
watchers: 8
contributors: 27
recentReleases: 0
createdAt: "2017-10-24T09:27:28Z"
lastCommitAt: "2026-10-25T08:39:43Z"
lastReleaseAt: "2023-07-03T16:05:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 71
maintainers: ["TamaroWalter", "PM84", "humanspaces"]
openGraphImageUrl: "https://opengraph.githubassets.com/f797c9f6f8662d8291260dab46374885dfffbe427e05569ecf3c3e59c88b6a43/learnweb/moodle-mod_moodleoverflow"
---

#  Activity Module: Moodleoverflow

The Moodleoverflow activity provides users the ability to create discussion forums that are not strictly linear or chronological.
It has similarities to the Moodle _forum_, but it is more intended for question-and-answer style discussions and provides additional features that support meaningful interaction. Moodleoverflow features
are highly customizable to ensure that it fits the needs of all users. A Moodleoverflow instance represents a forum that contains multiple discussions with posts.

## Installation
Clone the content into `{your/moodle/dirroot}/mod/moodleoverflow` and complete the installation in 
_Site administration > Notifications_ or run  `$ php admin/cli/upgrade.php` in your cli.

## Core features
The main features of Moodleoverflow are the *rating and reputation system*, *subscription and read tracking*, the *anonymous mode* and *other forms of moderation*.

### Rating and reputation system
Like in _Stackoverflow_, users can rate posts with up- and downvotes, which rank the posts in a discussion. Additionally, the user that started the
discussion can mark posts as _"helpful"_(orange) and course teachers can mark a post as…
