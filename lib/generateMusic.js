const fs = require("node:fs")

function namaMusic(musics) {
  musics.forEach((music) => {
    const fileName = `${music}.mp3` 
    console.log(fileName)

    try {
      fs.writeFileSync(`./lib/${fileName}`, music)
      console.log(`${fileName} berhasil`)
    } catch  {
      throw new Error(`${fileName} Gagal Dibuat`)
    }

    // fs.writeFile(`./lib/${fileName}`, music, (err) => {
    //   if (err) {
    //     console.error(`${fileName}:`, err)
    //   } else {
    //     console.log(`${fileName} berhasil`)
    //   }
    // })
  })
}

module.exports = namaMusic

