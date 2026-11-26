---
repo: "kelvinagyareyeboah/potter-invisibility-cloak"
name: "potter-invisibility-cloak"
description: "eal-time Harry Potter–style invisibility cloak effect using a green cloth and your webcam."
readmeQualityOk: true
url: "https://github.com/kelvinagyareyeboah/potter-invisibility-cloak"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-21T01:47:44Z"
lastCommitAt: "2026-11-26T15:26:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 44
maintainers: ["kelvinagyareyeboah"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9c184077f85065436321199ff2e8b1fd2f9e3be18a7cbec02513b02dc0e9c95/kelvinagyareyeboah/potter-invisibility-cloak"
---

%7C%20Linux%20%7C%20macOS-lightgrey?style=for-th
> Real-time Harry Potter–style invisibi
## 
---

## 🚀 Usage

```bash
python main.py
```

- Stand **away from the camera** for the first few seconds while the background is captured
- Wear or hold the **green cloth** in front of you
- Press **`q`** to quit

---

## 📁 Project Structure

```
potter-invisibility-cloak/
├── main.py       # Core invisibility cloak logic
└── README.md
```

---

## ⚙️ Configuration

Tune the HSV range in `main.py` to match your specific green cloth under your lighting:

```python
lower_green = np.array([50, 80, 50])
upper_green = np.array([90, 255, 255])
```

Use a tool like [this HSV picker](https://colorpicker.me/) or OpenCV trackbars to dial in the right values.

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/kelvinagyareyeboah/potter-invisibility-cloak/blob/HEAD/LICENSE).
