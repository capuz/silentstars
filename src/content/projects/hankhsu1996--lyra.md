---
repo: "hankhsu1996/lyra"
name: "lyra"
description: "A SystemVerilog compiler and simulator. It builds a design into a native program and runs it."
readmeQualityOk: true
url: "https://github.com/hankhsu1996/lyra"
language: "C++"
languages: ["C++", "SystemVerilog"]
languagePcts: [77, 20]
topics: ["compiler", "simulation", "simulator", "systemverilog", "verilog", "eda", "hdl", "llvm", "verification"]
stars: 6
forks: 1
openIssues: 317
closedIssues: 48
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-22T05:42:03Z"
lastCommitAt: "2026-11-01T08:30:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 66
maintainers: ["hankhsu1996"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a1a202d54569c9e46593712a52a0254f3783f7feb17ff7c0c3523d6ce2792cc/hankhsu1996/lyra"
discussionCount: 0
postedAt: "2026-10-09T10:56:38.881Z"
---

# Lyra

Lyra is a SystemVerilog compiler and simulator. It builds a design into a native program and runs
it. It's built on [slang](https://github.com/MikePopoloski/slang) and [LLVM](https://llvm.org/).

## Building Lyra

Lyra is built from source with [Bazel](https://bazel.build/), through
[bazelisk](https://github.com/bazelbuild/bazelisk). The build fetches the compiler and the C++
library it needs, so nothing else has to be installed first.

```bash
git clone https://github.com/hankhsu1996/lyra
cd lyra
bazel build //:lyra
```

The command is then `bazel-bin/lyra`; the examples below call it `lyra`. It runs on x86-64 Linux,
and [CONTRIBUTING.md](https://github.com/hankhsu1996/lyra/blob/HEAD/CONTRIBUTING.md) says which Linux and which C++ compiler release it needs.

## Your first simulation

Save this as `counter.sv`:

```systemverilog
module counter_tb;
  logic clk = 0;
  logic [3:0] count = 0;

  always #5 clk = ~clk;
  always @(posedge clk) count <= count + 1;

  initial begin
    repeat (3) begin
      @(negedge clk);
      $display("%0t: count = %0d", $time, count);
    end
    $finish;
  end
endmodule
```

Run it:

```console
$ lyra run --top counter_tb counter.sv
10: count…
