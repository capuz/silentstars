---
repo: "LucaTuerk/godot-object-compiler"
name: "godot-object-compiler"
description: "A C++ bindings generator for  GDExtensions."
url: "https://github.com/LucaTuerk/godot-object-compiler"
homepage: "https://godot-object-compiler.readthedocs.io/latest"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["cpp", "gamedev-tool", "gamedevelopment", "godot", "gdextension", "codegeneration"]
stars: 9
forks: 3
openIssues: 7
closedIssues: 40
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-01-16T15:42:51Z"
lastCommitAt: "2026-06-26T21:30:29Z"
lastReleaseAt: "2026-06-25T20:41:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 59
maintainers: ["LucaTuerk", "dependabot[bot]", "taatu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1135790118/90b4686c-9c6e-4ab5-97eb-705ebb944b5f"
fundingLinks: ["KO_FI:https://ko-fi.com/lucaiantuerk"]
---

</a>
	</a>
    </a>
	</a>
	</a>
</div>

___

[<img src="./docs/img/logo_header.svg" width="100%" />](./docs/img/logo_header.svg)

___

The Godot Object Compiler is a <b>code generation tool for GDExtensions</b>. It generates bindings and other builderplate code for <b>efficent development in C++</b> while maintaining full configurability via <b>expressive macros</b> generated directly from the godot-cpp source used to build your extension.
</p>

# Example

GOC provides macros that guide the code generator and allows you to expose Godot Object derived classes and their
properties, methods and signals to the engine.

### Classes

```cpp
#include "godot_object_compiler/macros.h"
#include "example_node.generated.h"

GODOT_CLASS();
class ExampleNode : public Node3D {
	GODOT_GENERATED_BODY();

    ...
};
```

A class can be marked as a godot class so it is considered by the generators. Within the class body we add a generated
body macro. This hook is used by the GOC to inject definitions into the class, such as getters and setters and other
additional methods.

### Properties

Next we might want to expose a bunch of properties. If needed we can always provide our own property hints and…
