let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `ucpn()`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Chat', url: 'https://wa.me/6289524208209?text=Hallo + Banh'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time >= 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌙"
  }
handler.customPrefix = /^(pagi|siang|malem|malam|sore)$/i
handler.command = new RegExp

export default handler