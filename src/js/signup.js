$(function () {
    if(localStorage.getItem('currentUser')){
      window.location.href = 'login.html';
  }
    $('#signUpForm').on('submit', async (event) => {
      event.preventDefault();
      const username = $('#username').val();
      const password = $('#password').val();
      const checkPassword = $('#checkPassword').val();
      if(password != checkPassword){
          alert("The passwords don't match ...");
          $('#signUpForm').trigger('reset');
          return;
      }else{
        $.getJSON('data/users.json', async function(data){
            
            if(data[username] == undefined){
                let json = {};
                json["username"] = username;
                json["password"] = password;
                const result = await $.ajax({
                    type: "POST",
                    url: "http://localhost:3000/saveUser",
                    data: JSON.stringify(json),
                    contentType: "application/json",
                })
               window.location.href = 'login.html';
            }else{
                alert("This username isn't available.")
            }
        });
      }
    });
  });