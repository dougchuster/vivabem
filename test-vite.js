import { resolveConfig } from 'vite';

async function test() {
  try {
    const config = await resolveConfig({}, 'serve');
    console.log("Success. Plugins:");
    console.log(config.plugins.map(p => p.name));
  } catch (err) {
    console.error("Caught error:");
    console.error(err);
    if (err.errors) {
       console.error("esbuild errors:", err.errors);
    }
  }
}
test();
