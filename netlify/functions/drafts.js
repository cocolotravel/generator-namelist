// Server-side proxy for drafts.cocolotravel.com so the API key never ships to the browser.
// The client calls /api/drafts/... (see netlify.toml redirect); this function forwards the
// request upstream with the real key, read from the DRAFTS_API_KEY Netlify environment variable.

const UPSTREAM = 'https://drafts.cocolotravel.com';
const FUNCTION_PREFIX = '/.netlify/functions/drafts';

exports.handler = async (event) => {
  const apiKey = process.env.DRAFTS_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server misconfigured: DRAFTS_API_KEY is not set' }),
    };
  }

  const upstreamPath = event.path.startsWith(FUNCTION_PREFIX)
    ? event.path.slice(FUNCTION_PREFIX.length)
    : event.path;

  try {
    const res = await fetch(UPSTREAM + upstreamPath, {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: ['GET', 'HEAD'].includes(event.httpMethod) ? undefined : event.body,
    });

    const text = await res.text();
    return {
      statusCode: res.status,
      headers: { 'Content-Type': 'application/json' },
      body: text,
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: e.message }) };
  }
};
