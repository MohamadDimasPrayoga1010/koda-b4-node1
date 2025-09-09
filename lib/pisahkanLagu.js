const fs = require("node:fs");
const path = require("node:path");
const namaMusic = require("./generateMusic");

function buatFile(music) {
  music.forEach((music) => {
    const [artis, judul] = music.split("-");
    const namaArtis = artis;
    // console.log(namaArtis);
    const judulLagu = judul;

    

    const folderPath = path.join(__dirname, namaArtis); 
    if(!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath );
        // console.log(folderPath);
    }

    const filePath = path.join(folderPath, `${judulLagu}.mp3`);
    fs.writeFileSync(filePath, music);


    
  });
}

module.exports = buatFile;

