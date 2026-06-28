/**
 * Generates a PNG card showing language hashtags with Devicon icons.
 * Outputs the file path to stdout as: CARD_PATH=/tmp/...
 *
 * Env vars:
 *   CARD_HASHTAGS  — space-separated list, e.g. "#typescript #javascript #rust"
 *   CARD_LABEL     — optional top label, e.g. "🌟 SilentStars"
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

// Devicon folder name may differ from the hashtag text
const DEVICON_FOLDER: Record<string, string> = {
  golang: 'go',
  cpp: 'cplusplus',
  csharp: 'csharp',
  fsharp: 'fsharp',
  objectivec: 'objectivec',
  embeddedc: 'embeddedc',
  coffeescript: 'coffeescript',
  webassembly: 'wasm',
  powershell: 'powershell',
  bash: 'bash',
  html5: 'html5',
  css3: 'css3',
  sass: 'sass',
};

function deviconUrl(tag: string): string | null {
  const folder = DEVICON_FOLDER[tag] ?? tag;
  // Community/identity tags have no icon
  const community = new Set([
    'opensource', 'indiedev', 'buildinpublic', 'sideproject',
    'developer', 'softwaredev', 'webdev', 'devs',
    'github', 'programming', 'coding',
  ]);
  if (community.has(tag)) return null;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${folder}/${folder}-original.svg`;
}

function buildHtml(hashtags: string[], label: string): string {
  const chips = hashtags.map(h => {
    const tag = h.replace(/^#/, '').toLowerCase();
    const iconUrl = deviconUrl(tag);
    const icon = iconUrl
      ? `<img src="${iconUrl}" width="22" height="22" style="vertical-align:middle;margin-right:5px;flex-shrink:0;" onerror="this.style.display='none'">`
      : '';
    return `<span style="display:inline-flex;align-items:center;background:#161b22;border:1px solid #30363d;border-radius:20px;padding:5px 12px;font-size:15px;color:#e6edf3;white-space:nowrap;">${icon}<span style="color:#58a6ff">${h}</span></span>`;
  }).join('');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 900px;
    background: #0d1117;
    font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
    padding: 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .label {
    font-size: 13px;
    color: #8b949e;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>
</head>
<body>
  ${label ? `<div class="label">${label}</div>` : ''}
  <div class="chips">${chips}</div>
</body>
</html>`;
}

const rawHashtags = (process.env.CARD_HASHTAGS ?? '').trim().split(/\s+/).filter(Boolean);
const label = process.env.CARD_LABEL ?? '';

if (rawHashtags.length === 0) {
  console.error('CARD_HASHTAGS is empty — nothing to render.');
  process.exit(1);
}

const html = buildHtml(rawHashtags, label);
const htmlPath = join(tmpdir(), `hashtag-card-${Date.now()}.html`);
writeFileSync(htmlPath, html);

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.goto(`file://${htmlPath}`);

// Resize viewport to match content height
const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
await page.setViewportSize({ width: 900, height: bodyHeight + 48 });

const outPath = join(tmpdir(), `hashtag-card-${Date.now()}.png`);
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`CARD_PATH=${outPath}`);
