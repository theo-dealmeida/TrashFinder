/* globals $ */
/**
 * create the form to login with a username and a password
 */
$(function () {
  if(localStorage.getItem('currentUser')){
    window.location.href = 'index.html';
}
  $('#loginForm').on('submit', (event) => {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    $.getJSON('data/users.json', function(data){
      if(data[username])
        if(password == data[username]["password"]){
          localStorage.setItem('currentUser', data[username]["username"]);
          window.location.href = 'index.html'
        }
        else{
          alert("Mot de passe incorrect");
          $('#password').val('');
        }
        else{
          alert("L'adresse mail saisie ne correspond à aucun utilisateur");
          $('#username').val('');
      }
    });
    
    // $.post('/login', { username: username, password: password }, (data, statusText) => {
      
      
    //   window.location.href = '/dashboard';
    // }).fail((error) => {
    //   window.alert(error.responseJSON ? error.responseJSON.error : error.responseText);
    // });
  });
});

$(document).ready(function () {
  document.getElementById("go-to-signup").onclick = function(){
    window.location.href = './signup.html';
  };
});