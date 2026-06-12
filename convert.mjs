import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join } from 'path'

const publicDir = './public'
const files = readdirSync(publicDir).filter(f => f.endsWith('.webp'))

for (const file of files) {
  const input = join(publicDir, file)
  const output = join(publicDir, file.replace('.webp', '.webp'))
  
  await sharp(input)
    .webp({ quality: 80 })
    .toFile(output)
  
  console.log(`✅ Converted: ${file}`)
}

console.log('🎉 All images converted!')