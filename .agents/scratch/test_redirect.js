const testUrl = 'https://news.google.com/rss/articles/CBMivgFBVV95cUxNWFZYZUlDbG1CNjBXM0tnZVlQLTV0WHRHTmJ0RGFqNlU0akpJNmNFS1NqSHl1Wk50dF9MN3BNQUtRVGh6Mkc0UUlfOFF1MHZiVFk0REhJMTFtMFhyNmRUd2ZTVVpYODNYUHJPYi1TZ01PS0RKZlpyaXA4dWNSdktmcEVCVXZFbm5zMWpHVmpLVVJISU5tTDlScWMtRkJmN211YjNNTGQwRTV3LUhNZDZsV1BrSFlCOWoyMDdhT2xR0gHDAUFVX3lxTE53UjluZXRJQVBCU25wak0wbmRKd0pHSWx3Z3FCR0NsZGdtZFlVbEd3WkFoMV84akFaY3d6OUE4ZW5Tc29fMGdxTnczZ0JWdnBiTFJ5UzNNZnp4TXVTRl9NMUJ3VG12aElQZnhSbWJfTnB2TzRJLVByM1VSM3V2SnBpUDFUUFhrbm9lLURlblBoR1JPR25tTk5ncUxyVnNMZHoxa0o0Q1JwZDQ2SFloRnN2Uk54c25EbDlocDY0MmxkTDN1QQ?oc=5&hl=en-US&gl=US&ceid=US:en';

const resolveGoogleNewsUrl = async (googleNewsUrl) => {
  try {
    const id = googleNewsUrl.split('/articles/')[1].split('?')[0];
    const s = `[[["Fbv4je","[\\"garturlreq\\",[[\\"en-US\\",\\"US\\"],null,null,1,1,\\"US:en\\"],\\"${id}\\"]",null,"generic"]]]`;
    
    console.log('📡 Sending batchexecute RPC for ID:', id.slice(0, 30) + '...');
    
    const response = await fetch('https://news.google.com/_/DotsSplashUi/data/batchexecute?rpcids=Fbv4je', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      body: `f.req=${encodeURIComponent(s)}`
    });

    if (!response.ok) {
      throw new Error(`RPC status ${response.status}`);
    }

    const text = await response.text();
    console.log('Raw text response:', text);
    
    // Parse Google's dynamic JSON envelope
    const cleanText = text.replace(/^\)\]\}'\n/, '');
    const data = JSON.parse(cleanText);
    console.log('Parsed outer array:', JSON.stringify(data, null, 2));
    
    const innerData = JSON.parse(data[0][2]);
    console.log('Inner data array:', JSON.stringify(innerData, null, 2));
    
    const articleUrl = innerData[1];
    return articleUrl;
  } catch (err) {
    console.error('⚠️ RPC decoding failed:', err.stack || err.message);
    return googleNewsUrl;
  }
};

resolveGoogleNewsUrl(testUrl).then(url => {
  console.log('🎯 Decoded Original URL:', url);
});
