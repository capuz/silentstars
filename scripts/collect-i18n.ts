/**
 * collect-i18n.ts — flag and translate non-English project descriptions/READMEs.
 *
 * GitHub repo descriptions/READMEs can be in any language, but SilentStars posts and
 * pages are English-only. looksNonEnglish() is a cheap script-ratio heuristic used to
 * avoid an LLM call on every repo; translateToEnglish() is the actual translation via
 * GitHub Models API (same free-tier endpoint as scripts/ai-opinion.ts).
 */

// Unicode ranges for scripts that never overlap with English prose. Doesn't catch
// European languages written in Latin script (French/Spanish/German) — accepted
// limitation, out of scope for now.
const NON_LATIN_SCRIPT_RANGES: Array<[number, number]> = [
  [0x4e00, 0x9fff],   // CJK Unified Ideographs
  [0x3040, 0x30ff],   // Hiragana + Katakana
  [0xac00, 0xd7af],   // Hangul syllables
  [0x0400, 0x04ff],   // Cyrillic
  [0x0600, 0x06ff],   // Arabic
  [0x0590, 0x05ff],   // Hebrew
  [0x0900, 0x097f],   // Devanagari
  [0x0e00, 0x0e7f],   // Thai
];

function isNonLatinScript(codePoint: number): boolean {
  return NON_LATIN_SCRIPT_RANGES.some(([start, end]) => codePoint >= start && codePoint <= end);
}

export function looksNonEnglish(text: string): boolean {
  const trimmed = text.trim();
  if (trimmed.length < 3) return false;

  const chars = [...trimmed].filter(c => !/\s/.test(c));
  if (chars.length === 0) return false;

  const nonLatinCount = chars.filter(c => isNonLatinScript(c.codePointAt(0)!)).length;
  return nonLatinCount / chars.length > 0.15;
}

interface TranslationResult {
  lang: string;
  description: string;
  body: string;
}

export async function translateToEnglish(
  token: string,
  input: { description: string; body: string },
): Promise<TranslationResult | null> {
  const prompt = `You translate open-source project metadata to English for an English-only site.

Given a project description and a README excerpt, respond with STRICT JSON only, no markdown
fences, no commentary, in this exact shape:
{"lang":"<ISO 639-1 code of the ORIGINAL text>","description":"<English translation>","body":"<English translation>"}

Rules:
- Preserve technical terms, proper nouns, code identifiers, inline code, and full URLs (including markdown link targets) exactly as written.
- If a field is already in English, return it unchanged and still report the detected lang.
- If a field is empty, return it as an empty string.

Description: ${input.description || '(empty)'}
README excerpt:
${input.body || '(empty)'}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const res = await fetch('https://models.inference.ai.azure.com/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 900,
        temperature: 0,
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.warn(`  ⚠ translateToEnglish: API error ${res.status}`);
      return null;
    }

    const json = await res.json() as { choices: Array<{ message: { content: string } }> };
    const raw = (json.choices[0]?.message?.content?.trim() ?? '')
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/, '');

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      console.warn('  ⚠ translateToEnglish: response was not valid JSON');
      return null;
    }

    if (
      typeof parsed !== 'object' || parsed === null ||
      typeof (parsed as any).lang !== 'string' ||
      typeof (parsed as any).description !== 'string' ||
      typeof (parsed as any).body !== 'string'
    ) {
      console.warn('  ⚠ translateToEnglish: response missing expected fields');
      return null;
    }

    return parsed as TranslationResult;
  } catch (err) {
    console.warn(`  ⚠ translateToEnglish: ${(err as Error).message}`);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
