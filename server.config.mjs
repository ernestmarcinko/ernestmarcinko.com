import path from 'path';
import url from 'url';

export {path, url};

export function getDirName(fileUrl) {
    const __filename = url.fileURLToPath(fileUrl);
    return path.dirname(__filename);
}

export const config = {
    hostname: 'https://ernestmarcinko.com/'
}