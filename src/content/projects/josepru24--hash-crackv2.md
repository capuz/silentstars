---
repo: "JosePRU24/Hash_crackV2"
name: "Hash_crackV2"
description: "Hash_crackV2 – Hash cracker (MD5, SHA‑X, Bcrypt, Argon2, SSH, WPA‑PSK…), with hybrid attacks, dictionary support, and ZIP/RAR cracking"
readmeQualityOk: true
url: "https://github.com/JosePRU24/Hash_crackV2"
language: "C"
languages: ["C", "Python"]
languagePcts: [54, 42]
topics: ["argon2id", "bcrypt", "brute-force", "crunch", "dictionary-attack", "md5-hash", "multiprocessing", "sha1-hash", "termux", "ubuntu"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-03T23:50:32Z"
lastCommitAt: "2026-08-11T04:50:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 69
maintainers: ["JosePRU24"]
openGraphImageUrl: "https://opengraph.githubassets.com/2af5945f5b099873a1ae48ecbd1ccf93c73a5d837b73560a2572f85c1372cc3b/JosePRU24/Hash_crackV2"
---

# Hash_crackV2

## Disclaimer

This tool is intended for educational and research purposes only.  
The author is not responsible for any misuse or illegal activity performed using this software.

## Recommended Platforms

• Ubuntu 24.04.4 LTS and Ubuntu 26.04 LTS

• Android (via Termux)

## Quick Command Usage for Hasher.py

🔓 Decrypt a Cisco Type 7 key

python3 Hasher.py -i 'cisco7_key' -ct7

---

📦 Call external modules

python3 Hasher.py -m -mc [1..9]

---

✅ Directly check a hash (with default values)

python3 Hasher.py -i 'hash'

---

⚙️ Example with common parameters

python3 Hasher.py -i 'hash' -t md5 -c 1 -e 2 -w n -r 1

## 🛠️ Components

* **`crunch_manager.sh`**: Module that calls the native Linux tool (crunch) to generate custom dictionaries

* **`wordlist_manager.sh`**: Module that allows managing large dictionaries for optimized cracking

* **`multi_hash_bruteforce.py`**: Module that allows brute-force attacks without a dictionary

* **`Hasher.py`**: Main module that performs dictionary attacks, calls to external modules (Crack_Rar, etc.)

## Features

1. Multi-processing for optimal performance on multi-core systems  
2. Custom dictionary generation using crunch,…
