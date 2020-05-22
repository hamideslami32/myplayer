import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(public http: HttpClient) { }

  getVideo(): Observable<Object> {
    let videoUrl = 'https://tmod.ir/static/Ready%20player%20web_%20Building%20modern%20web%20games%20_Chrome%20Dev%20Summit%202019_.mp4'
    return {
      name: 'x',
      url: videoUrl
    }
    // return this.http.get(url)
    //   .pipe(map((res) => {
    //     return res;
    //   }))
  }
}
