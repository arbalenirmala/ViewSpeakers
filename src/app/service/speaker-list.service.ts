import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpeakerListService {
  configUrl = 'https://randomuser.me/api';
  constructor(private http: HttpClient) {}

  getSpeakersList(res: number, pageNum: number) {
    return this.http.get(
      this.configUrl + '/?results=' + res + '&page=' + pageNum
    );
  }
}
