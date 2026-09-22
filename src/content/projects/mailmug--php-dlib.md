---
repo: "mailmug/php-dlib"
name: "php-dlib"
description: "PHP Dlib - PHP extension for Dlib"
readmeQualityOk: true
url: "https://github.com/mailmug/php-dlib"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-19T04:43:36Z"
lastCommitAt: "2026-09-22T08:46:14Z"
lastReleaseAt: "2026-09-22T06:46:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 17
maintainers: ["arshidkv12", "mailmug"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4c7f6cec45511651881dd627590bfdec6aad6c5bc00bb7741eda668a0fe6377/mailmug/php-dlib"
---

# PHP-Dlib

PHP extension for the Dlib C++ library (face detection, landmarks, recognition, and clustering).

This project is a fork of the original **pdlib** and extends it with improved build support and modern Dlib versions.

---

## 🚀 Features

- ✅ Face Detection (HOG / CNN)
- ✅ Facial Landmark Detection
- ✅ Face Recognition (128D descriptors)
- ✅ Deep Learning-based face detection (CNN)
- ✅ Chinese Whispers clustering (graph-based grouping)

## PHP Dlib Extension Quick Installation Guide
[Tutorial](https://dev.to/arshidkv12/develop-a-pure-php-face-recognition-application-313n)

### 1. Download the Extension
Download the correct file from: [Releases](https://github.com/mailmug/php-dlib/releases)

Choose:
- Windows → `.dll`
- Linux → `.so`
- Mac → `.so`

Make sure it matches:
- PHP version (8.2 / 8.3 / 8.5)
- Thread Safe (TS) or Non-Thread Safe (NTS)
- Architecture (x64 / x86)

#### 2. Windows Installation (.dll)

##### Find php.ini

Create file:
```php
<?php phpinfo();
```

Open: `http://localhost/info.php` Then check: `Loaded Configuration File (php.ini)`. 

Finally, add the following code to the `php.ini` file
```bash
extension="/path/to/dlib.dll"
```
Then restart the…
