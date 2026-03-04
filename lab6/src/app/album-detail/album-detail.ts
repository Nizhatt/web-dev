import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album';
import { Album } from '../models/album.model';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail {

  album$!: Observable<Album>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.album$ = this.albumService.getAlbum(id);
  }

  saveAlbum(album: Album) {
    this.albumService.updateAlbum(album).subscribe(() => {
      alert('Album updated!');
    });
  }
}