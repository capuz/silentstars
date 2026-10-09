---
repo: "iGavroche/rocm-ninodes"
name: "rocm-ninodes"
description: "RocM Optimized ComfyUI nodes"
readmeQualityOk: true
url: "https://github.com/iGavroche/rocm-ninodes"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 46
forks: 3
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-03T13:47:30Z"
lastCommitAt: "2026-10-09T18:56:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 34
maintainers: ["jonaphin"]
openGraphImageUrl: "https://opengraph.githubassets.com/61e2bff02ff9725a7a0278fbfa797021524dd65d90fb8a057125b35e83046a79/iGavroche/rocm-ninodes"
---

# ROCm Ninodes: ROCm-Optimized Nodes for ComfyUI (v2.3.11)

**ROCm Ninodes** provides ComfyUI nodes tuned for AMD GPUs with ROCm (e.g. gfx1151 / Strix Halo): VAE decode, KSampler, checkpoint/diffusion/GGUF/LoRA loaders, **LTX2 prompt generation**, **SamplerCustomAdvanced drop-in**, **Veda sparse attention for MiniMax H3**, and performance/memory monitoring. Install via ComfyUI Manager, `comfy node install rocm-ninodes`, or clone into `custom_nodes`.

## ⬆️ Upgrade to v2 (Required for existing users)

If you were on v1.x, run the upgrade script to clean legacy files and ensure the new package layout is detected by ComfyUI.

### Windows (PowerShell)
```powershell
uv run python tools/upgrade_to_v2.py
```

### Linux/Mac
```bash
uv run python tools/upgrade_to_v2.py
```

What it does:
- Backs up legacy `rocm_nodes.py` to `backup/rocm_nodes.py.bak` (if present)
- Removes any temporary `temp_*.py` files from earlier extractions
- Verifies `rocm_nodes/` package structure is intact
- Prints next steps (restart ComfyUI)

After running:
1) Restart ComfyUI completely
2) Verify nodes appear under "ROCm Ninodes" categories
3) If nodes don’t appear, clear ComfyUI cache and restart again

**ROCm…
