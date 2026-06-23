const fs = require('fs')
const path = require('path')

const cwd = path.resolve(__dirname, '..')
const publicImages = path.join(cwd, 'public', 'images')
const publicMusic = path.join(cwd, 'public', 'music')
const backgrounds = path.join(cwd, 'src', 'assets', 'backgrounds')

const mkdir = (p) => {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true })
}

const writePng = (dest) => {
  const data = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAmMBYZs1DFSAAAAASUVORK5CYII=',
    'base64',
  )
  fs.writeFileSync(dest, data)
}

mkdir(publicImages)
mkdir(publicMusic)
mkdir(backgrounds)

;['couple-1.jpg', 'couple-2.jpg', 'couple-3.jpg', 'couple-4.jpg', 'avatar.png'].forEach((name) =>
  writePng(path.join(publicImages, name)),
)

;['hero-bg.png', 'stars-bg.png', 'garden-bg.png'].forEach((name) =>
  writePng(path.join(backgrounds, name)),
)

fs.writeFileSync(
  path.join(cwd, 'public', 'heart.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d74272"><path d="M12 21s-8.5-5.3-8.5-11.5S7 2 12 7.1 20.5 2 20.5 9.5 12 21 12 21z"/></svg>',
)
fs.writeFileSync(path.join(cwd, 'public', 'favicon.ico'), '')
fs.writeFileSync(path.join(publicMusic, 'our-song.mp3'), '')

;[
  'src/index.css',
  'public/icons.svg',
  'public/favicon.svg',
  'src/assets/react.svg',
  'src/assets/vite.svg',
  'src/assets/hero.png',
].forEach((relative) => {
  const fullPath = path.join(cwd, relative)
  if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath)
})

console.log('assets setup complete')
