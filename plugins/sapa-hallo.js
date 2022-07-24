let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `Halo Kids👋
`
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
handler.customPrefix = /^(woi|hallo|bot|hllo)$/i
handler.command = new RegExp

export default handler