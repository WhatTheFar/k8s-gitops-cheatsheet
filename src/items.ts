import { getDevOpsDataSingleton } from '@awesome-whatthefar/generator';
import { MarkdownItem, MarkdownTable } from '@awesome-whatthefar/parser';

export function toTable(
  title: string,
  data: Array<{ title: string; description: string; ref: string }>,
): MarkdownTable {
  const tableData = [
    ['Title', 'Description', 'Reference'],
    ...data.map((e) => [e.title, e.description, e.ref]),
  ];

  const table: MarkdownTable = {
    type: 'MarkdownTable',
    title: title === '' ? undefined : title,
    tableData: {
      input: {
        type: 'MemoryInput',
        data: tableData,
      },
      options: {
        align: ['left', 'left', { type: 'Reference', colunm: 0 }],
      },
    },
  };
  return table;
}

export async function generateK8sItemMap(): Promise<{
  [key: string]: MarkdownItem[];
}> {
  const devops = await getDevOpsDataSingleton();

  const initialState: { [key: string]: MarkdownItem[] } = {};

  const itemsMap = devops
    .filter(([category, {}], {}) => {
      return category === 'Kubernetes';
    })
    .reduceCategory((prev, curr) => {
      const {
        category: [{}, subcategory],
        data,
      } = curr;
      return { ...prev, [subcategory]: [toTable('', data)] };
    }, initialState);

  return itemsMap;
}
