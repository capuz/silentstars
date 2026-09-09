---
repo: "riegllms/ros-riegl-vz"
name: "ros-riegl-vz"
description: "ROS2 (Roboter Operating System) package for RIEGL VZ-i laser scanner series."
readmeQualityOk: true
url: "https://github.com/riegllms/ros-riegl-vz"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2022-02-09T07:37:13Z"
lastCommitAt: "2026-09-08T12:41:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7e1520291abedde18aa5db64811e34e42eabc6344962d6394271727f9e7ba356/riegllms/ros-riegl-vz"
---

# ROS2 RIEGL VZ Package

This is a ROS2 package for the RIEGL VZ-i series devices.
The package has been tested with:  
- ROS2 [Galactic Geochelone](https://docs.ros.org/en/galactic/index.html) on Ubuntu Desktop 20.04 (Focal Fossa)  
- ROS2 [Humble Hawksbill](https://docs.ros.org/en/humble/index.html) on Ubuntu Desktop 22.04 (Jammy Jellyfish)  
- ROS2 [Lyrical Luth](https://docs.ros.org/en/lyrical/index.html) on Ubuntu Desktop 26.04 (Resolute Raccoon) 

It provides a ROS interface with services and topics for scan data acquisition and scan position registration with a 3D laser scanner.  
In detail, it provides the following functions:

* Create a project on the laser scanner device

* Configure the the laser scanner, including configuration of the scan pattern and the measurement program as well as the storage device for data logging on the device

* Start a scan data acquisition with
  - optional scan registration
  - optional reflector scan and search
  - optional camera image capture

* Publish the 3D point cloud in ROS

* Publish voxel grid in ROS

* Publish scan position resulting from scan registration, position is in scanner project coordinates or referenced to a global…
