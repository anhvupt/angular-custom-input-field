export type PartialKeyOf<T extends { [key: string]: any }, K> = Partial<
  Record<keyof T, K>
>;
