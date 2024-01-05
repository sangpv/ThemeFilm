import { getDiscoverMoives } from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";


type Props = {
    id?: string;
    keywords?: string;
}

async function CarouselBannerWrapper({ id, keywords }: Props) {
    const movies = await getDiscoverMoives(id, keywords);

    return (
        <CarouselsBanner movies={movies}  />
    )
}

export default CarouselBannerWrapper