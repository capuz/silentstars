---
repo: "uos/minot"
name: "minot"
description: "A versatile toolset for debugging and verifying stateful robot perception software."
readmeQualityOk: true
url: "https://github.com/uos/minot"
homepage: "https://stelzo.codeberg.page/minot/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["bagfiles", "devtools", "robotics", "ros2"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-05-23T13:51:50Z"
lastCommitAt: "2026-09-29T10:04:33Z"
lastReleaseAt: "2025-12-12T16:35:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 70
maintainers: ["stelzo", "JohannesHatke"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d9e19f307868f04122d89dd87a910df212801d7d780c272b6f97e9725dfb26/uos/minot"
---

# Minot

Minot is a highly versatile toolset for debugging and verifying stateful robot perception software. Some common use cases are:

* Fine-grained rosbag publishing
* Synchronous, deterministic and reproducable testing
* ROS1 -> ROS2 or language migrations
* Functional method evaluations

Visit the [Web Documentation](https://stelzo.codeberg.page/minot) or `ssh minot@steado.tech` to find out more.

## ROS 2

### Binary Release

We precompile the CLI with coordinator and ROS 2 publisher for our PPA. 

~~~bash title="steado PPA"
curl -fsSL "https://ppa.steado.tech/ubuntu/key.gpg" | gpg --dearmor \
  | sudo tee /usr/share/keyrings/steado-archive-keyring.gpg >/dev/null
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/steado-archive-keyring.gpg] https://ppa.steado.tech/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" \
  | sudo tee /etc/apt/sources.list.d/steado.list
sudo apt update
~~~

After the setup, you can install the matching package for any of the supported ROS 2 releases. Lyrical, Jazzy, and Humble packages are built for amd64 and arm64.

~~~bash
# humble
sudo apt install ros-humble-minot

# jazzy
sudo apt install ros-jazzy-minot
~~~…
