import fs from 'fs';
import { resolveConfig } from 'vite';

async function test() {
  try {
    const config = await resolveConfig({}, 'serve');
    fs.writeFileSync('error.txt', 'SUCCESS\n');
  } catch (err) {
    fs.writeFileSync('error.txt', err.stack + '\n' + JSON.stringify(err, null, 2));
  }
}
test();
