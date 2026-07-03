---
repo: "melange-community/melange-json"
name: "melange-json"
description: "Compositional JSON encode/decode library and PPX for Melange and OCaml"
url: "https://github.com/melange-community/melange-json"
language: "OCaml"
languages: ["OCaml", "Raku"]
languagePcts: [53, 45]
topics: ["encoder-decoder", "melange", "ocaml", "ppx"]
stars: 25
forks: 7
openIssues: 20
closedIssues: 9
watchers: 4
contributors: 35
recentReleases: 0
createdAt: "2023-06-21T13:39:25Z"
lastCommitAt: "2026-07-03T12:39:08Z"
lastReleaseAt: "2025-03-11T10:14:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["pedrobslisboa", "Khady", "jchavarri"]
openGraphImageUrl: "https://opengraph.githubassets.com/fde6b3e8a7a5869f2cbd1bbb22b1fa28053b29b99e1d1af225f79fa6ce076fb4/melange-community/melange-json"
---

# melange-json

Compositional JSON encode/decode library and PPX for
[Melange](https://melange.re/).

Based on [@glennsl/bs-json](https://github.com/glennsl/bs-json).

The Decode module in particular provides a basic set of decoder functions to be
composed into more complex decoders. A decoder is a function that takes a
`Js.Json.t` and either returns a value of the desired type if successful or
raises an `Of_json_error` exception if not. Other functions accept a decoder and
produce another decoder. Like `array`, which when given a decoder for type `t`
will return a decoder that tries to produce a value of type `t array`. So to
decode an `int array` you combine `Melange_json.Of_json.int` with `Melange_json.Of_json.array`
into `Melange_json.Of_json.(array int)`. An array of arrays of ints? `Melange_json.Of_json.(array
(array int))`. Dict containing arrays of ints? `Melange_json.Of_json.(dict (array int))`.

## Example

```reason
type line = {
  start: point,
  end_: point,
  thickness: option(int)
}
and point = {
  x: int,
  y: int
};

module Decode = {
  let point = json =>
    Melange_json.Of_json.{
      x: json |> field("x", int),
      y: json |> field("y", int)
    };

  let…
