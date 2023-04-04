export interface IImage {
  url: string;
  height: number;
  width: number;
}

export interface IArtists {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ItemsDTO {
  album_type: string;
  total_tracks: 9;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: IImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  copyrights: [
    {
      text: string;
      type: string;
    }
  ];
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  genres: string[];
  label: string;
  popularity: number;
  album_group: string;
  artists: IArtists[];
}

export interface IAlbum {
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: ItemsDTO[];
  };
}

export interface IAlbumTracksDTO {
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }
  ];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  restrictions: {
    reason: string;
  };
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
  images: IImage[]
}

export interface AlbumTracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: IAlbumTracksDTO[];
}