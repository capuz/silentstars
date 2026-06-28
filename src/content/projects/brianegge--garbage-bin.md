---
repo: "brianegge/garbage_bin"
name: "garbage_bin"
description: "Object detection program for my garbage bin"
url: "https://github.com/brianegge/garbage_bin"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-02-17T18:47:26Z"
lastCommitAt: "2026-06-28T02:01:01Z"
lastReleaseAt: "2024-12-28T23:12:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 60
maintainers: ["renovate[bot]", "brianegge"]
openGraphImageUrl: "https://opengraph.githubassets.com/10a9bd8e2850f99196e4ae4e0972c1a376741a0811c4809b72ea477e7dec6ddd/brianegge/garbage_bin"
---

This project is to detect which cars are in my garage as well as if the garbage bins are present. I use a simple object detection model along with an IP Camera in my garage. I publish the state as bianry sensors for use in HomeAssistant. The images used for training are here: https://app.roboflow.com/egge-public/garage/overview

The script uses a rolling average to determine if the object is present or absent, and also skips updating if it detects a person, as they may be obscuring something. I also trained it to recongize my toolbucket. This is a sort of sanity / calibration check. If it finds nothing in the scene, it's likely a system problem, so it shouldn't update the state of the objects.

*Quick Start*

You need to create a config file which connects to the camera and MQTT broker.

```ini
[file]
# where to save the images
path=/mnt/capture

[camera]
user=admin
password=*****
host=garage-cam.home

[mqtt]
host=mqtt
port=1883
```

```bash
podman run -it --rm -v etc/config.ini:/app/config.ini brianegge/garbage_bin
```

Install service from source

```bash
$ cat /etc/systemd/system/garbage_bin_detector.service
[Unit]
Description=Image processor to find the garbage bin…
