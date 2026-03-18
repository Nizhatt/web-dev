// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Album } from './models/album.model';
// import { Photo } from './models/photo.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class AlbumService {

//   private apiUrl = 'https://jsonplaceholder.typicode.com';

//   constructor(private http: HttpClient) {}

//   // g. Get all albums
//   getAlbums(): Observable<Album[]> {
//     return this.http.get<Album[]>(`${this.apiUrl}/albums`);
//   }

//   // h. Get single album
//   getAlbum(id: number): Observable<Album> {
//     return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
//   }

//   // Get photos of album
//   getPhotos(id: number): Observable<Photo[]> {
//     return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
//   }

//   // Update album
//   updateAlbum(album: Album): Observable<Album> {
//     return this.http.put<Album>(
//       `${this.apiUrl}/albums/${album.id}`,
//       album
//     );
//   }

//   // Delete album
//   deleteAlbum(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
//   }
// }


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from './models/album.model';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Album[] = [
    { id: 1, userId: 1, title: 'Travel Photos' },
    { id: 2, userId: 1, title: 'Family Album' },
    { id: 3, userId: 2, title: 'Nature Collection' },
    { id: 4, userId: 3, title: 'City Life' },
    { id: 5, userId: 3, title: 'City' }
  ];

  // g. Get all albums
  getAlbums(): Observable<Album[]> {
    return of(this.albums);
  }

  // h. Get single album
  getAlbum(id: number): Observable<Album> {
    const album = this.albums.find(a => a.id === id)!;
    return of(album);
  }

  // Photos (временные)
  getPhotos(id: number): Observable<Photo[]> {
    const photos: Photo[] = [
      {
        albumId: id,
        id: 1,
        title: 'Sample photo',
        url: 'https://via.placeholder.com/600',
        thumbnailUrl: 'https://via.placeholder.com/150'
      }
    ];
    return of(photos);
  }

  // Update album
  updateAlbum(album: Album): Observable<Album> {
    const index = this.albums.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.albums[index] = album;
    }
    return of(album);
  }

  // Delete album
  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter(a => a.id !== id);
    return of();
  }
}