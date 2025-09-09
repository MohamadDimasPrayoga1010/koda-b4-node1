const fs = require("node:fs");

function namaMusic(musics) {
  musics.forEach((music) => {
    const fileName = music + ".mp3"; 

    fs.writeFile(`./lib/${fileName}`, music, (err) => {
      if (err) {
        console.error(`${fileName}:`, err);
      } else {
        console.log(`${fileName} berhasil`);
      }
    });
  });
}

module.exports = namaMusic;

