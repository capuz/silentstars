---
repo: "ozcancelik/harfiyen"
name: "harfiyen"
description: "Tarayıcıda çalışan Türkçe konuşma tanıma ve altyazı aracı. Otomatik noktalama, canlı transkript ve altyazılı video dışa aktarma. Tamamen yerel, WebGPU destekli."
readmeQualityOk: true
url: "https://github.com/ozcancelik/harfiyen"
homepage: "https://harfiyen-app.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["local-first", "onnx", "onnxruntime-web", "speech", "speech-recognition", "speech-to-text", "subtitles", "transcription", "turkish", "webgpu"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-09T08:40:18Z"
lastCommitAt: "2026-10-10T10:04:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 20
maintainers: ["ozcancelik"]
openGraphImageUrl: "https://opengraph.githubassets.com/36028ff5cc71fff71781403095551782b70b3685043b6f762579e8ac2c87603c/ozcancelik/harfiyen"
---

Ses ve video bilgisayarından çıkmaz. 

  Turkish speech-to-text and styled video captions, right in your browser.<br />
  Transcribe files or live audio, add punctuation, and export captioned videos — all processed locally.

https://github.com/user-attachments/assets/72944ea4-75aa-4462-b5eb-b98a2f604bfc

---

Harfiyen, [seda-v0.1](https://huggingface.co/atasoglu/seda-v0.1) Türkçe konuşma tanıma modelini doğrudan
tarayıcıda, ekran kartı üzerinde (**WebGPU**) çalıştırır. Bir video ya da ses dosyası yüklersin, kelimeler
zaman kodlarıyla belirir, istediğin altyazı stilini seçersin ve altyazılı videoyu indirirsin. Mikrofonla
konuşurken de canlı çalışır.

## Neler yapabilir

### Yazıya döküm

- Video ve ses dosyaları: MP4, MOV, MKV, WebM, MP3, M4A, WAV, FLAC, OGG. Uzun dosyaları parça parça işler,
  bellek şişmez.
- Canlı mikrofon: kelimeler konuştuktan yaklaşık bir saniye sonra belirir, kayıt aynı anda saklanır.
- Üç doğruluk ayarı: **Hızlı**, **Dengeli** ve dil modeliyle **En doğru**.
- Otomatik noktalama ve büyük harf: döküm bitince nokta, virgül ve soru işareti eklenir; cümle başları
  ve özel adlar büyük harfle yazılır. Türkçe özel ad ekleri için kesme işareti eklenir…
