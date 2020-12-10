import { subcategoryFrom } from './items';

describe('Generate Items', () => {
  test.each`
    other                                  | subcategory
    ${'Kubernetes[Configuration]'}         | ${'Configuration'}
    ${'Kubernetes[Continuous Deployment]'} | ${'Continuous Deployment'}
    ${'Kubernetes[CI/CD]'}                 | ${'CI/CD'}
    ${'[Progressive Delivery]'}            | ${'Progressive Delivery'}
  `(
    'subcategoryFrom($other) should return $subcategory',
    ({ other, subcategory }: { other: string; subcategory: string }) => {
      const actual: string = subcategoryFrom(other);

      expect(actual).toEqual(subcategory);
    },
  );
});
