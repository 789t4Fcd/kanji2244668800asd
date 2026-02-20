self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("kanji-app").then(cache=>{
      return cache.addAll([
        "index.html",
        "kanji-data.json",
        "manifest.json"
      ]);
    })
  );
});