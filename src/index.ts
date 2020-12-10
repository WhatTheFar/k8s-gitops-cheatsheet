import { renderMarkdown } from '@awesome-whatthefar/parser';
import { generateItems } from './items';
import { resolve } from 'path';

async function main(): Promise<void> {
  const items = await generateItems();
  await renderMarkdown(
    {
      fileName: 'README.md',
      dirPath: resolve(__dirname, '..'),
      sourceFilePath: resolve(__dirname, '../README.md'),
      reference: {},
    },
    items,
    {
      verbose: true,
    },
  );
}

main();
