---
repo: "doonv/bevy_smooth_pixel_camera"
name: "bevy_smooth_pixel_camera"
description: "Smooth pixel-perfect camera for Bevy"
readmeQualityOk: true
url: "https://github.com/doonv/bevy_smooth_pixel_camera"
homepage: "https://docs.rs/bevy_smooth_pixel_camera/latest/bevy_smooth_pixel_camera/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["bevy", "bevy-plugin", "camera", "pixel", "pixel-perfect", "rust", "smooth"]
stars: 46
forks: 8
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2023-11-04T13:56:04Z"
lastCommitAt: "2026-11-13T11:19:17Z"
lastReleaseAt: "2026-11-12T18:32:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 42
maintainers: ["doonv", "ganhaque"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e81dd624c862e7d939873e7c0feeb269688a4e34bc33f0ad14d101a86583a23/doonv/bevy_smooth_pixel_camera"
discussionCount: 1
---

# bevy_smooth_pixel_camera

A bevy plugin that adds a simple smooth pixel camera.

It works by rendering the main camera to a small viewport which is then rendered by a second camera spawned by the plugin.
This allows for hybrid rendering of both a pixelated world and high resolution assets on top.

This plugin has a [smoothing] feature, which makes the camera's movement appear smooth while keeping the world itself locked
to a pixel grid. It works by moving the canvas in the opposite direction of the world camera's subpixel position. See the
[`how_smoothing_works`] example for a demonstration of how it works behind the scenes.

| Smoothing OFF                                                                   | Smoothing ON                                                                                    |
| :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
|  |  |

## Usage

1. Add the `bevy_smooth_pixel_camera` crate to your project.

    ```sh
    cargo add bevy_smooth_pixel_camera
    ```

2. Add the [`PixelCameraPlugin`] and set [`ImagePlugin`] to…
