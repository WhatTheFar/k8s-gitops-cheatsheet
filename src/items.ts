import {
  MarkdownItem,
  MarkdownTable,
  parseCsvFromInput,
} from '@awesome-whatthefar/parser';

export const publishedId =
  '2PACX-1vQ6FlZEwgS9hr8lly1EwA1vCK1qDlOkLoZD3ninNi6vZlA5e7DtFtzMoPyJeFbeYntOfcqqldNmRD0d';

export async function generateItems(): Promise<{
  [key: string]: MarkdownItem[];
}> {
  const [data, errors] = await parseCsvFromInput({
    type: 'GoogleSheetInput',
    publishedId,
    sheetId: '609606435',
  });

  if (errors && !!errors.length) {
    throw new Error('Cannot parse CSV from input');
  }

  // indexes
  const [TITLE, {}, CATEGORY, SUBCATEGORY, OTHERS, DESCRIPTION, REF] = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
  ];

  interface Data {
    title: string;
    description: string;
    ref: string;
  }
  const dataByCat: {
    [category: string]: Data[];
  } = {};

  data.slice(1).forEach((e) => {
    // Filters only Kubernetes related stuffs
    if (e[CATEGORY] != 'Kubernetes') {
      // True  - Kubernetes
      // True  - Kubernetes[Configuration]
      // True  - Container, Kubernetes[Configuration]
      // True  - CI / CD, Kubernetes[CI / CD], CI / CD
      // False - [Ingress Controller], [Progressive Delivery]
      const re = /^([\w\/]*,\s?)?Kubernetes(\[[\w\/]*\])?(,.\s?.*)?$/gm;

      if (!re.test(e[OTHERS])) {
        // No alias category for this row, `return` to continue.
        return;
      }
    }

    const categories = e[CATEGORY] == 'Kubernetes' ? [e[SUBCATEGORY]] : [];
    if (e[OTHERS] !== '') {
      categories.push(
        ...e[OTHERS].split(',') //
          .map((other) => {
            return subcategoryFrom(other.trim());
          }),
      );
    }
    categories.forEach((c) => {
      if (!(c in dataByCat)) {
        dataByCat[c] = [];
      }
      dataByCat[c].push({
        title: e[TITLE],
        description: e[DESCRIPTION],
        ref: e[REF],
      });
    });
  });

  function toTable(cat: string): MarkdownTable {
    const tableData = [
      ['Title', 'Descripton', 'Reference'],
      ...dataByCat[cat].map((e) => [e.title, e.description, e.ref]),
    ];

    const table: MarkdownTable = {
      type: 'MarkdownTable',
      title: '',
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

  const tables: { [key: string]: MarkdownTable[] } = {};
  Object.keys(dataByCat).forEach((cat) => {
    tables[cat] = [toTable(cat)];
  });

  return tables;
}

export function subcategoryFrom(other: string): string {
  const re = /^(?:Kubernetes)?\[(?<sub>[\w\/ ]*)\]$/;
  const match = other.match(re);
  const groups = match?.groups;
  if (groups == undefined) {
    return '';
  }
  return groups.sub;
}
