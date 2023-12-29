export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export interface searchResult {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export interface SearchRequest {
  query: string;
  filters: string | null;
  gender: string | null;
  personalPreferences: string | null;
  favourites: string[];
  style: string | null;
}

export interface SearchRequest {
  query: string;
  filters: string | null;
  gender: string | null;
  personalPreferences: string | null;
  favourites: string[];
}

export interface personalPreferences {
  preferences: string | null;
}
