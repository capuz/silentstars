---
repo: "boopdotpng/blackhole-py"
name: "blackhole-py"
description: "python driver and runtime for tenstorrent blackhole cards"
readmeQualityOk: true
url: "https://github.com/boopdotpng/blackhole-py"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["tenstorrent"]
stars: 26
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-14T02:18:55Z"
lastCommitAt: "2026-11-19T05:05:27Z"
lastReleaseAt: "2026-09-13T18:11:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 45
maintainers: ["boopdotpng"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a4117bd526dbf7ccae18b2381a08adaa8206dc7c04aeb5e909346c0a730fc96/boopdotpng/blackhole-py"
---

# blackhole-py

Write kernels in TTRV, run them on a Tenstorrent Blackhole card from Python, CUDA style.

```python
import numpy as np
from ttrv import Device, Var

d = Device(0)                                      # open card 0; it closes at exit
x = d.array(np.ones(1024, np.float32))             # DRAM buffer, filled from the host
y = d.empty(1024, "fp32")
scale = d.kernel("scale.ttrv", N=1024)             # compile with N defined, install
scale(x=x, y=y, k=2)                               # queued; returns at once
print(y.numpy())                                   # waits for the device, copies back

k = Var("k")
with d.graph() as g:                               # launches are recorded, not run
  scale(x=x, y=y, k=k)
g(k=3).wait()                                      # replay with k bound to 3
```

`d.array` also takes safetensors tensors (`helpers.safe_load`), so a checkpoint goes to the card as stored.

## Requirements

- `tt-kmd` >= 2.12.0 (`smi.py` reads telemetry with the `NOC_READ` ioctl, added in 2.12.0)
- Python with `numpy` and `tiktoken`
- `clang` and `llvm-objcopy`
