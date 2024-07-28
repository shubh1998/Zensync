const { pascalize } = require('humps')
const fs = require('fs')
const glob = require('glob')

const imagesJSXFileBasePath = 'src/assets/images/index.jsx'
const imagesStoredLocationBasePath = 'src/assets/images'

if (fs.existsSync(imagesJSXFileBasePath)) {
  fs.writeFileSync(imagesJSXFileBasePath, '')
} else {
  fs.writeFileSync(imagesJSXFileBasePath, '')
}

const filenames = glob.sync(`${imagesStoredLocationBasePath}/**/*.{png,jpeg,jpg,svg,webp}`)

glob.sync(`${imagesStoredLocationBasePath}/**/*.{png,jpeg,jpg,svg,webp}?`).forEach(filename => fs.unlink(filename, () => { }))

const imagesImportedName = []

for (const filename of filenames) {
  const baseFilename = filename.substr(imagesStoredLocationBasePath.length + 1)
  const pieces = baseFilename.replace(/\.(png|jpg|jpeg|svg|webp)/, '').split(/\//)

  if (pieces.length === 0) {
    console.warn(`Image name '${baseFilename}' doesn't match naming convention`)
    continue
  }

  const imageName = pieces.reverse().slice(0, pieces.length - 1).map(piece => pascalize(piece)).join('') + 'Image'
  imagesImportedName.push(imageName)

  fs.appendFile(
    imagesJSXFileBasePath,
    `import ${imageName} from 'assets/images/${baseFilename}'\n`,
    () => {}
  )
}

let exportStringObject = '\nexport {'
for (let index = 0; index < imagesImportedName.length; index++) {
  if (index !== imagesImportedName.length - 1) {
    exportStringObject = `${exportStringObject}\n  ${imagesImportedName[index]},`
  } else {
    exportStringObject = `${exportStringObject}\n  ${imagesImportedName[index]}`
  }
}
exportStringObject = `${exportStringObject}\n}\n`

fs.appendFile(imagesJSXFileBasePath, exportStringObject, () => {})
