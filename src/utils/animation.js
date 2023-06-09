function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var section = document.getElementById('home');
    if (isElementInViewport(section) && !section.classList.contains('animate')) {
      section.classList.add('animate');
    }
  });
  
  window.addEventListener('load', function() {
    var section = document.getElementById('home');
    if (isElementInViewport(section) && !section.classList.contains('animate')) {
      section.classList.add('animate');
    }
  });
  