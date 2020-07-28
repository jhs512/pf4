console.clear();

function SideBar__init() {
  $('.top-bar .btn-toggle-side-bar').click(function() {
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      SideBar__hide();
    }
    else {
      $(this).addClass('active');
      SideBar__show();
    }
  });
}

function SideBar__show() {
  $('html').addClass('side-bar-actived');
}

function SideBar__hide() {
  $('html').removeClass('side-bar-actived');
}

SideBar__init();