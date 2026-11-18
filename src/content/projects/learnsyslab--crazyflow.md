---
repo: "learnsyslab/crazyflow"
name: "crazyflow"
description: "Scalable drone simulation using JAX."
readmeQualityOk: true
url: "https://github.com/learnsyslab/crazyflow"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 205
forks: 48
openIssues: 7
closedIssues: 56
watchers: 4
contributors: 18
recentReleases: 2
createdAt: "2024-11-08T10:30:23Z"
lastCommitAt: "2026-11-18T12:07:51Z"
lastReleaseAt: "2026-10-14T21:35:14Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 44
maintainers: ["amacati", "ratheron", "rducrist"]
openGraphImageUrl: "https://opengraph.githubassets.com/8edf74d9594cad78159b434fa9bbfac5306ce2d10b85fe3efe73248d835a9c05/learnsyslab/crazyflow"
---

--------------------------------------------------------------------------------

  **Fast, parallelizable simulations of quadrotor drones with JAX.**

Crazyflow is a research simulator for quadrotors. It runs batched, differentiable simulations on CPU and GPU via JAX, with analytical and abstracted dynamics.

```python
import numpy as np
from crazyflow.sim import Sim
from crazyflow.control import Control
from scipy.spatial.transform import Rotation as R

sim = Sim(n_worlds=4096, n_drones=1, control=Control.state)
cmd = np.zeros((4096, 1, 16))
cmd[..., 9:13] = R.from_euler("z", 0.0).as_quat()
cmd[..., 2] = 0.5  # hover at 0.5 m across all worlds

for _ in range(100):
    sim.state_control(cmd)
    sim.step(sim.freq // sim.control_freq)
    sim.render()
```

## Documentation

[learnsyslab.github.io/crazyflow](https://learnsyslab.github.io/crazyflow) — installation, user guide, examples, and API reference.
