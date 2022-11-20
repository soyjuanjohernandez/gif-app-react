import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = UseFetchGifs(category)

    return (
        <>
            {isLoading && <h1>Cargando...</h1>}

            <h3>{category}</h3>
            
            <div className="card-grid">
                {
                    images.map(gif => (
                        <GifItem key={gif.id} {...gif} />
                    )
                    )
                }
            </div>

        </>
    )
}
