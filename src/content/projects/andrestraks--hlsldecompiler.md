---
repo: "AndresTraks/HlslDecompiler"
name: "HlslDecompiler"
description: "Decompiles Shader Model 1–4 shaders into HLSL code (work in progress)"
readmeQualityOk: true
url: "https://github.com/AndresTraks/HlslDecompiler"
language: "C#"
languages: ["C#"]
languagePcts: [80]
stars: 92
forks: 24
openIssues: 9
closedIssues: 8
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2016-01-02T13:35:02Z"
lastCommitAt: "2026-09-06T08:03:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 30
maintainers: ["AndresTraks"]
openGraphImageUrl: "https://opengraph.githubassets.com/e15b666e5e2a397f3974e03e81ffc649b6147dadb4287a23c2e5ac8ff4c0c02e/AndresTraks/HlslDecompiler"
---

# HlslDecompiler
Decompiles Shader Model 3.0 shaders into HLSL code

## Usage
`HlslDecompiler [--ast] [--print] shader.fxc`

The program will output the assembly listing in shader.asm, e.g.
```
ps_3_0
def c0, 1, 0, 2, 0
dcl_texcoord v0.xz
mov oC0.x, -v0.z_abs
mad oC0.yzw, v0.xxx, c0.xyy, c0.yxz
```
and the decompiled HLSL code in shader.fx:
```hlsl
float4 main(float3 texcoord : TEXCOORD) : COLOR
{
	float4 o;

	o.x = -abs(texcoord.z);
	o.yzw = texcoord.xxx * float3(1, 0, 0) + float3(0, 1, 2);

	return o;
}
```

With the --ast option, the program will attempt generate more readable HLSL.
It does this by taking the shader bytecode, constructing an abstract syntax tree, simplifying it and compiling to HLSL:
```hlsl
float4 main(float3 texcoord : TEXCOORD) : COLOR
{
	return float4(-abs(texcoord.z), texcoord.x, 1, 2);
}
```
