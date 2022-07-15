import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CommentModel } from '../comment';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  FormData!: FormGroup;
  @Output() commentCreated = new EventEmitter<{}>();

  constructor(
    private builder: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      content: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData);
    this.commentsService
      .addComment(FormData)
      .subscribe(comment => this.commentCreated.emit({}));
  }
}
