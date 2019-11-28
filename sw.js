importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

// custom adjustment 
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  new RegExp('/pages/detailteam.html'),
  workbox.strategies.cacheFirst()
)


workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2'), workbox.strategies.cacheFirst()
);


// workbox.routing.registerRoute(
//   new RegExp('https://api.football-data.org/v2/competitions/2021/teams'), workbox.strategies.cacheFirst()
// );
// workbox.routing.registerRoute(
//   new RegExp('https://api.football-data.org/v2/teams'), workbox.strategies.cacheFirst()
// );

// workbox.routing.registerRoute(
//   new RegExp('https://api.football-data.org/v2/competitions/2021/standings'), workbox.strategies.cacheFirst()
// );

workbox.precaching.precacheAndRoute([{
    "url": "assets/favicon-16x16.png",
    "revision": "4b1bd5ada6754c7bf2674bcf3945ad82"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-300.eot",
    "revision": "07f07c400674ac6bb098cdfa1e010388"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-300.svg",
    "revision": "37e5a6ab8868e40ed278bf2c618df8a7"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-300.ttf",
    "revision": "64c4fc09e36d7b7fd39dbf78290240b3"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-300.woff",
    "revision": "8dc95fab9cf98d02ca8d76e97d3dff60"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-300.woff2",
    "revision": "7c3daf12b706645b5d3710f863a4da04"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-500.eot",
    "revision": "de95b8bf196ecd37add3cc5b3e1a0d8a"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-500.svg",
    "revision": "10c07b65ea6f6c0eccf3235671353687"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-500.ttf",
    "revision": "8b7179f87b4365d145bbe3033b4a3c66"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-500.woff",
    "revision": "8b763220218ffc11c57c84ddb80e7b26"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-500.woff2",
    "revision": "92d16e458625f4d2c8940f6bdca0ff09"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-600.eot",
    "revision": "86f6cbd269e0c5a26f038a4d5ffc9cf1"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-600.svg",
    "revision": "a6924a5e072a58911c8588859f6825d5"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-600.ttf",
    "revision": "acb878a397bf674d7baa32a3267e5a3c"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-600.woff",
    "revision": "7c839d15a6f54e7025ba8c0c4b333e8f"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-600.woff2",
    "revision": "6fb1b5623e528e27c18658fecf5ee0ee"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-700.eot",
    "revision": "affb7169c35c766a60129b857ca1713e"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-700.svg",
    "revision": "f9c153756ccbb300635344c250f4520d"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-700.ttf",
    "revision": "7432889d57c68a13a4984a756d923a07"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-700.woff",
    "revision": "80f10bd382f0df1cd650fec59f3c9394"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-700.woff2",
    "revision": "39d93cf678c740f9f6b2b1cfde34bee3"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-regular.eot",
    "revision": "5cc74ef8a4c422084726eb9dd1163b82"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-regular.svg",
    "revision": "f3fef7e587e6c436df1d7985b2a90ada"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-regular.ttf",
    "revision": "6a9e85ac9247f5848db957b873c62e0c"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-regular.woff",
    "revision": "8102c4838f9e3d08dad644290a9cb701"
  },
  {
    "url": "assets/fonts/montserrat-v14-latin-regular.woff2",
    "revision": "bc3aa95dca08f5fee5291e34959c27bc"
  },
  {
    "url": "assets/logoNav.png",
    "revision": "2b052c483dcdc2d90422149a737f0343"
  },
  {
    "url": "assets/logoSplash.png",
    "revision": "585cc4f0805ebf78045094b76f450ad0"
  },
  {
    "url": "assets/logoSplash192.png",
    "revision": "f56d55233d51c7fcfbca3e5995121bcc"
  },
  {
    "url": "assets/logoSplash512.png",
    "revision": "0201e636b4dfd318cfee4fe8c6b685fe"
  },
  {
    "url": "css/all.css",
    "revision": "42b8897772b8f90a5a1b7190deda7b3c"
  },
  {
    "url": "css/fonts.css",
    "revision": "313b1e1db00f97ca69f0ba3fd3105bed"
  },
  {
    "url": "css/main.css",
    "revision": "6c1b9f884d2212b53b10a12e180e8110"
  },
  {
    "url": "css/materialize.css",
    "revision": "b0663391a6dd5efed956259f29fa18dd"
  },
  {
    "url": "css/materialize.min.css",
    "revision": "ec1df3ba49973dcb9ff212f052d39483"
  },
  {
    "url": "css/reset.css",
    "revision": "fd67ce10d39cc1c78c35e710824280d1"
  },
  {
    "url": "img/1.jpg",
    "revision": "3bd6c70a94146ed784fbb3ac79998d75"
  },
  {
    "url": "img/clubs/totenham.png",
    "revision": "38741b6023f1fcf8e166dad8a0792795"
  },
  {
    "url": "img/clubs/westham.png",
    "revision": "57939c569bcb1e06d6f3a47708a16ec9"
  },
  {
    "url": "img/jumbotron.jpeg",
    "revision": "fc72d4900fc5be21e09058b6c7e84245"
  },
  {
    "url": "img/league/england.png",
    "revision": "10fb795ea583ede1bbb9e15665e612b3"
  },
  {
    "url": "img/league/germany.png",
    "revision": "45f42f36e0af6f02383fc0249fcce1f8"
  },
  {
    "url": "img/league/Group 50.png",
    "revision": "e17d8cc3178995aedd3c4065101221b4"
  },
  {
    "url": "img/league/italy.png",
    "revision": "65e034ff6c84cbaa51850c5d388207c8"
  },
  {
    "url": "img/league/liga1.png",
    "revision": "d57bf38d6cc151712d6fb89e6fdd07bc"
  },
  {
    "url": "img/league/spain.png",
    "revision": "0314540eb632e5c3ee270a916a6b0b0c"
  },
  {
    "url": "index.html",
    "revision": "3772947734d202e835a32d59596aa2fe"
  },
  {
    "url": "js/api.js",
    "revision": "f0e54191a067c0b5a933ad6130bd9e99"
  },
  {
    "url": "js/database.js",
    "revision": "7d7b53dd116ae9abcb59fb0d34a458bc"
  },
  {
    "url": "js/jquery-3.4.1.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "js/materialize.js",
    "revision": "9832259e6e013b2e55f342c053c26104"
  },
  {
    "url": "js/materialize.min.js",
    "revision": "5dcfc8944ed380b2215dc28b3f13835f"
  },
  {
    "url": "js/nav.js",
    "revision": "b5203ef786c9ec62a804b0533aac97bb"
  },
  {
    "url": "js/notification.js",
    "revision": "e60a7b50942f7f6c769153e06e0e894d"
  },
  {
    "url": "js/register-sw.js",
    "revision": "92fe2d4b6d1459c0e3c26641910381cd"
  },
  {
    "url": "manifest.json",
    "revision": "283746598cf56a37aa45fb14d88dc0e9"
  },
  {
    "url": "nav.html",
    "revision": "8c595f3c86ceee0114f5371df4a5a3cb"
  },
  {
    "url": "pages/detailteam.html",
    "revision": "70c9be276da551d846b1a8d37f6b159f"
  },
  {
    "url": "pages/home.html",
    "revision": "a1c321d9b41647bb6e5910728f98e8d4"
  },
  {
    "url": "pages/manage.html",
    "revision": "125ce3487ccc59707a1fa371396d65bb"
  },
  {
    "url": "pages/schedule.html",
    "revision": "22d6ba27514318cf6b4800c7b43ee1f8"
  },
  {
    "url": "pages/tables.html",
    "revision": "8f17f6b584eb8a54584ce1e602a40284"
  },
  {
    "url": "pages/teams.html",
    "revision": "9f8892eb95a4eed59b54ab18d16822e5"
  },
  {
    "url": "service-worker-end.js",
    "revision": "f718a1f36ef900ead71a72ba9031b963"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "5063b105c7646c8043d58c5289f02cca"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "a9c4bb7348f42626454c988dbde1d0a0"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "06147b6cd88c7346cecd1edd060cd5de"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "c5e0f14f88a828261ba01558ce2bf26f"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "cccc9d29470e879e40eb70249d9a2705"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "c1a866ec0e04a5e1915b41fcf261457c"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "7b9568e6389b1f8ae0902cd39665fc1e"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "65b286af947c0d982ca01b40e1fcab38"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "c4f508e7c4f01a9eeba7f08155cde04e"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "f5f2566b93e89391da4db79462b8078b"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "8e4a6dcc692b3887f9f542cd6894d6d4"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "c2801fb415f03c7b170934769d7b5397"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "0bff33a5fd7ec390235476b4859747a0"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "333bae208dc363746961b234ff6c2500"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "44d537ab79f921fde5a28b2c1636f397"
  }
]);

self.addEventListener('push', function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    badge: 'favicon-16x16.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});