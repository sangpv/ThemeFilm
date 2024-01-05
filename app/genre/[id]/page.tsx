import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMoives } from "@/lib/getMovies";

type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    }
}

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    const movies = await getDiscoverMoives(id);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32">
                <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
                <MoviesCarousel title={genre} movies={movies} isVertical />
            </div>
        </div>
    )
}

export default GenrePage