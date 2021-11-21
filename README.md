# easy-cache
Simple cache utils for JS

> Non-minified:
> 2 kB

> Minified:
> 0.5 kB

`easycache.init(cacheName)`
<br>
Initializes the cache using the provided name.

`easycache.put(url, data)`
<br>
Stores the specified data into the cache under the provided URL key.

`easycache.get(url)`
<br>
Retrieves the specified data under the provided URL key from the cache.

`easycache.has(url)`
<br>
Checks if the specified URL key is stored in the cache.

`easycache.fetch(url, opt)`
<br>
Performs a fetch request or fetches the cache if already stored. Returns the response.

`easycache.fetchOverwrite(url, opt)`
<br>
Performs a fetch request and stores the result into cache.