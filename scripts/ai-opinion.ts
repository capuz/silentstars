/**
 * ai-opinion.ts — posts a qualitative AI opinion on a submitted GitHub repo
 *
 * Fetches the repo's README and description, calls GitHub Models API
 * (gpt-4o-mini), and posts the result as an issue comment.
 *
 * Env vars:
 *   GITHUB_TOKEN      — required (also used for GitHub Models API)
 *   SUBMISSION_REPO   — required (e.g. owner/repo)
 *   ISSUE_NUMBER      — required
 *   REPO_OWNER        — required (the silentstars repo owner)
 *   REPO_NAME         — required (the silentstars repo name)
 */

const TOKEN         = process.env.GITHUB_TOKEN ?? '';
const SUBMISSION    = process.env.SUBMISSION_REPO ?? '';
const ISSUE_NUMBER  = Number(process.env.ISSUE_NUMBER ?? '0');
const REPO_OWNER    = process.env.REPO_OWNER ?? '';
const REPO_NAME     = process.env.REPO_NAME ?? '';

const MAX_README_WORDS = 600;

async function ghFetch<T>(path: string): Promise<{ ok: boolean; data: T }> {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  const data = await res.json() as T;
  return { ok: res.ok, data };
}

async function fetchRepoInfo(): Promise<{ name: string; description: string; language: string }> {
  const { ok, data } = await ghFetch<{
    name: string;
    description: string | null;
    language: string | null;
  }>(`/repos/${SUBMISSION}`);
  if (!ok) return { name: SUBMISSION, description: '', language: '' };
  return {
    name: data.name,
    description: data.description ?? '',
    language: data.language ?? '',
  };
}

async function fetchReadme(): Promise<string> {
  const { ok, data } = await ghFetch<{ content?: string }>(`/repos/${SUBMISSION}/readme`);
  if (!ok || !data.content) return '';
  const raw = Buffer.from(data.content, 'base64').toString('utf-8');
  // Strip markdown syntax and truncate
  const text = raw.replace(/```[\s\S]*?```/g, '').replace(/[#*`_~\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').slice(0, MAX_README_WORDS).join(' ');
}

async function getAIOpinion(name: string, description: string, language: string, readme: string): Promise<string> {
  const prompt = `You are a curator for SilentStars, a site that highlights undervalued open-source projects ("alive but invisible" — good work with little reach).

Analyze this project and write 2-3 sentences assessing:
- Is the README clear about what the project does?
- Does it feel genuinely undervalued (good quality, low visibility)?
- What makes it interesting or worth featuring?

Be direct and specific. Do not mention star counts or metrics — focus on qualitative aspects only.

Project: ${name}
Description: ${description || '(none)'}
Language: ${language || '(unknown)'}
README (excerpt):
${readme || '(no README found)'}`;

  const res = await fetch('https://models.inference.ai.azure.com/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub Models API error ${res.status}: ${err}`);
  }

  const json = await res.json() as { choices: Array<{ message: { content: string } }> };
  return json.choices[0]?.message?.content?.trim() ?? '';
}

async function postComment(body: string): Promise<void> {
  const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to post comment: ${res.status} ${err}`);
  }
}

async function main() {
  if (!TOKEN) throw new Error('GITHUB_TOKEN is required');
  if (!SUBMISSION) throw new Error('SUBMISSION_REPO is required');
  if (!ISSUE_NUMBER) throw new Error('ISSUE_NUMBER is required');
  if (!REPO_OWNER || !REPO_NAME) throw new Error('REPO_OWNER and REPO_NAME are required');

  console.log(`Fetching info for ${SUBMISSION}...`);
  const [info, readme] = await Promise.all([fetchRepoInfo(), fetchReadme()]);

  console.log('Calling GitHub Models API...');
  const opinion = await getAIOpinion(info.name, info.description, info.language, readme);

  if (!opinion) {
    console.log('No opinion returned — skipping comment.');
    return;
  }

  const comment = `🤖 **AI take:** ${opinion}`;
  console.log(`Posting comment:\n${comment}`);
  await postComment(comment);
  console.log('Done.');
}

main().catch(err => { console.error(err); process.exit(1); });
