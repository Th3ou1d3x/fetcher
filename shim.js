if (!window.fetcher) window.fetcher = {};

window.fetcher.fetch_json = function (url) {
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

    const start = Date.now();
    while (!done && (Date.now() - start) < 2000) {}

    return result;
};
