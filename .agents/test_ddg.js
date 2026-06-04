const query = 'anthropic roll out claude mythos coming weeks launches opus 48 reuters';
const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

console.log('📡 Searching DuckDuckGo HTML for:', query);

fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
  }
})
.then(res => res.text())
.then(html => {
  console.log(`Fetched ${html.length} bytes of search page.`);
  
  // Extract results URL
  const regex = /<a class="result__url"[^>]*href="([^"]+)"/gi;
  let match;
  const results = [];
  while ((match = regex.exec(html)) !== null) {
    const rawUrl = match[1];
    let cleanUrl = rawUrl;
    if (rawUrl.includes('uddg=')) {
      const parts = rawUrl.split('uddg=');
      if (parts[1]) {
        cleanUrl = decodeURIComponent(parts[1].split('&')[0]);
      }
    }
    results.push(cleanUrl);
  }
  
  console.log('🎯 Found Search Results:');
  results.slice(0, 10).forEach((link, idx) => {
    console.log(`[${idx + 1}] ${link}`);
  });
})
.catch(err => console.error('Error searching:', err));
