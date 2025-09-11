// const namaMusic = require('./lib/generateMusic')
// const namaMusic2 = require('./lib/asyncronous/asyncGenerateMusik')
// const buatFile = require('./lib/pisahkanLagu')
const { namaMusicAsync } = require("./lib/asyncronous/asyncGenerateMusik");
const { separateSongs } = require("./lib/asyncronous/asyncPisahkanLagu");

const music = [
  "Wali-NenekuPahlawanku",
  "Wali-CariJodoh",
  "Wali-HargaDiri",
  "Wali-Yank",
  "Slack-Virus",
  "Slack-KuTakBisa",
  "Slack-MawarMerah",
  "Noah-Topeng",
  "Noah-SemuaTentangkita",
  "SetiaBand-CariPacarLagi",
];

// namaMusic(music);
async function main() {
  try {
    await namaMusicAsync(music);
    await separateSongs(music);
  } catch (error) {
    console.log(error);
  }
}

main();
