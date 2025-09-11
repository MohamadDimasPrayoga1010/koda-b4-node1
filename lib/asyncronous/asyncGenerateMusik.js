const fs = require("node:fs/promises");

async function namaMusicAsync(musics) {
  try {
    const folder = "musik";
    await fs.mkdir(folder, { recursive: true });
    await musics.forEach(async (music) => {
      const fileName = `${music}.mp3`;

      try {
        await fs.writeFile(`${folder}/${fileName}`, "");
        console.log(`${fileName} berhasil`);
      } catch (err) {
        console.log("error");
        throw err;
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  namaMusicAsync,
};
