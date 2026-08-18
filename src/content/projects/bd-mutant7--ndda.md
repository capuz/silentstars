---
repo: "Bd-Mutant7/NDDA"
name: "NDDA"
description: "an application that scans a local area network (LAN) and displays all devices connected to the same network as the host machine."
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/NDDA"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-26T18:45:29Z"
lastCommitAt: "2026-08-18T04:08:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 55
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/85c9d8b1709f0229d696e41f3db9f5da1ccd048d6a97a6ebe6aca86210145052/Bd-Mutant7/NDDA"
---

### Network Device Discovery Application

## Objective
To design and implement a Python-based application that discovers devices on a local area network using ARP scanning and presents the results in a graphical interface.

## Features
- ARP-based network discovery
- Displays IP address, MAC address, hostname, and vendor
- Graphical User Interface (GUI)
- Export scan results to CSV
- Cross-platform support (Windows, Linux, macOS)

## Technologies Used
- Python
- Scapy
- Tkinter
- PyInstaller

## How It Works
The application sends ARP broadcast requests within a specified subnet. Devices that respond are identified as active hosts. MAC addresses are used to determine vendor information.

## Usage
1. Run the application as Administrator / sudo
2. Click "Scan Network"
3. View discovered devices
4. Export results to CSV if required

## Ethical Considerations
This tool is intended for educational purposes and must only be used on networks where the user has authorization.

## Author
[P_Kariuki007]
