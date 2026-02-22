/**
 * Generate waving-flag GIFs from both shark PNGs (left- and right-facing).
 * Run: npm install && npm run make-shark-gifs
 * Output: shark-left.gif, shark-left-flipped.gif, shark-right.gif, shark-right-flipped.gif
 */

const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const GIFEncoder = require('gifencoder');

const ROOT = path.join(__dirname, '..');
const FILES = [
  { png: 'shark-left.png', gif: 'shark-left.gif' },
  { png: 'shark-left-flipped.png', gif: 'shark-left-flipped.gif' },
  { png: 'shark-right.png', gif: 'shark-right.gif' },
  { png: 'shark-right-flipped.png', gif: 'shark-right-flipped.gif' },
];

const NUM_FRAMES = 12;
const STRIPS = 10;
const WAVE_AMP = 4;
const FPS = 10;

// Exact founder section background from index.html (--dark-bg)
const SITE_BG = '#0b1220';

async function waveFrame(ctx, img, frameIndex) {
  const w = img.width;
  const h = img.height;
  const stripW = w / STRIPS;
  const phase = (frameIndex / NUM_FRAMES) * Math.PI * 2;
  ctx.fillStyle = SITE_BG;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < STRIPS; i++) {
    const x = i * stripW;
    const sy = Math.sin(phase + (i / STRIPS) * Math.PI * 2) * WAVE_AMP;
    ctx.drawImage(
      img,
      x, 0, stripW + 1, h,
      x, sy, stripW + 1, h
    );
  }
  const id = ctx.getImageData(0, 0, w, h);
  const d = id.data;
  const r0 = parseInt(SITE_BG.slice(1, 3), 16);
  const g0 = parseInt(SITE_BG.slice(3, 5), 16);
  const b0 = parseInt(SITE_BG.slice(5, 7), 16);
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3];
    const transparent = a < 128;
    const nearWhite = r > 250 && g > 250 && b > 250;
    const strictBlack = r < 18 && g < 18 && b < 18;
    if (transparent || nearWhite || strictBlack) {
      d[i] = r0;
      d[i + 1] = g0;
      d[i + 2] = b0;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(id, 0, 0);
}

async function makeGif(pngPath, gifPath) {
  if (!fs.existsSync(pngPath)) {
    console.warn('Skip (PNG not found):', pngPath);
    return;
  }
  const img = await loadImage(pngPath);
  const w = img.width;
  const h = img.height;
  const encoder = new GIFEncoder(w, h);
  encoder.createReadStream().pipe(fs.createWriteStream(gifPath));
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(1000 / FPS);
  encoder.setQuality(8);
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  for (let f = 0; f < NUM_FRAMES; f++) {
    await waveFrame(ctx, img, f);
    encoder.addFrame(ctx);
  }
  encoder.finish();
  console.log('Wrote:', gifPath);
}

async function main() {
  for (const { png, gif } of FILES) {
    await makeGif(path.join(ROOT, png), path.join(ROOT, gif));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
