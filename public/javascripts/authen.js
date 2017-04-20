function registerByEmail() {
  var email = document.getElementById('register_email').value;
  var password = document.getElementById('register_password').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
    alert('Register Success!');
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

function toggleSignIn() {
  // เช็คถ้า Login อยู่แล้ว
  if (firebase.auth().currentUser) {
    // ทำการ Logout
    firebase.auth().signOut();
    alert("Logout !");
  } else {
    // ทำการ Login
    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Login และ Catch error
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
      alert('Login Success!');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  };
}

function initAuthen() {
  // Callback เมื่อ User status เปลี่ยนไป
  firebase.auth().onAuthStateChanged(function(user) {
    // ถ้า User login
    if (user) {
      document.getElementById('login_button').textContent = 'Logout';
      document.getElementById('login_status').textContent = 'Signed In';
      document.getElementById('login_email').disabled = true
      document.getElementById('login_password').disabled = true
    } else {
      // ถ้าไม่ login
      document.getElementById('login_button').textContent = 'Login';
      document.getElementById('login_status').textContent = 'Signed Out';
      document.getElementById('login_email').disabled = false
      document.getElementById('login_password').disabled = false
    }
  });

  document.getElementById('login_button').addEventListener('click', toggleSignIn, false);
  document.getElementById('register_button').addEventListener('click', registerByEmail, false);
};

window.onload = function() {
  initAuthen();
};
