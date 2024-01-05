"use client";

import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import { useHorizontalScroll } from "./useHorizontalScroll";

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

function MoviesCarousel({ title, movies, isVertical }: Props) {
    const scrollH = useHorizontalScroll();
    return (
        <div className="z-20">
            <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

            {/* <div id={idname} className={cn(
                "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
                isVertical && "flex-col space-x-0 space-y-12"
            )}
            > */}
            {isVertical ? (
                <div
                    className={cn(
                        "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
                        isVertical && "flex-col space-x-0 space-y-12"
                    )}
                >
                    {movies.map(movie => (
                        <div
                            key={movie.id}
                            className={cn(
                                isVertical &&
                                "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                            )}
                        >
                            <MovieCard movie={movie} />
                            <div className="max-w-2xl">
                                <p className="font-bold">
                                    {movie.title}   ({movie.release_date?.split("-")[0]})
                                </p>
                                <hr className="mb-3" />
                                <p className="">{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className={cn(
                        "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
                        isVertical && "flex-col space-x-0 space-y-12"
                    )}

                    ref={isVertical ? '' : scrollH as React.RefObject<HTMLDivElement>}
                >
                    {movies?.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}

            {/* </div> */}
        </div>
    )
}

export default MoviesCarousel