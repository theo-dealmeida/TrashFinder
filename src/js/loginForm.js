$(function () {
  if(localStorage.getItem('currentUser')){
    window.location.href = 'index.html';
}
  $('#loginForm').on('submit', (event) => {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    $.getJSON('data/users.json', function(data){
      if(data[username]){
        if(password == data[username]["password"]){
          localStorage.setItem('currentUser', data[username]["username"]);
          window.location.href = 'index.html'
        }
        else{
          alert("Wrong password or username");
          $('#loginForm').trigger("reset");
        }
      }else{
        alert("Wrong password or username");
        $('#loginForm').trigger("reset");
      }
    });
  });
});

$(document).ready(function () {
  document.getElementById("go-to-signup").onclick = function(){
    window.location.href = './signup.html';
  };
});