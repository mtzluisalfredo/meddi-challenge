export function useAsset(path: string): string {
  const assets: Record<string, string> = import.meta.glob('~/assets/**/*.{svg,png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  });

  return assets[`/assets/${path}`];
}
