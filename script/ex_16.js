$('form').submit(function (e) {
  var data;

  data = new FormData();
  data.append('file', $('#file')[0].files[0]);

  $.ajax({
      url: './upload.php',
      data: data,
      processData: false,
      type: 'POST',

      // This will override the content type header, 
      // regardless of whether content is actually sent.
      // Defaults to 'application/x-www-form-urlencoded'
      contentType: 'multipart/form-data', 

      //Before 1.5.1 you had to do this:
      beforeSend: function (x) {
          if (x && x.overrideMimeType) {
              x.overrideMimeType("multipart/form-data");
          }
      },
      // Now you should be able to do this:
      mimeType: 'multipart/form-data',    //Property added in 1.5.1

      success: function (data) {
          console.log(data);
      }
  });

  e.preventDefault();
});