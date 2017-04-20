function insertData() {
  var name = document.getElementById('insert_name').value;
  var age = document.getElementById('insert_age').value;
  var DBref = firebase.database().ref("students")
  var dataToPush = {}
  if (name) {
    dataToPush.name = name
  }
  if (age) {
    dataToPush.age = age
  }
  // Check if login or not
  if (firebase.auth().currentUser) {
    DBref.push(dataToPush).then(function(result) {
      alert("insert success - new record id is "+ result.key);
    }).catch(function(error) {
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
    });
  } else {
    alert("Login is required !")
  }
}

function readData() {
  document.getElementById('result_table').innerHTML = ""
  var name = document.getElementById('read_name').value;
  var DBref = firebase.database().ref("students")
  DBref = DBref.orderByChild('name').equalTo(name)
  DBref.on('child_added', function(snapshot) {
    var node = document.createElement("TR");
    node.innerHTML = "<td class='mdl-data-table__cell--non-numeric'>"+ snapshot.val().name +"</td> <td>"+ snapshot.val().age +"</td>"
    document.getElementById('result_table').appendChild(node)
  });
}

function initDatabase() {
  document.getElementById('insert_button').addEventListener('click', insertData, false);
  document.getElementById('read_button').addEventListener('click', readData, false);
};

window.onload = function() {
  initDatabase();
};
