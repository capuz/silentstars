---
repo: "benoitc/erlang_wasm"
name: "erlang_wasm"
description: "A WebAssembly runtime implemented in Erlang/OTP"
readmeQualityOk: true
url: "https://github.com/benoitc/erlang_wasm"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [98]
stars: 39
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-29T16:34:27Z"
lastCommitAt: "2026-09-06T08:03:48Z"
lastReleaseAt: "2026-09-02T11:26:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["benoitc"]
openGraphImageUrl: "https://opengraph.githubassets.com/33c7d102afa53e93e2c170475665c86ad2a4ff3687d1c831d353be66f83a0956/benoitc/erlang_wasm"
---

# erlang_wasm

A WebAssembly runtime implemented in Erlang/OTP.

Decoding, validation, instantiation, execution, linear memory and WASI are all
implemented here. This is not a binding to Wasmtime, Wasmer, WAMR or wasm3. The
only native code is an optional 200-line file NIF that closes one specific
security window, and the runtime works without it.

```erlang
{ok, Mod}  = wasm:load_file("plugin.wasm"),
{ok, Inst} = wasm:instantiate(Mod, #{
    {~"env", ~"log"} =>
        fun(Ctx, [Ptr, Len]) ->
            {ok, Bin} = wasm:read_memory(Ctx, Ptr, Len),
            logger:info("~ts", [Bin]),
            {ok, []}
        end}),
{ok, [Result]} = wasm:call(Inst, ~"run", [42]).
```

Nothing raises. A malformed binary, an ill-typed module, a trap and a resource
limit all come back as `{error, Error}` carrying a class, a machine-readable
kind, the specification's message text, and context.

## AI-assisted development

This software is developed with **strong assistance from GPT 5.6, Claude Opus 5, and Fable**, with humans leading the architecture, semantics, testing, benchmarking, and debugging.

We say this openly because it shaped how the project was built. If you are not comfortable…
