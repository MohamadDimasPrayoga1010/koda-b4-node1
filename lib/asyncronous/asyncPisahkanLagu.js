const fs = require("node:fs/promises");
const path = require("node:path");

async function separateSongs(musics) {
  try {
    const folder = "musik";
    musics.forEach(async (musik) => {
      try {
        if (!musik.includes("-")) {
          throw new Error(`Format Musik Salah : ${musik}. Harus "Artis-Judul"`);
        }

        const [artis, judul] = musik.split("-");
        const judulLagu = judul;

        const folderPath = path.join(folder, artis);
        await fs.mkdir(folderPath, { recursive: true });

        await fs.rename(`${folder}/${musik}.mp3`, `${folderPath}/${musik}.mp3`);
      } catch (error) {
        console.log("Gagal");
        throw error;
      }
    });
  } catch (error) {
    console.log("Gagal");
    throw error;
  }
}

module.exports = {
  separateSongs,
};
