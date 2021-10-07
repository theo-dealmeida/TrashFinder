/* globals $ */
/**
 * create the form to login with a username and a password
 */
$(function () {
  $('#loginForm').on('submit', (event) => {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    $.post('/login', { username: username, password: password }, (data, statusText) => {
      window.location.href = '/dashboard';
    }).fail((error) => {
      window.alert(error.responseJSON ? error.responseJSON.error : error.responseText);
    });
  });
});
