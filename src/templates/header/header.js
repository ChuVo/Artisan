( function() {
  const phone = document.getElementById('phone'),
        searchText = document.querySelector('.search__text'),
        menuIcon = document.querySelector('.icon');

  function hiddenPhone() {
    if (screen.width < 772 ) {
      phone.classList.add('hidden');
      searchText.style.display="none";
    }
  }

  hiddenPhone();

  menuIcon.addEventListener( 'click', onClickMenu );

  function onClickMenu() {
    const menuLine1 = document.querySelector('.icon__line:nth-child(1)'),
          menuLine2 = document.querySelector('.icon__line:nth-child(2)'),
          menuLine3 = document.querySelector('.icon__line:nth-child(3)'),
          menu = document.querySelector('.menu__nav');

    menuLine1.classList.toggle('change');
    menuLine2.classList.toggle('change');
    menuLine3.classList.toggle('change');
    menu.classList.toggle('menu__nav_visible')
  }

}());