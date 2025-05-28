function setLanguage(lang) {
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}

function initMap() {
  const location = { lat: 61.1139, lng: 22.3056 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}
