'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d2f741f6e169be67b7fb41732d6e343e",
"assets/AssetManifest.bin.json": "fab0a8dc8e73f3d86c5a2d5294f8793d",
"assets/AssetManifest.json": "7e98657b7b16dc018c692b14e6dddad7",
"assets/assets/fonts/SamsungOne-400.ttf": "4889669d08e2addfe6b66ca4a0297074",
"assets/assets/fonts/SamsungOne-700.ttf": "9880c5ab2b7844e855f285198c0bab05",
"assets/assets/fonts/SamsungSharpSans-Bold.ttf": "31af6b22017b69635b55ecd00339f923",
"assets/assets/icons/MathBridgeAcademy.jpg": "3e0ad94fd1a8d292495d2472f3b250e7",
"assets/assets/images/ambitious-teenager-with-dark-skin-and-boycut-make-2023-11-27-05-22-49-utc.jpg": "508e8e5ee662dd8dcab114f29ad7e99a",
"assets/assets/images/back-to-school-conceptual-background-2023-11-27-05-37-00-utc.jpg": "b4979792ee9b122a8cdec9c12b802cdd",
"assets/assets/images/desktop-organizer-with-school-stationary-and-offic-2023-11-27-04-51-43-utc.jpg": "cfa4a5ca857204adc4c475d0f63770ae",
"assets/assets/images/gathered-for-the-good-of-their-education-2023-11-27-05-09-57-utc.jpg": "3547ad5e6cd85080382ab87a0a70f66f",
"assets/assets/images/graphic-designer-working-from-home-using-laptop-an-2024-11-22-18-56-20-utc.jpg": "1db26155d7f52bfec1457d87028aa265",
"assets/assets/images/home_cover_1.png": "5e9ce19fe59434adbba794af8ea0409a",
"assets/assets/images/IMG_20241126_161008_491.jpg": "fc54735a09a9e7b4ca150e13d5f1aa49",
"assets/assets/images/maintainance.gif": "1f4b15a962677279164a1d455855720b",
"assets/assets/images/portrait-of-pensive-african-american-freelancer-wi-2024-11-19-12-28-47-utc.jpg": "b0dc8ef39258800070a695a8093b3dfb",
"assets/assets/images/profile_background_removed.png": "89eb28256e1ec8fea5f635013bafc352",
"assets/assets/images/the-hand-that-is-written-with-the-white-chalk-and-2023-11-27-04-51-34-utc.jpg": "de19d2d8914db476f747e7f095d41c83",
"assets/assets/images/three-multiethnic-women-at-desk-having-lesson-2024-06-17-21-06-48-utc.jpg": "07fa96436c09c108a7d04781d4fe9027",
"assets/assets/images/young-african-american-woman-siting-at-cafe-workin-2023-11-27-04-55-45-utc.jpg": "4ae4068fdec971cc0a89fececae89c9a",
"assets/FontManifest.json": "49b1b9693a9d3093507e3c95aed2e5de",
"assets/fonts/MaterialIcons-Regular.otf": "7143d92663fa6cfa93accabb6f91ae5d",
"assets/NOTICES": "38a3521901504869c301e52dbac25bc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3e0ad94fd1a8d292495d2472f3b250e7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3d3463c3eef53d7d674faa04a83f8cab",
"icons/favicon.png": "3e0ad94fd1a8d292495d2472f3b250e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "729c2dbce02449664debbe42c550f537",
"/": "729c2dbce02449664debbe42c550f537",
"main.dart.js": "b57db569cea35e587743d95a9d7e18a6",
"manifest.json": "976841349ba856d0e3b27a2b31255481",
"version.json": "92b99fec9e1da8bbc97b4b3605bbc8c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
