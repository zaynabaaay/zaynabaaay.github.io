window.onload = function () {

  const menu_btn = document.querySelector('.hamburger');
  const menu_content = document.querySelector('.menu_components');
  const side_bar = document.querySelector('.sidenav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    menu_content.classList.toggle('is-active');
    side_bar.classList.toggle('is-active');

});
}
