const apiFetchFactory = async function(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const apiData = await response.json();
        return apiData;
    } catch (err) {
        console.log(err);
        return;
    }
}
export { apiFetchFactory };