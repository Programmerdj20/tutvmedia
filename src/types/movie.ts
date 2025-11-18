export interface MovieResult {
	id: number;
	title: string;
	poster_path: string | null;
	backdrop_path: string | null;
	release_date: string;
	vote_average: number;
	overview: string;
	media_type?: 'movie' | 'tv';
}

export interface TMDBResponse {
	page: number;
	results: MovieResult[];
	total_pages: number;
	total_results: number;
}

export interface Movie extends MovieResult {
	genres?: Array<{
		id: number;
		name: string;
	}>;
	runtime?: number;
	budget?: number;
	revenue?: number;
	production_companies?: Array<{
		id: number;
		name: string;
	}>;
}
