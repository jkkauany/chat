const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message) {
    addMessage(message, 'user-message');
    respondToUser(message.toLowerCase());
    userInput.value = '';
  }
});

function addMessage(text, className) {
  const div = document.createElement('div');
  div.className = className;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(msg) {
  let response = "Desculpe, não entendi.";

  if (msg.includes('oi') || msg.includes('olá')) {
    response = "Oi! Como você está?";
  } else if (msg.includes('tudo bem')) {
    response = "Tudo ótimo, e com você?";
  } else if (msg.includes('nome')) {
    response = "Eu sou um ChatBot simples!";
  } else if (msg.includes('ajuda')) {
    response = "Claro! Me pergunte algo simples como: 'qual seu nome?', 'oi', ou 'tudo bem?'.";
  } else if (msg.includes('adeus') || msg.includes('tchau')) {
    response = "Tchau! Até a próxima.";
  }

  setTimeout(() => {
    addMessage(response, 'bot-message');
  }, 500);
}
