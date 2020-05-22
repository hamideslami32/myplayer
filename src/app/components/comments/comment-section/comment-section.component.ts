import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  comments = [
    {
      name: 'hamid',
      comment: 'that was great!'
    },
    {
      name: 'david',
      comment: 'i dont like it'
    },
    {
      name: 'lady',
      comment: ':)'
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  addComment(value: string) {
    this.comments.push({ name: 'Anonymous', comment: value })
  }

}
