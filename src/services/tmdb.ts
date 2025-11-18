import type { TMDBResponse, MovieResult, Movie } from '../types/movie';

const API_KEY = import.meta.env.PUBLIC_TMDB_API_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

if (!API_KEY) {
	console.warn('⚠️ TMDB_API_KEY not found. Some features may not work.');
}

export const getImageUrl = (
	path: string | null,
	size: 'w200' | 'w500' | 'original' = 'w500'
): string => {
	if (!path) {
		return '/images/placeholder.png';
	}
	return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getPopularMovies = async (page: number = 1): Promise<TMDBResponse> => {
	try {
		const response = await fetch(
			`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=es-ES`
		);

		if (!response.ok) {
			throw new Error(`TMDB API Error: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching popular movies:', error);
		return {
			page,
			results: [],
			total_pages: 0,
			total_results: 0,
		};
	}
};

export const searchMovies = async (query: string, page: number = 1): Promise<TMDBResponse> => {
	if (!query.trim()) {
		return {
			page,
			results: [],
			total_pages: 0,
			total_results: 0,
		};
	}

	try {
		const response = await fetch(
			`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=es-ES`
		);

		if (!response.ok) {
			throw new Error(`TMDB API Error: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error searching movies:', error);
		return {
			page,
			results: [],
			total_pages: 0,
			total_results: 0,
		};
	}
};

export const getMovieDetails = async (movieId: number): Promise<Movie | null> => {
	try {
		const response = await fetch(
			`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES`
		);

		if (!response.ok) {
			throw new Error(`TMDB API Error: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching movie details:', error);
		return null;
	}
};

export const getTrendingMovies = async (timeWindow: 'day' | 'week' = 'week'): Promise<TMDBResponse> => {
	try {
		const response = await fetch(
			`${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}&language=es-ES`
		);

		if (!response.ok) {
			throw new Error(`TMDB API Error: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching trending movies:', error);
		return {
			page: 1,
			results: [],
			total_pages: 0,
			total_results: 0,
		};
	}
};
