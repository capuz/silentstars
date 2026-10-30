---
repo: "SoongNoonien/plattenalbum"
name: "plattenalbum"
description: "Connect to your music"
readmeQualityOk: true
url: "https://github.com/SoongNoonien/plattenalbum"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["mpd", "music", "player", "mpd-client", "gnome", "gtk4", "libadwaita"]
stars: 254
forks: 42
openIssues: 3
closedIssues: 135
watchers: 8
contributors: 21
recentReleases: 0
createdAt: "2020-01-11T10:21:47Z"
lastCommitAt: "2026-10-30T11:02:16Z"
lastReleaseAt: "2020-03-12T21:00:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 40
maintainers: ["SoongNoonien", "md2501", "bragefuglseth"]
openGraphImageUrl: "https://opengraph.githubassets.com/aebadc6b2adb0f54daecbc06a3610396fdf3a89e946d515b3cbdca0b638b14bd/SoongNoonien/plattenalbum"
discussionCount: 15
---

# Plattenalbum

A client for the Music Player Daemon (MPD).

Browse your collection while viewing large album covers. Play your music without managing playlists.

## Installation

### Flatpak

### Distribution Packages

## Dependencies

The following dependencies need to be installed on the machine Plattenalbum is built or executed on.

> [!IMPORTANT]
> In addition to that, the same or another machine in the network needs a running MPD server with a version of at least 0.24.0.

### Build Dependencies
- meson
- gettext
- glib2 (Ubuntu/Debian: libglib2.0-dev-bin, libglib2.0-bin)

### Runtime Dependencies
- GTK4 >=4.22.0
- libadwaita >=1.8.0
- Python3

#### Python Modules
- gi.repository
	- Gtk
	- Adw
	- Gio
	- Gdk
	- Pango
	- GObject
	- GLib
	- Graphene

## Building

After installing the necessary build dependencies, execute the following commands.

```bash
git clone https://github.com/SoongNoonien/plattenalbum.git
```
```bash
cd plattenalbum
```
```bash
meson setup builddir --prefix=/usr/local
```
```bash
sudo ninja -C builddir install
```

## Contributing

Please try to follow the [GNOME Code of Conduct](https://conduct.gnome.org).

### Translation

This program is currently…
