/**
 * easy-cache.js
 * Author: JanCraft
 * License: MIT
 */
const easycache = {
    __cache: null,
    /**
     * Stores the specified data into the cache under
     * the provided URL key.
     * 
     * @param {string} url The URL to use as a key
     * @param {string} data The data to store
     */
    async put(url, data) {
        this.__cache?.put(url, new Response(data));
    },
    /**
     * Retrieves the specified data under the provided URL
     * key from the cache.
     * 
     * @param {string} url The URL to use as a key
     * @returns {string} The stored data or undefined
     */
    async get(url) {
        return await this.__cache?.match(url);
    },
    /**
     * Checks if the specified URL key is stored
     * in the cache.
     * 
     * @param {string} url The URL to use as a key
     * @returns {boolean} If the URL key is stored in the cache
     */
    async has(url) {
        return await this.__cache?.match(url) ? true : false;
    },
    /**
     * Performs a fetch request or fetches the cache
     * if already stored. Returns the response.
     * 
     * @param {string} url The URL to fetch
     * @param {any} opt The fetch options
     * @returns {Response} The fetch response
     */
    async fetch(url, opt) {
        if (this.has(url)) return await this.get(url);
        const r = await fetch(url, opt);
        await this.put(url, r);
        return r;
    },
    /**
     * Performs a fetch request and stores the
     * result into cache.
     * 
     * @param {string} url The URL to fetch
     * @param {any} opt The fetch options
     * @returns {Response} The fetch result
     */
    async fetchOverwrite(url, opt) {
        await this.__cache?.add(new Request(url, opt));
        return await this.get(url);
    },
    /**
     * Initializes the cache using the provided name.
     * 
     * @param {string} cacheName 
     */
    async init(cacheName) {
        this.__cache = await caches.open(cacheName);
    }
};