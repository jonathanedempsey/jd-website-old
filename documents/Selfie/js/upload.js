function upload() {
 
      var dataURL = canvas.toDataURL("image/png");
      //passing the img and the student data to the forms
      document.getElementById('hidden_imgData').value = dataURL;
      //add your student number here.
      document.getElementById('hidden_studentData').value = 'N00112462';
      var fd = new FormData(document.forms["form1"]);
 
      var xhr = new XMLHttpRequest();
 
      xhr.open('POST', 'fakeurl', true);
 
      xhr.upload.onprogress = function(e) {
          if (e.lengthComputable) {
              var percentComplete = (e.loaded / e.total) * 100;
              console.log(percentComplete + '% uploaded');
              alert('Succesfully uploaded');
          }
      };
 
      xhr.onload = function() {
 
      };
      xhr.send(fd);
 
  }
  
  //end insertion here