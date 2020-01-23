# NodeJS_RESTful_Messaging_App
Asymmetrical cryptography based messaging system

Important points to observe:
• The server is handling all the communication, and it is permanently keeping the messages, 
but it does not have any means to decrypt the messages.
• Since the server is oblivious to the encryption, it can still act as a server for unencrypted communication. 
You can try this by sending non-encrypted messages from new users.
Note that this was a work-around, and a shortcoming is that the sent messages are only stored for the duration of the session, 
and when you close the browser window, they’re forgotten, and can only be read by the receiver.
There are better ways to do this, one of which is to establish a symmetric key between two parties.
