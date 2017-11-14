const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === ':cmds') {
    message.reply('**Cosmo Bot Commands:**\nHey there! Im Cosmo! Thanks for adding me! My prefix is “:”. Im a cool bot that has editable commands! You can talk to me, play music and much more! Im your personal little helper. :robot: Here are just some of the many commands I have to offer!\n**:verify** *Only some servers can use this command.*\n**:linkaccount** *Only some servers can use this command.*\n**:linkgroup** *Only some servers can use this command.*\n**:play (youtube video)** *Plays the video’s audio.*\n**There are some hidden commands for you to find out yourself! Have fun using Cosmo! :robot: :wave:**\n*If you find any issues, please DM AviaRob#9154.*\nCosmo v0.02');
  }
});

client.on('message', message => {
  if (message.content === ':verify') {
    message.reply('The ":verify" command is currently unavailable. If this problem pursues, please contact a Server Administrator or DM AviaRob#9154.');
  }
});

client.on('message', message => {
  if (message.content === ':linkaccount') {
    message.reply('The ":linkaccount" command is currently unavailable. If this problem pursues, please contact a Server Administrator or DM AviaRob#9154.');
  }
});

client.on('message', message => {
  if (message.content === ':linkgroup') {
    message.reply('The ":linkgroup" command is currently unavailable. If this problem pursues, please contact a Server Administrator or DM AviaRob#9154.');
  }
});

client.on('message', message => {
  if (message.content === 'Hi') {
    message.reply('Bye! :wave:');
  }
});

client.on('message', message => {
  if (message.content === 'Bye') {
    message.reply('Hi! :wave:');
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

client.on('message', message => {
  if (message.content === 'hi') {
    message.reply('Bye! :wave:');
  }
});

client.on('message', message => {
  if (message.content === 'bye') {
    message.reply('Hi! :wave:');
  }
});

client.on('message', message => {
  if (message.content === 'yes') {
    message.reply('No! :thumbsdown:');
  }
});

client.on('message', message => {
  if (message.content === 'no') {
    message.reply('Yes! :thumbsup:');
  }
});

client.login('BOT_TOKEN');
