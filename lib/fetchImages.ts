const fetchImages = () => 
    fetch("http://127.0.0.1:7071/api/getImages", {
        cache: "no-store",
    }).then((res) => res.json());
export default fetchImages;