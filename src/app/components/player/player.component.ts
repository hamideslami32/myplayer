import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  videoUrl = 'https://tmod.ir/static/Ready%20player%20web_%20Building%20modern%20web%20games%20_Chrome%20Dev%20Summit%202019_.mp4';
  title = 'Ready player web_ Building modern web games (Chrome Dev Summit 2019)';
  likeStatus = ''
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  setLike(value: string) {
    this.likeStatus = value
  }

}
