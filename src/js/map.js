$(function () {
    if(!localStorage.getItem('currentUser')){
        alert("Vous devez être connecté pour accéder à cette page")
        window.location.href = 'login.html'
    }
    $("#logout").on('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    })
})