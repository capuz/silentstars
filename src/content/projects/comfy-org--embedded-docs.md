---
repo: "Comfy-Org/embedded-docs"
name: "embedded-docs"
description: "ComfyUI help pages"
readmeQualityOk: true
url: "https://github.com/Comfy-Org/embedded-docs"
homepage: "https://pypi.org/project/comfyui-embedded-docs/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 56
forks: 25
openIssues: 6
closedIssues: 17
watchers: 2
contributors: 22
recentReleases: 7
createdAt: "2025-05-24T20:24:34Z"
lastCommitAt: "2026-08-15T04:03:13Z"
lastReleaseAt: "2026-07-06T00:38:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 62
maintainers: ["lin-bot23", "comfyui-wiki", "alexisrolland"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e326ab66afb600b48410c0fa9b924ebbf317e0d7bab1337f3f1ad7a13845cdc/Comfy-Org/embedded-docs"
---

# comfyui_embedded_docs

> [!NOTE]
> This is only for core nodes. For embedded custom node documentation, please see <https://docs.comfy.org/custom-nodes/help_page>

## Updating Documentation

Each core node should have a folder containing its node name, then a two letter locale.md, and potentially any assets along with it in the same folder.

See [FluxProUltraImageNode](https://github.com/Comfy-Org/embedded-docs/tree/main/docs/FluxProUltraImageNode) as an example.

> [!NOTE]
> A fallback is simply docs/NodeName.md, but this is discouraged.

## Previewing Changes Locally

To preview your documentation changes in ComfyUI:

1. **Install editable version (optional but recommended):**

   ```bash
   # If you have one, activate your ComfyUI virtual environment first
   pip uninstall comfyui-embedded-docs  # Remove existing PyPI version
   pip install -e /path/to/embedded-docs/  # Install editable version
   ```

2. **Launch and preview:**
   - Start ComfyUI
   - Refresh the frontend tab after making documentation changes

> [!TIP]
> The editable installation allows you to see changes immediately after copying files, without reinstalling the package.

## Publishing

The package is…
