if (!window.fetcher) window.fetcher = {};

window.fetcher.fetch_json = function (url) {
    console.log("[shim] fetch_json called with URL:", url);
    let done = false;
    let result = "";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            result = JSON.stringify(data);
            done = true;
        })
        .catch(err => {
            result = JSON.stringify({ error: err.message });
            done = true;
        });

    // Busy wait synchronously up to 2 seconds for fetch to complete
    const start = Date.now();
    while (!done && (Date.now() - start) < 2000) {
        // spinning
    }

    return result;
};
