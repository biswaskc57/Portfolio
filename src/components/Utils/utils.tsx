// utils/createClassNames.ts
export const createClassNames = (base: string, variants: Record<string, boolean | undefined>) => {
  return Object.entries(variants)
    .filter(([key, value]) => value)
    .map(([key]) => `${base}--${key}`)
    .concat(base)
    .join(' ');
};
  