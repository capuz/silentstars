---
repo: "geriabot/nao_ros2"
name: "nao_ros2"
description: "This repository provides tools and code to migrate the Nao robot to ROS2 and add autonomous navigation capabilities. The project is open source and aims to help the community advance robotics development with Nao."
readmeQualityOk: true
url: "https://github.com/geriabot/nao_ros2"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-01-29T10:18:40Z"
lastCommitAt: "2026-11-18T12:08:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 54
maintainers: ["rodperex"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1503dcbd58aa8aced2bb227519797927ddd1c7532cc075b31c07f857982afe8/geriabot/nao_ros2"
---

# nao_ros2
  
Antes de comenzar a utilizar este paquete es necesario seguir los siguientes pasos:
1. [Instalar Ubuntu 22.04 en el robot Nao](https://github.com/geriabot/nao_ros2/blob/HEAD/ubuntu.md)
2. [Configurar el robot Nao](https://github.com/geriabot/nao_ros2/blob/HEAD/conf.md)
3. [Instalar ROS 2 Humble en el robot Nao y en el ordenador](https://github.com/geriabot/nao_ros2/blob/HEAD/ros2.md)
4. Tener Ubuntu 22.04 en el ordenador (o virtualizarlo). Si tu ordenador usa otra distribución, puedes compilar en un contenedor: [instrucciones con distrobox](https://github.com/geriabot/nao_ros2/blob/HEAD/DISTROBOX.md)

## Instalación

Todo se compila en el **ordenador** (Ubuntu 22.04 + ROS 2 Humble) y después se copia al robot.

### Compilación en el ordenador

```bash
mkdir -p ~/nao_ws/src && cd ~/nao_ws/src
git clone git@github.com:geriabot/nao_ros2.git
cd ~/nao_ws/
vcs import src < src/nao_ros2/thirdparty.repos
rosdep install --from-paths src --ignore-src -r -y
sudo apt install libignition-transport11-dev   # necesario para compilar walk_bot (no está en su package.xml)
colcon build
```
