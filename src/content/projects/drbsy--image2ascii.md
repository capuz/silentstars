---
repo: "Drbsy/image2ascii"
name: "image2ascii"
description: "this tool convert images into ascii art"
readmeQualityOk: true
url: "https://github.com/Drbsy/image2ascii"
language: "C"
languages: ["C", "C++"]
languagePcts: [62, 38]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-21T20:11:16Z"
lastCommitAt: "2026-09-19T01:36:33Z"
lastReleaseAt: "2026-09-16T16:22:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 29
maintainers: ["Drbsy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ed260fed88f881660ccfa408e9f9684eef6fb864a1854185dc9e12bf7cccf1f/Drbsy/image2ascii"
---

# Image to ASCII

This project converts any supported image format into ASCII art.
  
## Usage

Convert an image to ASCII art using:

```bash

.\image2ascii  <path_to_image>  <size>

```

### Size Options

| Size | Flag | Scale Factor |
|---|---|---|
| Small | `-s` | `1/24` |
| Medium | `-m` | `1/12` |
| Large | `-l` | `1/6` |
| Extra Large | `-xl` | `1/3` |
| Extra Extra Large | `-xxl` | `1/1` |
| Custom Line Length | `-llen <size>` | Custom line length size |

### Help

To display the help message:

```bash

.\image2ascii.exe  -h

```

or:

```bash

.\image2ascii.exe  -help

```

### Supported Image Formats

`jpg`, `jpeg`, `png`, `bmp`, `tga`, `psd`, `hdr`, `pic`, `ppm`, `pgm`

---

## Build

### 1. Install Required Packages

**Arch Linux:**

```bash

sudo  pacman  -S  --needed  base-devel  git  gcc  make

```

**Debian / Ubuntu:**

```bash

sudo  apt  update && sudo  apt  install  -y  git  gcc  make

```

**Fedora:**

```bash

sudo  dnf  install  -y  git  gcc  make

```

### 2. Clone the Repository

```bash

git  clone  https://github.com/Drbsy/image2ascii.git

```

### 3. Navigate to Directory

```bash

cd  image2ascii

```

### 4. Compile

```bash

make

```
---

## Art…
