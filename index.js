// Skrypt stworzony przez Taki Tam Slu#5916.

// Informacja dla aplikacji, że wymaga ona modułu "Discord.js".
const Discord = require("discord.js");
// Informacja dla aplikacji, że wymaga ona PLIKU "config.json", czyli tam gdzie jest token naszego bota.
const config = require("./config.json");
// Zamieniamy naszego bota w klienta Discord.
const client = new Discord.Client();

// Jeśli "client" czyli nasz bot jest online zrób coś...
client.on("ready", () => {
    // ... daj informacje w konsoli!
    console.log("Bot is ready!");
});


// Logowanie klienta bota.
client.login(config.token);

// Jeśli coś pomyliłem w opisie skryptów, bardzo przepraszam. Każdy uczy się na błędach!
