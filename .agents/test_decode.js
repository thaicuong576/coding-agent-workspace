const cbm = 'CBMivgFBVV95cUxNWFZYZUlDbG1CNjBXM0tnZVlQLTV0WHRHTmJ0RGFqNlU0akpJNmNFS1NqSHl1Wk50dF9MN3BNQUtRVGh6Mkc0UUlfOFF1MHZiVFk0REhJMTFtMFhyNmRUd2ZTVVpYODNYUHJPYi1TZ01PS0RKZlpyaXA4dWNSdktmcEVCVXZFbm5zMWpHVmpLVVJISU5tTDlScWMtRkJmN211YjNNTGQwRTV3LUhNZDZsV1BrSFlCOWoyMDdhT2xR0gHDAUFVX3lxTE53UjluZXRJQVBCU25wak0wbmRKd0pHSWx3Z3FCR0NsZGdtZFlVbEd3WkFoMV84akFaY3d6OUE4ZW5Tc29fMGdxTnczZ0JWdnBiTFJ5UzNNZnp4TXVTRl9NMUJ3VG12aElQZnhSbWJfTnB2TzRJLVByM1VSM3V2SnBpUDFUUFhrbm9lLURlblBoR1JPR25tTk5ncUxyVnNMZHoxa0o0Q1JwZDQ2SFloRnN2Uk54c25EbDlocDY0MmxkTDN1QQ';

const decoded = Buffer.from(cbm, 'base64').toString('binary');
console.log('Decoded Binary String:');
console.log(decoded);

// Let's print out all printable character sequences (strings) inside it
const cleanStrings = decoded.replace(/[^ -~]+/g, ' ');
console.log('\nClean Strings:');
console.log(cleanStrings);
