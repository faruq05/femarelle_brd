
// back to top js
var btn = $('#backtotopbutton');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

window.addEventListener('scroll', myScrollHandler, { passive: true });

// Initialize LazyLoad
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});