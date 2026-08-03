---
repo: "slepher/astranaut"
name: "astranaut"
description: "traverse erlang ast and elixir macro in erlang."
readmeQualityOk: true
url: "https://github.com/slepher/astranaut"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [100]
topics: ["ast", "traverse", "macro", "quote"]
stars: 16
forks: 0
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-01-17T12:24:17Z"
lastCommitAt: "2026-08-03T06:36:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 65
maintainers: ["slepher"]
openGraphImageUrl: "https://opengraph.githubassets.com/9050edaa9121b65b497dfdb9a9ea03e2e0ea971afb10746761cc412c391b8c27/slepher/astranaut"
---

# requirements

&emsp;&emsp; erlang R19 or higher  
  
# traverse

### traverse functions:

```erlang
  astranaut_traverse:map(map_fun(), form(), Opts :: opts()) -> 
    traverse_return(node()) | parse_transform_return(node()).
    
  astranaut_traverse:reduce(reduce_fun(), state(), form(), Opts :: opts()) -> 
    traverse_return(state()).
    
  astranaut_traverse:map_with_state(map_state_fun(), state(), form(), Opts :: opts()) -> 
    traverse_return(node()) | parse_transform_return(node()).
    
  astranaut_traverse:mapfold(mapfold_fun(), state(), form(), Opts :: opts()) -> 
    traverse_return({form(), state()}).
```

*arguments*

```erlang
  form()    :: node() | [node()].
  node()    :: erlang ast node.
  state()   :: any().
```

*traverse_fun()*

```erlang
  map_fun()       :: (node(), Attr :: attr()) -> TraverseFunReturn :: traverse_fun_return(node()).
  reduce_fun()    :: (node(), state(), Attr :: attr()) -> TraverseFunReturn :: traverse_fun_return(state()).
  map_state_fun() :: (node(), state(), Attr :: attr()) -> TraverseFunReturn :: traverse_fun_return(node()).
  mapfold_fun()   :: (node(), state(), Attr :: attr()) -> TraverseFunReturn ::…
