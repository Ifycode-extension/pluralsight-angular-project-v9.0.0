import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbum(id: number) {
    return this._httpClient.get(this._albumUrl)
    .pipe(map((response: Response) => response));
  }
}
