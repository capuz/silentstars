---
repo: "slepher/lenses"
name: "lenses"
description: "lens in erlang"
readmeQualityOk: true
url: "https://github.com/slepher/lenses"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [100]
topics: ["erlang", "lens", "prism", "traversal", "iso"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-10-20T11:55:59Z"
lastCommitAt: "2026-08-03T06:43:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 53
maintainers: ["slepher"]
openGraphImageUrl: "https://opengraph.githubassets.com/e829d1faaa123836533663d311c3c88fde672a510b0b6217fbc85c48a7561359/slepher/lenses"
---

# Lenses

Lenses is an Erlang port of the Haskell library lens.

[lens](http://hackage.haskell.org/package/lens)

It currently implements a focused subset of the upstream API.

## Lens

    type Lens s t a b = forall f. Functor f => (a -> f b) -> (s -> f t)
    lens:lens(s -> a, s -> b -> t) -> Lens s t a b
    
    Lens = lens:lens(fun({_, A}) -> A end, fun({C, _}, B) ->  {C, B} end),
    ?assertEqual(world, getter:view(Lens, {hello, world})),
    ?assertEqual({hello, another_world}, setter:set(Lens, another_world, {hello, world})).

    lens:'_1'(), lens:'_2'()          % tuple element lenses
    lens:at(Key)                      % map key lens (Maybe a)
    lens:choosing(L, R)               % combine two optics over an Either
    lens:alongside(L, R)              % combine two optics over a pair
    lens:clone_lens(Lens)

## Traversal

    type Traversal s t a b = forall f. Applicative f => (a -> f b) -> (s -> f t)
    traversal:traverse() -> forall t. Traversable t => Traversal (t a) (t b) a b

    Traversal = traversal:traverse(),
    ?assertEqual([2, 4], setter:over(Traversal, fun(A) -> A + 1 end, As)).

    traversal:both()            % traversal over both elements of a…
