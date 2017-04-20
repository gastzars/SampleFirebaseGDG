function handleFileSelect(evt) {
  if (firebase.auth().currentUser) {
    document.getElementById('linkbox').innerHTML = "Uploading"
    evt.stopPropagation();
    evt.preventDefault();
    var file = evt.target.files[0];
    var metadata = {
      'contentType': file.type
    };
    firebase.storage().ref().child('images/' + file.name).put(file, metadata).then(function(snapshot) {
      alert('Uploaded', snapshot.totalBytes, 'bytes.');
      console.log(snapshot.metadata);
      var url = snapshot.downloadURL;
      console.log('File available at', url);
      document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
    }).catch(function(error) {
      alert('Upload failed:', error);
    });
  } else {
    alert("Login is required !")
  }
}

function initStorage() {
  document.getElementById('file').addEventListener('change', handleFileSelect, false);
};

window.onload = function() {
  initStorage();
};
