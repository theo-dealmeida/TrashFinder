/* globals $ */
/**
 * On document ready, this function displays the navbar and its sections with their contents
 */
$(document).ready(function () {
  const tabsVerticalInner = $('#navbar');
  // const selectorVerticalInner = $('#navbar').find('li').length;
  const activeItemVerticalInner = tabsVerticalInner.find('.active');
  const activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
  const activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
  const itemPosVerticalTop = activeItemVerticalInner.position();
  const itemPosVerticalLeft = activeItemVerticalInner.position();

  $('.selector-active').css({
    top: itemPosVerticalTop.top + 'px',
    left: itemPosVerticalLeft.left + 'px',
    height: activeWidthVerticalHeight + 'px',
    width: activeWidthVerticalWidth + 'px'
  });

  $('#navbar').on('click', 'li', function (e) {
    if ($('.active a').text() !== 'Login') {
      $('#navbar ul li').removeClass('active');
      $(this).addClass('active');

      const activeWidthVerticalHeight = $(this).innerHeight();
      const activeWidthVerticalWidth = $(this).innerWidth();
      const itemPosVerticalTop = $(this).position();
      const itemPosVerticalLeft = $(this).position();

      $('.selector-active').css({
        top: itemPosVerticalTop.top + 'px',
        left: itemPosVerticalLeft.left + 'px',
        height: activeWidthVerticalHeight + 'px',
        width: activeWidthVerticalWidth + 'px'
      });

      // When you click on a section, it displays its contents and hide contents from the other section
      if ($(this).text() === 'Dashboard') {
        document.getElementById('dashboard-presentation').style.display = 'block';
        document.getElementById('floor-plan').style.display = 'none';
        document.getElementById('componements-list').style.display = 'none';
        document.getElementById('sensor-chart').style.display = 'none';
      } else if ($(this).text() === 'Floor Plan') {
        document.getElementById('dashboard-presentation').style.display = 'none';
        document.getElementById('floor-plan').style.display = 'block';
        document.getElementById('componements-list').style.display = 'none';
        document.getElementById('sensor-chart').style.display = 'none';
      } else if ($(this).text() === 'Components') {
        document.getElementById('dashboard-presentation').style.display = 'none';
        document.getElementById('floor-plan').style.display = 'none';
        document.getElementById('componements-list').style.display = 'block';
        document.getElementById('sensor-chart').style.display = 'none';
      } else if ($(this).text() === 'Chart') {
        document.getElementById('dashboard-presentation').style.display = 'none';
        document.getElementById('floor-plan').style.display = 'none';
        document.getElementById('componements-list').style.display = 'none';
        document.getElementById('sensor-chart').style.display = 'block';
      } else {
        document.getElementById('dashboard-presentation').style.display = 'none';
        document.getElementById('floor-plan').style.display = 'none';
        document.getElementById('componements-list').style.display = 'none';
        document.getElementById('sensor-chart').style.display = 'none';
      }
    }
  });
});
