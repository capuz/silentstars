import sharp from 'sharp';

// Bluesky rejects blobs over 1 MB, and a card with a photo in it easily passes that as PNG.
export const MAX_THUMB_BYTES = 976 * 1024;
const QUALITIES = [85, 72, 60, 45, 30];

export async function toThumbnail(png: Buffer): Promise<Buffer> {
  let jpeg = png;
  for (const quality of QUALITIES) {
    jpeg = await sharp(png).jpeg({ quality, mozjpeg: true }).toBuffer();
    if (jpeg.length <= MAX_THUMB_BYTES) break;
  }
  return jpeg;
}
