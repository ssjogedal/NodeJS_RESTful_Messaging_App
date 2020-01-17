// ======= DATA LAYER =======

var messageCount = 2;
var messages = [{messageId: 0, userName:"Jakob", text: "Teacher"},
                {messageId: 1, userName:"Simon", text: "Student"}];

addMessage = function(userName, text)
{
  newMessageObject = { messageId:messageCount++,
                       userName:userName,
                       text:text };
  messages.push(newMessageObject);
}

getMessageById = function(messageId){
  for(i=0; i<messages.length; i++)
  {
    if (messages[i].messageId==messageId)
    {
      return messages[i];
    }
  }
  return null;
}

// Remove message function
removeMessage = function(messageId)
{
  for(i=0; i<messages.length; i++)
  {
    // Check if messageId i = input
    if (messages[i].messageId==messageId)
    {
      // Delete 1 messeage from count i (input id)
      messages.splice(i,1);
      return true;
    }
  }
  return null;
}



module.exports = {messages, addMessage, removeMessage, getMessageById};
