import { createServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
const root = fileURLToPath(new URL('../', import.meta.url));
const server = await createServer({root, configFile:false, resolve:{alias:{'#lib':root+'src/lib'}}, plugins:[svelte({configFile:false,extensions:['.svelte','.svx'],preprocess:mdsvex({extensions:['.svx'],layout:{runbook:root+'src/lib/layouts/runbook.svelte'}})})],server:{middlewareMode:true,hmr:false}, appType:'custom'});
try {
 const { render } = await server.ssrLoadModule('svelte/server');
 for (const route of ['incidents/4471-review','decisions/0002-dedupe-by-cause']) {
  const {default: Page} = await server.ssrLoadModule('/src/routes/kb/'+route+'/+page.svx');
  const rendered=render(Page);
  const dest=root+'rendered/kb/'+route; await fs.mkdir(dest,{recursive:true});
  await fs.writeFile(dest+'/index.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'+rendered.head+'<link rel="stylesheet" href="../../../review.css"></head><body>'+rendered.body+'</body></html>');
 }
} finally {await server.close();}
