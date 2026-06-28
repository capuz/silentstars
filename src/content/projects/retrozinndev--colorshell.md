---
repo: "retrozinndev/colorshell"
name: "colorshell"
description: "A super \"coolorful\" shell for Hyprland!"
url: "https://github.com/retrozinndev/colorshell"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["hyprland", "astal", "aylurs-gtk-shell", "desktop-shell", "ags-v3", "hyprland-shell", "gtk4", "gtk4-layer-shell", "hyprlock-theme", "rice"]
stars: 257
forks: 15
openIssues: 3
closedIssues: 27
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-06-30T20:44:46Z"
lastCommitAt: "2026-06-28T03:11:05Z"
lastReleaseAt: "2026-03-06T21:47:10Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 39
maintainers: ["retrozinndev", "lucagoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/378a80b55a87a900c56b595a5b5206c0367a11f666a3463066c4530b4539dbcb/retrozinndev/colorshell"
fundingLinks: ["KO_FI:https://ko-fi.com/retrozinndev"]
---

# colorshell

> [!note]
> My personal dotfiles are now on [retrozinndev/.config](https://github.com/retrozinndev/.config)

This is the repository for the colorshell desktop shell, made for Hyprland with [TypeScript], [GTK4], [AGS], [Gnim], and some of the [Astal] libraries.

It really took me a lot of time to make this, so please star the repo if you like it! :star:

## 🌄 Screenshots

    <i>more screenshots on <a href="repo/shots"><code>repo/shots</code></a></i>
  </p>
</div>

## 🎨 Colors
All the shell colors are dynamically generated from your wallpaper! 

This is possible by using [pywal16], a fork of the archived [pywal](https://github.com/dylanaraps/pywal) project. 
It's a cli tool to generate color schemes from an image.

## 🖼️ Wallpapers
These are not included in the shell anymore, because the repository was getting too big in size. 
So you'll have to add it in your own.

You can add more wallpapers either by adding your custom images to `~/wallpapers` or by defining the `WALLPAPERS` 
environment variable in your Hyprland config/UWSM env file, pointing to the custom directory.

Also, you can select any of the images inside your preferred wallpapers directory by pressing…
