const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === ':cmds') {
    message.reply('Sorry! I cannot execute any commands right now. Please try again later. :sob:');
  }
});

client.on('message', message => {
  if (message.content === ':verify') {
    message.reply('Sorry! I cannot execute any commands right now. Please try again later. :sob:');
  }
});

client.on('message', message => {
  if (message.content === ':linkaccount') {
    message.reply('Sorry! I cannot execute any commands right now. Please try again later. :sob:');
  }
});

client.on('message', message => {
  if (message.content === ':linkgroup') {
    message.reply('Sorry! I cannot execute any commands right now. Please try again later. :sob:');
  }
});

client.on('message', message => {
  if (message.content === 'Hi') {
    message.reply('Bye! :wave:');
  }
});

client.on('message', message => {
  if (message.content === 'Yes') {
    message.reply('No! :thumbsdown:');
  }
});

client.on('message', message => {
  if (message.content === 'No') {
    message.reply('Yes! :thumbsup:');
  }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
