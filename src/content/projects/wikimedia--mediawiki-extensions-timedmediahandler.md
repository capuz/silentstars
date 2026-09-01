---
repo: "wikimedia/mediawiki-extensions-TimedMediaHandler"
name: "mediawiki-extensions-TimedMediaHandler"
description: "Github mirror of MediaWiki extension TimedMediaHandler - our actual code is hosted with Gerrit (please see https://www.mediawiki.org/wiki/Developer_access for contributing)"
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-TimedMediaHandler"
homepage: "https://gerrit.wikimedia.org"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [59, 33]
stars: 19
forks: 14
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 107
recentReleases: 0
createdAt: "2012-11-01T19:32:54Z"
lastCommitAt: "2026-09-01T08:05:43Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 70
maintainers: ["translatewiki", "hartman", "Ladsgroup"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe34e796d8a18695921725c5d501e78e0c1e1c31c22c1ea112010731131cd2c/wikimedia/mediawiki-extensions-TimedMediaHandler"
---

# TimedMediaHandler

This extension provides a media handler for the Ogg, WebM, mp4 container format.
When enabled, a player will be automatically embedded in the file description
page, or any wiki page while still using the same syntax as for images.

* Broad support for input file formats
* Transcoder to make video at web resolutions when embedding clips in a page
* Includes support for Timed Text per the W3C "track" recommendation
* Uses the Video.js javascript player for playback

After you installed this extension, add the following to the end of your
`LocalSettings.php` to enable it:

```
  // TimedMediaHandler
  wfLoadExtension( 'TimedMediaHandler' );
```

Configuration documentation is canonically provided at:
https://www.mediawiki.org/wiki/Extension:TimedMediaHandler

## Updates in 2026

The `ogv.js` WebAssembly codec shim has been removed as Safari and Edge now
support WebM VP8/VP9/Vorbis/Opus playback natively.

For iPhones and iPads prior to iOS 17.4, consider enabling the 144p MJPEG
fallback transcode used on Wikimedia sites or MP4/H.264 transcodes if your
licensing situation allows it.

## Updates in 2022
The playback framework Kaltura/mwEmbed was replaced with a…
