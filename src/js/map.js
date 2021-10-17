$(function () {
    if(!localStorage.getItem('currentUser')){
        alert("You must be logged in to access to this page")
        window.location.href = 'login.html'
    }
    $("#logout").on('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    })
})