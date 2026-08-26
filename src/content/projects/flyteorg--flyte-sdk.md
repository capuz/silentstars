---
repo: "flyteorg/flyte-sdk"
name: "flyte-sdk"
description: "Type-safe, distributed orchestration of agents, ML pipelines, and real-time inference — in pure Python with async/await."
readmeQualityOk: true
url: "https://github.com/flyteorg/flyte-sdk"
homepage: "https://flyte.org/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai", "async", "ml", "mlops"]
stars: 126
forks: 59
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 74
recentReleases: 0
createdAt: "2025-07-29T15:19:31Z"
lastCommitAt: "2026-08-26T04:18:06Z"
lastReleaseAt: "2025-08-14T22:19:30Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 46
maintainers: ["cosmicBboy", "EngHabu", "kumare3"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1d4000a8f61ef75d27f2208ad60f911091c8563547bb7f613d41b17629f87a0/flyteorg/flyte-sdk"
---

> [!IMPORTANT]
> ## Flyte 2 is now generally available!
>
> Read more in the announcement [here](https://www.union.ai/blog-post/flyte-2-is-generally-available-the-durable-open-source-ai-runtime).
>
> **Want to try Flyte 2 locally?** Run the **[Devbox locally](https://www.union.ai/docs/v2/flyte/user-guide/get-started/run-modes/running-devbox/)**,
> or you can try it on Github Codespaces.
>
> [](https://codespaces.new/flyteorg/flyte-devbox-codespace?quickstart=1)

---

# Flyte 2 SDK

**Reliably orchestrate ML pipelines, models, and agents at scale — in pure Python.**

## 10 minutes to Flyte 2

The quickest way to get a feel for Flyte 2 is in this notebook:

## Install

```bash
pip install flyte
```

## Example

Create a file called `flyte_intro.py` with the following content:

```python
import asyncio
import flyte

env = flyte.TaskEnvironment(
    name="hello_world",
    image=flyte.Image.from_debian_base(python_version=(3, 12)),
)

@env.task(retries=3, cache="auto")  # 👈 add retries and caching
async def predict(x: int) -> int:
    return 2 * x + 5

@env.task
async def main(data: list[int]) -> float:
    xs = await asyncio.gather(*(predict(x) for x in data))
    return sum(xs) /…
