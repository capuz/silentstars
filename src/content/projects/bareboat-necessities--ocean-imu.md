---
repo: "bareboat-necessities/ocean-imu"
name: "ocean-imu"
description: "Collection of algorithms for IMU data processing in marine environment. Boat heave, wave direction, wave height, attitude (yaw, roll, pitch), tilt compensated compass, ship MRU, GPS fusion, NMEA sensors with IMU, marine AHRS/INS, marine Kalman filters, Arduino/MCU code for marine IMU. Aimed for quality"
readmeQualityOk: true
url: "https://github.com/bareboat-necessities/ocean-imu"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [55, 42]
stars: 31
forks: 4
openIssues: 6
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T01:03:31Z"
lastCommitAt: "2026-08-28T14:18:54Z"
lastReleaseAt: "2026-04-12T01:40:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 38
maintainers: ["mgrouch", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/332e3be87af4b8454148747997df13fde658b7266a01bce1f43f6f97ea496405/bareboat-necessities/ocean-imu"
---

# ocean-imu

Marine IMU and wave-processing algorithms in modern C++ for sensor fusion, sea-state estimation, and simulation-driven validation.
Designed for ship MRU (Motion Reference Unit), Marine INS (Inertial Navigation System), AHRS (Attitude and Heading Reference System).

## Motivation

A marine AHRS cannot just reuse typical popular drone and aerospace IMU filters unchanged. In aerospace, motion is usually modeled as rotation about the center of mass (satellite), and drones often initialize while sitting still before takeoff, so the accelerometer gives a clean gravity direction. On a ship, the system may be turned on while already moving in waves and wind, with heave, roll, pitch, and translational accelerations all mixed into the IMU signals. That means the filter has to learn tilt during motion, avoid trusting wave-distorted acceleration as pure gravity, and keep working across very different sea conditions. In practice, a ship AHRS/INS needs wave-aware initialization, motion compensation, and tuning that can adapt to different sea states dynamically.

The algorithms presented here not only implement tilt-compensated compass and basic roll/pitch/rate-of-turn sensors, they…
