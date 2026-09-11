---
repo: "wherrera10/ThreadSafeDicts.jl"
name: "ThreadSafeDicts.jl"
description: "Thread safe Julia Dict"
readmeQualityOk: true
url: "https://github.com/wherrera10/ThreadSafeDicts.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["dict", "threading", "threadsafe"]
stars: 26
forks: 5
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2019-12-24T07:32:14Z"
lastCommitAt: "2026-09-11T08:14:50Z"
lastReleaseAt: "2021-07-20T07:28:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 51
maintainers: ["wherrera10", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/383763cbe8074edd215537542cf950f060072b4150093821f02dd2a47c1ee774/wherrera10/ThreadSafeDicts.jl"
---

# ThreadSafeDicts.jl
A thread-safe `Dict` type for Julia programming

<br>

## Structs and Functions

### `ThreadSafeDict`

```julia
struct ThreadSafeDict{K,V} <: AbstractDict{K,V}
    dlock::ReentrantLock
    d::Dict{K,V}
    ThreadSafeDict{K,V}() where {K,V} = new(ReentrantLock(), Dict{K,V}())
    ThreadSafeDict{K,V}(d::Dict{K,V}) where {K,V} =
        new(ReentrantLock(), copy(d))
    ThreadSafeDict{K,V}(itr) where {K,V} =
        new(ReentrantLock(), Dict{K,V}(itr))
end

ThreadSafeDict()
ThreadSafeDict(d::Dict{K,V}) where {K,V}
ThreadSafeDict(itr)

Struct and constructor for ThreadSafeDict. There is one lock per Dict struct. All functions lock this lock, pass
arguments to the d member Dict, unlock the ReentrantLock, and then return what is returned by the Dict.
<br><br>

    getindex(dic::ThreadSafeDict, k)

    setindex!(dic::ThreadSafeDict, k, v)

    haskey(dic::ThreadSafeDict, k)

    get(dic::ThreadSafeDict, k, v)

    get!(dic::ThreadSafeDict, k, v)

    pop!(dic::ThreadSafeDict)

    empty!(dic::ThreadSafeDict)

    delete!(dic::ThreadSafeDict, k)

    length(dic::ThreadSafeDict)

    iterate(dic::ThreadSafeDict)

    iterate(dic::ThreadSafeDict, i)

    print(io::IO,…
