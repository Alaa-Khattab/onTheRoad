if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker-cache-polyfill.js')
  .then(console.log)
  .catch(alert)
}

const getLocation = () =>
  navigator.geolocation.getCurrentPosition(
    result =>
      console.log('ServiceWorker')
  )
