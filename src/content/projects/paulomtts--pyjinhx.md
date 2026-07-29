---
repo: "paulomtts/pyjinhx"
name: "pyjinhx"
description: "UI utility layer for template-based python web apps. Uses Pydantic and Jinja2 - works great with HTMX!"
readmeQualityOk: true
url: "https://github.com/paulomtts/pyjinhx"
homepage: "https://paulomtts.github.io/pyjinhx/"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["html", "htmx", "jinja2", "pydantic", "python", "templates"]
stars: 9
forks: 0
openIssues: 59
closedIssues: 75
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-03T06:58:02Z"
lastCommitAt: "2026-07-29T06:14:18Z"
lastReleaseAt: "2026-01-20T03:47:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 54
maintainers: ["paulomtts", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fec83157f8291fe50c54d37d135ee382ddcc82177406a33e0f09eb7a1e524db/paulomtts/pyjinhx"
---

# PyJinHx

Type-safe UI components for Python web apps. A component is a Pydantic model plus a Jinja template sitting next to it — nest them with PascalCase tags, and co-located JS/CSS is collected automatically at render.

```bash
pip install pyjinhx
```

## Example

A `Card` that renders a `Button` — the tag's attributes become validated Pydantic fields:

```python
# components/button.py
from pyjinhx import BaseComponent

class Button(BaseComponent):
    id: str
    text: str
    variant: str = "default"
```

```html

<button id="{{ id }}" class="btn btn-{{ variant }}">{{ text }}</button>
```

```html

  <h2>{{ title }}</h2>
  <Button id="cta" text="{{ button_text }}" variant="primary"/>
</div>
```

```python
# components/card.py
from pyjinhx import BaseComponent, Renderer

class Card(BaseComponent):
    id: str
    title: str
    button_text: str = "Sign up"

Renderer.set_default_environment("./components")
html = Card(id="hero", title="Get Started").render()
```

Drop a `button.css` or `card.js` next to the component and it's included once, automatically.

## Reactivity (HTMX)

Components declare what state they depend on. Return one component from a mutation route — every…
