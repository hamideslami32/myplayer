import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  commentText = ''

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newComment = new EventEmitter<string>();

  addNewItem() {
    this.newComment.emit(this.commentText);
    this.commentText = ""
  }

}
