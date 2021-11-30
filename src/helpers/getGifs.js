export const getGifs = async (categorie) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iQ37CjOyhOMoQeUZy6aRl67VnzIDp43a&q=${ encodeURI (categorie) }&limit=3&offset=0&rating=g&lang=es`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((value) => {
        return {
            id: value.id,
            image: value.images.downsized.url,
            title: value.title
        }
    })

    return gifs
}