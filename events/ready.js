const config = require("../config.js");
const { ActivityType  } = require("discord.js")
module.exports = async (client) => {


if (config.mongodbURL || process.env.MONGO) {

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);
(async () => {
try {
await rest.put(Routes.applicationCommands(client.user.id), {
body: await client.commands,
});
console.log('\x1b[36m%s\x1b[0m', '|    🚀 Komutlar yüklendi!')
} catch (err) {
console.log('\x1b[36m%s\x1b[0m', '|    🚀 Komutlar yüklenemedi!');
}
})();

console.log('\x1b[32m%s\x1b[0m', `|    🌼 ${client.user.username} olarak giriş yapıldı`);

setInterval(() => client.user.setActivity({ 
  name: `Update v3.5`, 
  type: ActivityType.Watching }), 10000);
client.errorLog = config.errorLog
} else {
console.log('\x1b[36m%s\x1b[0m', `|    🍔 Error MongoDB!`)
}
console.log('\x1b[36m%s\x1b[0m', `|    🎯 Aktivite başarıyla oluştu!`);


if(client.config.voteManager.status === true && client.config.voteManager.api_key){
const { AutoPoster } = require('topgg-autoposter')
const ap = AutoPoster(client.config.voteManager.api_key, client)
ap.on('posted', () => {
})
}

}
