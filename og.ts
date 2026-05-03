/**
 * OG image rendering helper.
 *
 * Rasterizes an SVG template into a PNG suitable for og:image meta tags,
 * with VelaPay brand fonts (Fustat Bold + Manrope Regular) pre-loaded as
 * font buffers — no system font install required.
 *
 * Consumers must install these as regular dependencies (see peerDependencies):
 *   @fontsource/fustat, @fontsource/manrope, @resvg/resvg-js
 *
 * Usage:
 *   import { renderBrandOG } from '@vela/brand/og';
 *   const bytes = await renderBrandOG({
 *     svg: 'public/og.svg',
 *     out: 'public/og.png',
 *   });
 */

import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js';

export interface RenderBrandOGOptions {
  /** SVG source — either a file path or inline markup starting with "<". */
  svg: string;
  /** Output PNG path (written via Bun.write). */
  out: string;
  /** Render width in pixels. Defaults to 1200 (standard OG). */
  width?: number;
  /** Override the default brand font buffers. Useful for testing or for
   *  rendering a different weight. Leave undefined to use Fustat 700 + Manrope 400. */
  fontBuffers?: ArrayBuffer[];
  /** Pass-through resvg options (merged over defaults). */
  resvgOptions?: Partial<ResvgRenderOptions>;
}

/**
 * Render a brand OG PNG. Returns the byte size of the written PNG.
 */
export async function renderBrandOG(opts: RenderBrandOGOptions): Promise<number> {
  const source = opts.svg.trimStart().startsWith('<')
    ? opts.svg
    : await Bun.file(opts.svg).text();

  const fontBuffers = opts.fontBuffers ?? (await defaultBrandFonts());

  const resvg = new Resvg(source, {
    // `fontBuffers` is supported by @resvg/resvg-js >= 2.5.0 at runtime but
    // missing from the upstream .d.ts (https://github.com/yisibl/resvg-js).
    font: {
      fontBuffers: fontBuffers.map((b) => Buffer.from(b)),
      loadSystemFonts: false,
    } as ResvgRenderOptions['font'],
    fitTo: { mode: 'width', value: opts.width ?? 1200 },
    ...opts.resvgOptions,
  });

  const png = resvg.render().asPng();
  await Bun.write(opts.out, png);
  return png.byteLength;
}

/**
 * Resolve the default brand font buffers from the consumer's node_modules.
 * Assumes @fontsource/fustat, @fontsource/manrope, and @fontsource/geist-mono are installed.
 */
export async function defaultBrandFonts(): Promise<ArrayBuffer[]> {
  return Promise.all([
    Bun.file(
      'node_modules/@fontsource/fustat/files/fustat-latin-700-normal.woff2',
    ).arrayBuffer(),
    Bun.file(
      'node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2',
    ).arrayBuffer(),
    Bun.file(
      'node_modules/@fontsource/geist-mono/files/geist-mono-latin-500-normal.woff2',
    ).arrayBuffer(),
  ]);
}
