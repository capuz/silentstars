---
repo: "pluma-lang/pluma"
name: "pluma"
description: "A simple language for simple programming"
readmeQualityOk: true
url: "https://github.com/pluma-lang/pluma"
language: "Odin"
languages: ["Odin"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-11-03T14:26:03Z"
lastCommitAt: "2026-11-23T13:29:07Z"
lastReleaseAt: "2026-11-23T13:27:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 48
maintainers: ["pluma-lang"]
openGraphImageUrl: "https://opengraph.githubassets.com/60f3d7a03e7f35e84fa41b069e340ceb6bc83de9e8ddcdd3ca9d7134f4ba3215/pluma-lang/pluma"
---

# Pluma

Pluma programs end in `.pluma`.

```
# this is a comment
let x = 42
```

## let

`let name = value` creates a variable.
also `let name be value` creates a variable.

```
let age = 21
age = age + 1
```

## print

```
print "hello"
print 'how are you?'
print 1 + 2
```

## input

```
let name = input "Your name? "
print "Hi " + name
```

## Operators

| Operators | Meaning |
|---|---|
| `+` `-` `*` `/` `//` `%` `^` | add, subtract, multiply, divide, integer division, modulo, power |
| `>` `<` `>=` `<=` `==` `!=` | comparisons |
| `and` `or` `not` | logic |
| `-x` | negative number |

## if / else

```
if age >= 18 then
    print "adult"
else
    print "minor"
```

## while

```
let i = 0
while i < 3 then
    print i
    i = i + 1
```

## foreach

```
foreach n in numbers then
    print n
```

### range
```
foreach n in range from 0 to 10 then
    print n
```

## Break/Continue

`continue` skips the rest of the loop code and continues to the next iteration
`break` interrupts a loop entirely

## function and return

```
function add with a, b
    return a + b

print add with 2, 3
```

## Lists

`list with a, b, c` creates a list. `list with null` creates an empty list.
