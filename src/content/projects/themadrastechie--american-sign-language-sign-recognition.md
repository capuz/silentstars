---
repo: "TheMadrasTechie/American_sign_language_sign_recognition"
name: "American_sign_language_sign_recognition"
description: "This is a jupyter notebook program to train and detect the hand gestures of american signlanguage using LSTM and Mediapipe"
url: "https://github.com/TheMadrasTechie/American_sign_language_sign_recognition"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [98]
topics: ["computer-vision", "jupyter-notebook", "lstm", "mediapipe", "mediapipe-hands", "python", "tensorflow"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-23T06:36:10Z"
lastCommitAt: "2026-06-23T06:42:44Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 34
maintainers: ["TheMadrasTechie"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d6499513627a5faeddc5dd204ec06d311a3933f9d1f1878c2e722e897aa4272/TheMadrasTechie/American_sign_language_sign_recognition"
---

# signspell

**Live ASL fingerspelling alphabet recognition — straight from your webcam.**

`signspell` recognises the American Sign Language manual alphabet (A–Z) in real
time using MediaPipe hand tracking and an LSTM model trained on 30-frame
keypoint sequences. It ships with a pretrained model and a polished webcam UI,
and it works both as a command-line tool and an importable library.

---

## Install

```bash
pip install signspell
```

> Requires Python 3.9–3.11. A webcam is required for live recognition.

## Run it (CLI)

```bash
signspell                  # default webcam, bundled model, pro UI
signspell --camera 1       # pick a different camera
signspell --threshold 0.6  # require higher confidence
signspell --no-mirror      # disable mirrored view
```

**In-window keys:** `q` quit · `c` clear sentence · `SPACE` add a space.

## Use it (library)

Run the full UI from code:

```python
import signspell
signspell.run()
```

Or drive recognition yourself, frame by frame:

```python
import cv2
import signspell

rec = signspell.Recognizer()
cap = cv2.VideoCapture(0)

while True:
    ok, frame = cap.read()
    if not ok:
        break
    letter, confidence, probs =…
