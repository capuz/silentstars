---
repo: "empriselab/feeding-deployment"
name: "feeding-deployment"
description: "Code for the robot-assisted feeding project at EmPRISE Lab"
url: "https://github.com/empriselab/feeding-deployment"
homepage: "https://emprise.cs.cornell.edu/feast/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 30
forks: 5
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2024-08-06T00:41:06Z"
lastCommitAt: "2026-06-24T00:21:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 51
maintainers: ["RKJenamani", "whoisfrankyang"]
openGraphImageUrl: "https://opengraph.githubassets.com/de2220f830e066bfa0ea49350b9886fa1d16f1202436a14d30deab4dfb2814f0/empriselab/feeding-deployment"
---

## Requirements

- Python 3.10+
- Tested on Ubuntu 20.04

## Pre-Installation

1. Install ROS and rospy.
2. Install [pyaudio](https://pypi.org/project/PyAudio/).

## Installation

1. Recommended: create and source a virtualenv or a conda environment
2. `pip install -e ".[robot, develop]"` for full install or `pip install -e .` for only preference learning setup

## Run Feeding Demo on Real Robot
1. Run the arm controller server on the NUC:
   - ssh to the NUC: `sshnuc` with lab password
   - [only for inside-mouth bite transfer] zero the arm torque offsets:
        - Alias `set_zeros` on NUC
        - Otherwise, run the following commands:
             - `conda activate controller`
             - `cd ~/feeding-deployment/src/feeding_deployment/robot_controller`
             - `python kinova.py`
   - run the controller server:
        - Alias `launch_arm` on NUC
        - Otherwise, run the following commands:
             - `conda activate controller`
             - `cd feeding-deployment/src/feeding_deployment/robot_controller`
             - `python arm_server.py`
1b. Run the base controller server on the NUC:
   - The base Arduino is plugged into the **NUC** (not the compute…
