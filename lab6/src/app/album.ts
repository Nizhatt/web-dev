import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './models/album.model';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // g. Get all albums
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  // h. Get single album
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  // Get photos of album
  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  // Update album
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(
      `${this.apiUrl}/albums/${album.id}`,
      album
    );
  }

  // Delete album
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}