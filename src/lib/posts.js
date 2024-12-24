
export const getPosts = async () => {
    const res = await fetch('https://api.sampleapis.com/avatar/info');
    if (!res.ok){
        throw new Error("Failed to fetch data");
    }
    return res.json()
}