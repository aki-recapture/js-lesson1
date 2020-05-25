const showTab = (menuId) => {
  $('.tabs-content > div').hide();
  $('.tabs-menu > div').removeClass('active');
  
  $(`#tabs-${menuId}`).show();
  $('#tab-menu-' + menuId).addClass('active');
};

$('.tabs-menu > div').on('click', (e) => {
  const id = $(e.target).attr('id');
  
  showTab(id.slice(-1));
});

showTab('a');