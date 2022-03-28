const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.roomDeleteHandler = functions.database.ref('/rooms/{postid}/players/{playerId}').onDelete(async (snap) => {
  const playersRef = snap.ref;
  const collectionRef = playersRef.parent.child('players');

  const messagesData = await collectionRef.once('value');

  if (messagesData.numChildren() == 0) {
    Promise.all('rooms/{postId}');
  }
});
