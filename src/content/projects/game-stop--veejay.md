---
repo: "game-stop/veejay"
name: "veejay"
description: "Veejay is a visual instrument and realtime video sampler (for live video improvisation)"
url: "https://github.com/game-stop/veejay"
homepage: "http://veejayhq.net"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["vj", "vjing", "veejay", "video", "video-art", "live-video", "video-installation", "visual-art", "visuals", "video-mixer"]
stars: 118
forks: 14
openIssues: 13
closedIssues: 270
watchers: 12
contributors: 8
recentReleases: 0
createdAt: "2015-08-27T17:49:41Z"
lastCommitAt: "2026-06-24T00:20:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 47
maintainers: ["d-j-a-y", "game-stop", "gui-lux"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e1ae1873efbbafe0791c6373f7c039e832bfd3ce57094cb3acb2882dc661240/game-stop/veejay"
---

![Veejay banner](http://veejayhq.github.io/img/header.png)

## Veejay is a Visual Instrument

*a 'visual' instrument and realtime video sampler (for live video improvisation)*

It allows you to "play" the video like you would play a piano.

While playing, you can record the resulting video directly to disk (video sampling), all effects are realtime and optimized for use on modern processors.

Veejay likes the sound of your video's as much as their images: sound is kept in sync ( pitched when needed - trickplay) and delivered to [JACK](http://www.jackaudio.org/) for possible further processing.

You can cluster to allow a number of machines to work together over the network (uncompressed streaming, veejay chaining) And much more...

The engine is historically based upon mjpegtools's lavplay and processes all video in YUV planar It performs at its best, currently with MJPEG AVI (through ffmpeg/libav) or one of veejay's internal formats. Veejay is built upon a servent architecture.

see also : [README whatis](./veejay-current/veejay-server/doc/README.whatis.md)

### Veejay Applications:
* __Reloaded__
    A GUI developed in GLADE/GTK3…
