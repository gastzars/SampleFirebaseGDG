var user_key

function sendNotification() {
  var key = document.getElementById('server_key').value;
  var to = user_key;
  var notification = {
    'title': 'Portugal vs. Denmark',
    'body': '5 to 1',
    'icon': 'firebase-logo.png',
    'click_action': 'http://localhost:8081'
  };

  fetch('https://fcm.googleapis.com/fcm/send', {
    'method': 'POST',
    'headers': {
      'Authorization': 'key=' + key,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'notification': notification,
      'to': to
    })
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.error(error);
  })
}

function initNotification() {
  firebase.messaging().requestPermission()
  firebase.messaging().getToken().then(function(currentToken) {
    if (currentToken) {
      user_key = currentToken
    } else {
      firebase.messaging().requestPermission()
    }
  })
  document.getElementById('noti_button').addEventListener('click', sendNotification, false);
};

window.onload = function() {
  initNotification();
};
