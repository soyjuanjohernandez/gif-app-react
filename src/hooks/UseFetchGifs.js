import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const UseFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getDataGifs = async () => {
        const dataGifs = await getGifs(category);
        setImages(dataGifs);
        setIsLoading(false)
    }

    useEffect(() => {
        getDataGifs()
    }, [])

    return {
        images,
        isLoading,
    }

}
