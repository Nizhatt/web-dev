import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../album';
import { Photo } from '../models/photo.model';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos {

  photos$: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.albumService.getPhotos(id);
  }
}