const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-room')

// UPDATE CHAT

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
      .then(() => newChatForm.reset())
      .catch(err => console.log(err));
});

// UPDATE NAME

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();

    updateMssg.innerText=`Your name is updated to ${newName}`;
    setTimeout(() => updateMssg.innerText='',3000);
})

//UPDATE CHAT ROOMS

rooms.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

// SELECTING USERNAME
const username = localStorage.username ? localStorage.username : 'Stranger';

//CLASS INSTANCE

const chatUI = new ChatUI(chatList);
const chatroom= new Chatroom('general',username);

//GET CHATS AND RENDER

chatroom.getChats(data => chatUI.render(data));
