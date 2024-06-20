'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1268fabb0601404afe3bcc245cace9bf",
"assets/AssetManifest.bin.json": "6ef82bdf975e0cdecf29029eb84736aa",
"assets/AssetManifest.json": "fb1d93001a5a09180cf12d5dc81e05b0",
"assets/assets/images/avatar.png": "d02aca76ecca58caf9da995c9e381aeb",
"assets/assets/images/bald_pattern.png": "2e24e85d7e99ba21ae196ea30555b9a5",
"assets/assets/images/black_horse.png": "b8073ae261a09cd3eb33b69a953cc6ad",
"assets/assets/images/blaze_pattern.png": "6ae7c09cca3aa483e68f6488f335eee7",
"assets/assets/images/both_back_socks.png": "72154261e9964c928c3c55e5f72fe80d",
"assets/assets/images/both_front_socks.png": "c8074f92af4190910a8ce426831546e3",
"assets/assets/images/deep_brown_horse.png": "e3937b96c5f24208b02453aecffedcda",
"assets/assets/images/gray_horse.png": "d9c5043c152daca71292e09cdf129acd",
"assets/assets/images/header.png": "5376dbdab44f28c0ad7a0619696bef62",
"assets/assets/images/hobby1.png": "9aa07d301612a9386f1493a30782ba97",
"assets/assets/images/hobby2.png": "5248405e6681b54b9ca84e1657de6b5b",
"assets/assets/images/hobby3.png": "9705bbd42cb2bd7ac66209c6d4bce615",
"assets/assets/images/hobby4.png": "210c4a121682d0da9b4de523c5875a9d",
"assets/assets/images/hobby5.png": "e08650f54c0b64536b6c045fe363be9f",
"assets/assets/images/hobby6.png": "dcc55c9ce44476fbc50d06b2f39b68af",
"assets/assets/images/hobby7.png": "2acb4ab61c483fd8d6a2b569e32f09d2",
"assets/assets/images/hobby8.png": "0fe65d329a9708b79b040a2542ecdb78",
"assets/assets/images/hobby9.png": "10feb08f94bdc3d177ef62621c3c5f18",
"assets/assets/images/kindofstar.png": "23e2626acff368d220dc4f93861589a1",
"assets/assets/images/left_back_socks.png": "9566219e0b7a0f0c3d926ed744c3bcd0",
"assets/assets/images/left_front_socks.png": "cdc0291b707af965516f949c088034ed",
"assets/assets/images/light_brown_horse.png": "93e892dd3f780a2366d23101a8f36417",
"assets/assets/images/nores_horse.png": "b20cfca29a8391a64314dda4ed31ee20",
"assets/assets/images/right_back_socks.png": "1050034864c99fbc2b045fbbe7a9486b",
"assets/assets/images/right_front_socks.png": "0d7a638053341fc41b453085a45ddfff",
"assets/assets/images/select_sales.png": "eea550698543eb85806970ca31be2167",
"assets/assets/images/sky.png": "1844ae919c51ebdc10ca294936ac7c93",
"assets/assets/images/star1_pattern.png": "1172853d7e87c7fb792ab17ad1a5b0ab",
"assets/assets/images/star2_pattern.png": "57bb38fb62e238f7fb9195f578919569",
"assets/assets/images/stripe_pattern.png": "a9b4de0ed3fde538be45c9a39f35b677",
"assets/assets/images/withmom_black.png": "ad0c8ca0796ecb2bed1fe3960d02a5bf",
"assets/assets/images/withmom_deep_brown.png": "e432c1b8031a003dd8164ae99cd21bb9",
"assets/assets/images/withmom_gray.png": "ac969af3544fb1da3c1d61eb40014472",
"assets/assets/images/withmom_light_brown.png": "045df54b4f18ff80762e99a30860b519",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "bc7848781c48d3f259cf4743b9d6df7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5049366440cefb4c3c297b824aeb0c94",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2bbb7fc46aa3db036da344b6ef49b185",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80ef18c799738c3096c8ff35aa21a570",
"/": "80ef18c799738c3096c8ff35aa21a570",
"main.dart.js": "66d5fd0e7dacedd69e0173a4b26b6f45",
"manifest.json": "e045cb567762a1c6cc4b3efbe59a273c",
"version.json": "5ec1dad1688a2ce86f30bd70bcef2152"};
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
