---
repo: "CondadosAI/modern-yolonas"
name: "modern-yolonas"
description: "Modern re-implementation of the famous YOLO-NAS model"
readmeQualityOk: true
url: "https://github.com/CondadosAI/modern-yolonas"
homepage: "https://condadosai.github.io/modern-yolonas/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["computer-vision", "frigate", "onnxruntime", "openvino", "tensorrt", "yolo", "yolonas"]
stars: 31
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-02-05T21:33:22Z"
lastCommitAt: "2026-09-19T01:17:25Z"
lastReleaseAt: "2026-08-17T01:51:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["Gabriellgpc", "alancneves", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70e256af5c7a07ad5e918714e235d2b0cea633ebf08ed0978884f3693861b062/CondadosAI/modern-yolonas"
---

<h1 align="center">modern-yolonas</h1>

<h3 align="center">A clean, minimal reimplementation of YOLO-NAS — no factories, no registries, no OmegaConf. Just PyTorch.</h3>

</p>

</p>

</p>

  <sub>YOLO-NAS-L, confidence 0.40. Source photo by
</p>

</p>

---

**modern-yolonas** is YOLO-NAS object detection rewritten so you can read the whole thing:
a model variant is a function, a config is a dataclass, and there is no layer of indirection
that exists only to be configurable. `state_dict` keys match
[super-gradients](https://github.com/Deci-AI/super-gradients) exactly, so the original
pretrained COCO checkpoints load with `strict=True`.

Detections come back as [`supervision`](https://github.com/roboflow/supervision) `Detections`,
so every annotator, tracker, zone and metric in that ecosystem works on them out of the box.
Training runs on Lightning, and the model exports to ONNX and OpenVINO — including a
self-contained graph for [Frigate](https://frigate.video/).

---

## 🚀 Updates

- **[2026-09-18]** `v0.5.0` — training moved to [PyTorch Lightning](https://lightning.ai/);
  quantization (`yolonas quantize` for PTQ, `yolonas qat` for QAT) on `torch.ao.quantization`
  FX graph mode;…
