import http2 from 'http2';
import { URL } from 'url';

const targetUrl = 'https://www.reuters.com/business/anthropic-roll-out-claude-mythos-coming-weeks-launches-opus-48-2026-05-28/';
const parsedUrl = new URL(targetUrl);

// Chrome's exact cipher suites and curve options
const chromeCiphers = [
  'TLS_AES_128_GCM_SHA256',
  'TLS_AES_256_GCM_SHA384',
  'TLS_CHACHA20_POLY1305_SHA256',
  'ECDHE-ECDSA-AES128-GCM-SHA256',
  'ECDHE-RSA-AES128-GCM-SHA256',
  'ECDHE-ECDSA-AES256-GCM-SHA384',
  'ECDHE-RSA-AES256-GCM-SHA384',
  'ECDHE-ECDSA-CHACHA20-POLY1305',
  'ECDHE-RSA-CHACHA20-POLY1305'
].join(':');

const client = http2.connect(`https://${parsedUrl.hostname}`, {
  ciphers: chromeCiphers,
  ecdhCurve: 'X25519:secp256r1:secp384r1',
  honorCipherOrder: true,
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.3'
});

client.on('error', (err) => console.error('Connection error:', err));

const req = client.request({
  ':path': parsedUrl.pathname + parsedUrl.search,
  ':method': 'GET',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-language': 'en-US,en;q=0.9',
  'accept-encoding': 'gzip, deflate, br',
  'cache-control': 'no-cache',
  'pragma': 'no-cache',
  'upgrade-insecure-requests': '1',
  'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1'
});

req.on('response', (headers) => {
  console.log('Status code:', headers[':status']);
  console.log('Headers:', headers);
});

let data = '';
req.on('data', (chunk) => {
  data += chunk;
});

req.on('end', () => {
  console.log(`Fetched ${data.length} bytes of content.`);
  if (data.includes('Claude')) {
    console.log('✅ Found Claude in content!');
  } else {
    console.log('❌ Content snippet:', data.slice(0, 500));
  }
  client.close();
});
