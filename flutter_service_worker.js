'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07565fa53c2ecbd125d02cb5757ff7bb",
"assets/AssetManifest.bin.json": "b1cdba567ddb9bfe886efa2f843f297a",
"assets/AssetManifest.json": "2b480229167f5638d8d3df1821110811",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/blackhole.glb": "feb0dd31146793e7a00686f9a8e620db",
"assets/assets/gif/blackholev2.glb": "feb0dd31146793e7a00686f9a8e620db",
"assets/assets/gif/earth112756.glb": "03723d7c829e5e2feeda8a65d4e9e2fd",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/gif/space.glb": "1df5318dcc9f4310be1587fb5c3c6589",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/back@2x.png": "507c510ee2f0a9ec93c8ddd20c2025f6",
"assets/assets/icons/bold/heart@2x.png": "b91c311446e530793eb9c773eec3e5c7",
"assets/assets/icons/detail/bag@2x.png": "0cdfa6333be4c45d71e67eccc5a9ce81",
"assets/assets/icons/detail/minus@2x.png": "e575071209c67b339c3e821b5ab1fb1b",
"assets/assets/icons/detail/plus@2x.png": "907c3d9241272995a84bb7c84be4786a",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/light/filter@2x.png": "c1bee2fe4b829b88982669fda6001d84",
"assets/assets/icons/light/heart@2x.png": "15be54d4188d2270c1cc3b034b926fc8",
"assets/assets/icons/light/search@2x.png": "18970f83213469871a7ea7398d0d7543",
"assets/assets/icons/me.png": "8ae26dc9cd7ecd878324de05135f7b86",
"assets/assets/icons/notification.png": "db624c661eb870af2e26f64f7e306e1e",
"assets/assets/icons/not_collected@2x.png": "1d9b4647c53979f0adc4ae4055115acd",
"assets/assets/icons/products/asteroidbase.jpg": "2d4b68fc2a8b26e4d47f5ea68ca50967",
"assets/assets/icons/products/images.jpg": "0cd5e18449bff9a4add001408f8477a5",
"assets/assets/icons/products/lunarbase.jpg": "4ae9a46debeda8cff733670abf71d11c",
"assets/assets/icons/products/mars_explore.webp": "7912967c89c389fa79f03a1296d32f90",
"assets/assets/icons/products/maxresdefault.jpg": "41dad58e9789e06b686396e14778f1cf",
"assets/assets/icons/products/spaceship.jpg": "7ce6d7dd41ac9f14b03165bd668595ee",
"assets/assets/icons/products/spaceship_x200.jpg": "d2e03f2e60c01ba85202c87f8d33ac06",
"assets/assets/icons/products/spacestationblueprint.webp": "28ee00db07d6bef36d7a069e08fac103",
"assets/assets/icons/products/spacewalk2.jpg": "dce30916d52bd64068c49c2155e80d81",
"assets/assets/icons/profile/arrow_right@2x.png": "387f4d101fdef6f00d88699036ca5574",
"assets/assets/icons/profile/edit_square@2x.png": "4c521d90ff0ccbc53603f186efb8871e",
"assets/assets/icons/profile/info_square@2x.png": "3e17dc5759d23744f1c1c351f66ba8b6",
"assets/assets/icons/profile/location@2x.png": "2332a618990a7b16632063549e5ea00e",
"assets/assets/icons/profile/lock@2x.png": "e71b9e146869874ec8237e0f30a3d961",
"assets/assets/icons/profile/logo@2x.png": "1127d485d4b0f70a9092d86bfe1c5df7",
"assets/assets/icons/profile/logout@2x.png": "952ac2e9c5f6cfb371295982cae26014",
"assets/assets/icons/profile/more_circle@2x.png": "8ee16a85574c8fcb0a7573ef88a2b3b7",
"assets/assets/icons/profile/notification@2x.png": "98f03cd6392b93dda4cea506cb3cd423",
"assets/assets/icons/profile/profile@2x.png": "772a239c1501738550c57227fba2f8b5",
"assets/assets/icons/profile/shield_done@2x.png": "3927f3e25ef2d8a80909a224d4a0b785",
"assets/assets/icons/profile/show@2x.png": "1ec7fef4de81260872db0c43cdf133b7",
"assets/assets/icons/profile/user@2x.png": "ce4912c246bc1a6cfdeb1c5dcc06067c",
"assets/assets/icons/profile/wallet@2x.png": "701d25aa047d2c2994ae75446670adf7",
"assets/assets/icons/search@2x.png": "ff461a56adc2cd4a9628094c844f21f3",
"assets/assets/icons/start@2x.png": "c20093d0232f6add780b234f43365a56",
"assets/assets/icons/svg/bag.svg": "8adfb2f2526ebf49a6ac845604379af0",
"assets/assets/icons/svg/book_school.svg": "06d409e0f47cd460843c53c0367d047a",
"assets/assets/icons/svg/calendar.svg": "e64a4a545a6aed2be63cb8ebb78f273c",
"assets/assets/icons/svg/comment.svg": "431335c0f33fd1a8f7ff87bbfc473efd",
"assets/assets/icons/svg/conversation.svg": "639022b6399c141c3ba6569ce8f0fa7d",
"assets/assets/icons/svg/graduate.svg": "075dba3eb3d33d31c80b2502125ad755",
"assets/assets/icons/svg/idea.svg": "69e8586aa85e085f332319292d253e82",
"assets/assets/icons/svg/increase.svg": "61dd343a667f923fcadbd585e2d9ee79",
"assets/assets/icons/svg/level.svg": "0602552b5012fa53c0137b1efd68846b",
"assets/assets/icons/svg/menu.svg": "f7d4c4dfce63f7c8e69bee4580e962d2",
"assets/assets/icons/svg/microphone.svg": "f975636af6e8c8b186a4b87606d2fcfa",
"assets/assets/icons/svg/more.svg": "47fe7137c0d7ea3044f5a9b277f66375",
"assets/assets/icons/svg/pencil.svg": "c9f62b68861c5ca80d3cb709df6a329b",
"assets/assets/icons/svg/pencil2.svg": "c115fd49bd9838023a882648eca4063e",
"assets/assets/icons/svg/premium.svg": "ae20e0b7902acbcbe8af0bd5bb690a1b",
"assets/assets/icons/svg/travel.svg": "99891b660f851e846ba6665bfe3b162f",
"assets/assets/icons/tabbar/bold/Bag@2x.png": "d0940c5578c843f50fb9bba20d5158c0",
"assets/assets/icons/tabbar/bold/Buy@2x.png": "c4d0006d15d83f88cfd3136ce885ae87",
"assets/assets/icons/tabbar/bold/Home@2x.png": "a7a084c87e6b8d570513ebce0355dbd8",
"assets/assets/icons/tabbar/bold/Profile@2x.png": "be229562919b0b856fd8ec18f1080d81",
"assets/assets/icons/tabbar/bold/Wallet@2x.png": "183a1eb3ae0e4fbbc9a06255a7db85bd",
"assets/assets/icons/tabbar/light/Bag@2x.png": "2abab7338c8a156be34cd8c499321465",
"assets/assets/icons/tabbar/light/Buy@2x.png": "b680aed98cbceaa0011fb8dc437b4e37",
"assets/assets/icons/tabbar/light/Home@2x.png": "fb96fadc338e6ef9f96be2d51f39d306",
"assets/assets/icons/tabbar/light/more_circle@2x.png": "ab311056f733dd12700970ca29c97ff6",
"assets/assets/icons/tabbar/light/Profile@2x.png": "943987f08ec6f5b330ca397e3dbc832c",
"assets/assets/icons/tabbar/light/Wallet@2x.png": "0a77a4fc0a670f04310dbd2f414e70fb",
"assets/assets/icons/vn.svg": "67dda1f28bac49efd1392437b293a8b6",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/images/award1.png": "70432b8ec652db87ddc1a3d2da617e58",
"assets/assets/images/award2.png": "22b6fd75a66ff9afa1cfe929185871ea",
"assets/assets/images/award3.png": "b2a85fe11793aef1501968e86342bb08",
"assets/assets/images/background.jpg": "f5d8b145bdb81f0ea16ea3d307467e7e",
"assets/assets/images/bcg2.png": "a97fe503e40be293becd9717692f40e2",
"assets/assets/images/circles.svg": "13d8d7fdb6741f1b538ac1546cde4924",
"assets/assets/images/cloud%25201.png": "0a5b48c0e91f2e3fc960038086e47fae",
"assets/assets/images/Component_4.png": "7c4a3a7450cdda89214fe7e7d2eb8531",
"assets/assets/images/Component_5.png": "e1c533535cb60fba1e52e8c3baefcda1",
"assets/assets/images/Component_6.png": "013fb33e5f62d741709cafef88188a96",
"assets/assets/images/gasgiant.webp": "c6699661c75f31376b6cfa36f33ac9b5",
"assets/assets/images/gem.png": "b6b1cf955d39a3ad33eb282ff5cf9e83",
"assets/assets/images/githu.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/group%25201.png": "4f655ae06c7aac2d368c07958503dc9b",
"assets/assets/images/hand.svg": "4274b6b521520de6649e68908c8936f3",
"assets/assets/images/icon.png": "a2a49eb3299ac8d2671107135d773ef9",
"assets/assets/images/kepler452b.webp": "6deaf89f12295083ee861922d35f9d98",
"assets/assets/images/level.png": "c52aba33bd78a5da87ad3406c79b292d",
"assets/assets/images/lindekin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/logo.png": "aac4187d73d7eccec1ca2765ef3e7b62",
"assets/assets/images/nasa.png": "ff0165b76fa4247cd1bf4451ef52d76f",
"assets/assets/images/NetBar.png": "78a6d661ddf2222650580dbfb1e9db5b",
"assets/assets/images/plane.png": "98d44d90755302f7520adafbeb26aa7a",
"assets/assets/images/score-circles.svg": "7d33a4fd29131a0998949d61d60bb5be",
"assets/assets/images/score-shape.png": "456d90cbcda159811386be5b8a646f0d",
"assets/assets/images/solar.jpg": "3a9749a2c28680c8af1a2ce1cfe53c7b",
"assets/assets/images/space-ship.svg": "671301e3dc5e3089defd6f21f36eecf3",
"assets/assets/images/stars.svg": "40cd076bbe77fe58ca94546dbccbd6bf",
"assets/assets/images/terrestrial.webp": "18a53e22c224adaf8b863725f8325316",
"assets/assets/images/universe.jpg": "f20056766857476019ad5d43136bbc65",
"assets/assets/images/wave.svg": "cda8aac2ec2a334529abd8ec338f278a",
"assets/assets/imgs/anh.jpg": "f6c75fb614361376f611b9e8e50b9698",
"assets/assets/imgs/barcode.webp": "f8885fca360f3981a8167436a79c5692",
"assets/assets/imgs/black_hole.png": "7b6a16fde2535ebb0da98badb3e9712c",
"assets/assets/imgs/dan.jpg": "67d93a7ffb5e5ddc831a03bb209e21e6",
"assets/assets/imgs/designer2.webp": "bca30d3c0809e1dad8b270ed6e87e18f",
"assets/assets/imgs/designer3.webp": "6bc84696aebf92b461976b88bd047737",
"assets/assets/imgs/designer4.webp": "09c2e6c095ec4640b29a7adffb9ebcd7",
"assets/assets/imgs/earth.jpg": "f19d1ea7c9ad543b2889e1c06e3673c0",
"assets/assets/imgs/explanttype.png": "9fec92129c4638112ab7fa545f81c622",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/huy.jpg": "0ead0c74e59223509dd1dd15f99f3050",
"assets/assets/imgs/logo.png": "5072400fce842c77f338dfd7ba118478",
"assets/assets/imgs/mnu.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/nasa.png": "ff0165b76fa4247cd1bf4451ef52d76f",
"assets/assets/imgs/nasalogo.svg": "ee15e8fa5966ccb39347d58852d84d16",
"assets/assets/imgs/nguyen.jpg": "fbe352e60d7fd51ac807ebf0f972c984",
"assets/assets/imgs/nhat.jpg": "5f66cf5dbe98e0df277a709a4748ddad",
"assets/assets/imgs/profile.png": "68b2cd67d5338e0a438b49c3415174dd",
"assets/assets/imgs/solar.jpg": "3a9749a2c28680c8af1a2ce1cfe53c7b",
"assets/assets/imgs/superearth.png": "97c2580ed6ccd39e5dc40484ccdcd4f2",
"assets/assets/imgs/universe.jpg": "fd18a2186ca95652b33b86db039136a7",
"assets/assets/imgs/world.png": "510078181cdd2af1cf3e821da9ceb464",
"assets/assets/jsons/rocket.json": "ecbf2a16f8e77bbfce7855c40d55b356",
"assets/assets/jsons/rocketv2.json": "4046ce9319fc7571ed0d05bdeff66409",
"assets/assets/model/blackhole.glb": "c6001087edc5cba668208f7adccbd358",
"assets/assets/plant.json": "05dcb6ac00884dfd54424cba57b327e0",
"assets/assets/t-images/1.png": "3505c9d5add704c82d228feda314044f",
"assets/assets/t-images/10.png": "76654d706b1bba6b7ee427136a1e4f2a",
"assets/assets/t-images/11.png": "792dec4b92493b3516da5e4e69828366",
"assets/assets/t-images/12.png": "1e56560dfc3638cc4e3cdb9b5d2513f9",
"assets/assets/t-images/13.png": "bf370a29da3b232b5a5d6fe707253a2b",
"assets/assets/t-images/14.png": "df8b601ba4daeae7c14de4a289a159b5",
"assets/assets/t-images/15.png": "16ffe8da2ea3552c666a4f076974e205",
"assets/assets/t-images/16.png": "55b76f5800c38931eeb2b691fd6a4778",
"assets/assets/t-images/17.png": "d281646f2ea0e3e9f4002a423b73ce67",
"assets/assets/t-images/18.png": "54df15693364855c6c3233a9313edfc4",
"assets/assets/t-images/19.png": "5970b60c7c53f2a93e66e77ec37af8e9",
"assets/assets/t-images/2.png": "0010d43eccd827ce58360df3b4f52583",
"assets/assets/t-images/20.png": "2aa05d506d64dc3dbae43fa979da035d",
"assets/assets/t-images/21.png": "f4dcbbbac245dc11404b6e0c580d51cc",
"assets/assets/t-images/22.png": "393a072dbd5c80fe9c5816bb66e3b0cf",
"assets/assets/t-images/23.png": "179b7dcf8896f5eec7029ee90e00ea40",
"assets/assets/t-images/24.png": "66d4a11230e4f523cb47cefd32926643",
"assets/assets/t-images/25.png": "a36da2c39751ac7e5c5a0f883c35b7b7",
"assets/assets/t-images/3.png": "c1e24e3dd3def6602e00733e5c78e824",
"assets/assets/t-images/4.png": "684d4e5131094bce26373ddbc3fb6cd2",
"assets/assets/t-images/5.png": "8f818bd2797adf28ac10cfb77c45b68b",
"assets/assets/t-images/6.png": "5ef3d6e7aacbae6806d9a55fc2d544d5",
"assets/assets/t-images/7.png": "94f3310ea7edcaeecd49433ef28980c6",
"assets/assets/t-images/8.png": "8f63f2d12263cc880387726b8e1df742",
"assets/assets/t-images/9.png": "8a724ca1d79a06d4675ce149003a0a0a",
"assets/assets/textures/earth.jpg": "49c3b412cfa448ec819412fb3ca089d2",
"assets/assets/textures/generictype.png": "84c220b21cabac4a5ab9e96a18775396",
"assets/assets/textures/jupiter.jpg": "7436980574d4532e228930e1defea0bd",
"assets/assets/textures/kepler452.jpg": "f34bf0c9251f0d1ffae069fccc28329e",
"assets/assets/textures/kepler452b.jpg": "a6014c16c7ab5df4679015205a0665ec",
"assets/assets/textures/mars.jpg": "302f8ac7d42735a46d980d561567b26d",
"assets/assets/textures/mercury.jpg": "3a95b9218d50192d7be83add30e7f489",
"assets/assets/textures/neptune.jpg": "e77dd5920df878a66ba99c64ab136c42",
"assets/assets/textures/pluto.jpg": "58971884cb0d18f2b30fd8d20580f7a6",
"assets/assets/textures/proximacen.jpg": "af251e24fcb6693268ab21ec8cef5dc2",
"assets/assets/textures/saturn.jpg": "038ec3cf432f1a9ad5f876680d3de338",
"assets/assets/textures/saturn_ring.png": "2233cd41cd7466569b521614878e427f",
"assets/assets/textures/stars.jpg": "1b9714f6711087bdb4b84e6c31dc9e80",
"assets/assets/textures/stars1.jpg": "ba9822c99fcabf617e25ab95a25b53c5",
"assets/assets/textures/sun.jpg": "09a52beab6f825b7dcd20835e7f95b19",
"assets/assets/textures/trappist_b.jpg": "1385d06ff7a30d5327e451b4069380d2",
"assets/assets/textures/trappist_c.jpg": "16bccbf4a45890546cfbcdae1263939f",
"assets/assets/textures/trappist_d.jpg": "9bd2d2fccdc93c68d4f56ca304796b2c",
"assets/assets/textures/trappist_e.jpg": "a1f589f18219b1173f2948c58068e0de",
"assets/assets/textures/trappist_f.jpg": "7e89bcd724aaad8d5d11c72717a7bbf5",
"assets/assets/textures/trappist_g.jpg": "a37b041444ec1e8a7aa3fc90e38b7e6e",
"assets/assets/textures/trappist_h.jpg": "ad274459b62a70998ff2d91a47054225",
"assets/assets/textures/uranus.jpg": "80153e46d25fe4d82c313fe23f0a3be4",
"assets/assets/textures/uranus_ring.png": "ba36db4e1fbc85e06f1153c1026dea3f",
"assets/assets/textures/venus.jpg": "a54a890656ffaf8aae589e23c879cd5f",
"assets/FontManifest.json": "5c136d55db93a610607d85662c8572b6",
"assets/fonts/MaterialIcons-Regular.otf": "5b71d4386e6a50b40929b2bbfdca72f0",
"assets/NOTICES": "b130da867dbf4cf2ddde6f9e477d24a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model-viewer.min.js": "da8ab9e8570d09c7a44ba234786d34f7",
"assets/packages/flutter_3d_controller/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/packages/ionicons/fonts/Ionicons.ttf": "8088e0d2b89055a304357a0db12f6f67",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f3aad3832e6ec17f50c2f462418c65ca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11c70222edd994830f05a10488198ce6",
"/": "11c70222edd994830f05a10488198ce6",
"main.dart.js": "141c5e8c6f7369bb508f6e5eb62e1f64",
"manifest.json": "e2c542df2a760916525d06d6053abcca",
"version.json": "0328a9a2454042b876bfbb138abc205b"};
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
