---
repo: "lifthrasiir/aqueous"
name: "aqueous"
description: "Aqueous Archive Format"
readmeQualityOk: true
url: "https://github.com/lifthrasiir/aqueous"
homepage: "https://lifthrasiir.github.io/aqueous/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["backup", "compression", "compressor", "data-compression", "decompression", "decompressor"]
stars: 45
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-10-13T21:30:16Z"
lastCommitAt: "2026-11-11T17:47:14Z"
lastReleaseAt: "2026-11-09T17:00:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 46
maintainers: ["lifthrasiir"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6bedbad9e5ea4bc510aea468f61e4345eaa90a0796b5b0bbe502d9bc34e91fd/lifthrasiir/aqueous"
---

# 💧 Aqueous

Aqueous is an archive format and an archiver, `aqr`, built around lossless recompression.
Most files people keep are already compressed, by encoders far weaker than what a modern
machine can afford: JPEG's and MP3's Huffman codes, deflate in PNG, ZIP, PDF and gzip, LZ4 and
Snappy in browser profiles and databases. Aqueous undoes that compression, codes the contents
with stronger models, and rebuilds the original files bit for bit on extraction.

- **Recompressors** for a long and growing list of formats, each in its own crate under
  `codecs/` with a `FORMAT.md` describing what it stores. To name some: images (PNG, JPEG, GIF,
  PSD, Clip Studio Paint, BMP and PNM, BCn textures in DDS), audio and video (MP3, FLAC, Ogg
  Vorbis, WAV and AIFF, FMOD sound banks, ProRes, Matroska and WebM), documents and data (PDF,
  SQLite, HDF5, FITS, CSV and JSON Lines, plain text, FASTA, Wavefront OBJ, gettext catalogs,
  GGUF models),
  archives and images of discs (ZIP, 7z, RAR, tar, ar and cpio, ISO 9660 and UDF, CAB and CHM,
  LHA, ALZ and EGG, Electron's asar, git packs), the compressors found in and around them
  (deflate in gzip and zlib, LZMA and xz, bzip2, LZ4, Snappy, LZO,…
