---
repo: "pfichtner/virtualavr"
name: "virtualavr"
description: "Run Arduino/AVR Code on your PC (inside a docker container) including support for serial communication. State of the simulated microcontroller can be seen and controlled via websockets"
url: "https://github.com/pfichtner/virtualavr"
language: "Shell"
languages: ["Shell", "JavaScript", "C++"]
languagePcts: [37, 36, 25]
topics: ["arduino", "avr", "avr-microcontroller", "docker", "microcontroller"]
stars: 11
forks: 1
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-06-25T18:10:14Z"
lastCommitAt: "2026-07-02T06:33:09Z"
lastReleaseAt: "2025-01-02T12:48:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 67
maintainers: ["dependabot[bot]", "pfichtner", "renovate-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/80045991e20136d7023bbdb0f1deb3848960fb27ece1e343b62afb07862187a5/pfichtner/virtualavr"
discussionCount: 0
---

### virtualavr

An AVR/Arduino Simulator based on [avr8js](https://github.com/wokwi/avr8js) to enable automated tests.
- You want to test your microcontroller program on an integration level without flashing a real microprocessor every time? 
- You want to test some code that interacts with a microprocessor but you want to test without having real hardware connected and flashed (e.g. on a ci server)?

This is where virtualavr comes into play

virtualavr comes as a Docker image that provides a virtual AVR including a virtual serial device which you can connect to just like to real hardware. 

Start the container (will load the included blink sketch)
```docker run -v /dev:/dev -d pfichtner/virtualavr```

Connect to virtual serial device
```minicom -D /dev/virtualavr0```

Full example, you can pass the devicename as well the code that gets compiled and the executed on the virtual AVR
```docker run -p8080:8080 -e VIRTUALDEVICE=/dev/ttyUSB0 -e FILENAME=myArduinoSketch.ino -v /dev:/dev -v /path/of/the/sketch:/sketch -d pfichtner/virtualavr```

Environment variables supported
- VIRTUALDEVICE the full path of the virtual device that socat creates (defaults to /dev/virtualavr0)
-…
