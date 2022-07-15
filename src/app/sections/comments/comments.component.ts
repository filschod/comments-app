import { Component, OnInit } from '@angular/core';
import { CommentModel } from './comment';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  providers: [CommentsService],
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: CommentModel[] = [];
  currentPage: number = 1;
  limit: number = 1;
  order: string = 'asc';
  numberOfComments: number = 0;
  numberOfPages: number = 0;
  visiblePages: number[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.getNumberOfComments();
    this.getComments();
  }

  changeOrder(order: string): void {
    this.order = order;
    this.getComments();
  }

  updatePage(page: number): void {
    this.currentPage = page;
    this.getComments();
  }

  changePage(page: number): void {
    if (page === this.currentPage) {
      return;
    }
    if (
      this.numberOfPages <= 3 ||
      page === 1 ||
      page === this.numberOfPages ||
      (page === 2 && this.currentPage === 1) ||
      (page === this.numberOfPages - 1 &&
        this.currentPage === this.numberOfPages)
    ) {
      this.currentPage = page;
      this.getComments();
      return;
    }
    if (this.currentPage - page > 0) {
      this.visiblePages.pop();
      this.visiblePages.unshift(page - 1);
    } else if (this.currentPage - page < 0) {
      this.visiblePages.shift();
      this.visiblePages.push(page + 1);
    }
    this.currentPage = page;
    this.getComments();
  }

  getNumberOfComments(): void {
    this.commentsService.getComments(-1, 1, 'asc').subscribe(comments => {
      this.numberOfComments = comments?.length | 0;
      this.numberOfPages = Math.ceil(this.numberOfComments / this.limit);
      switch (this.numberOfPages) {
        case 0:
        case 1:
          this.visiblePages = [1];
          break;
        case 2:
          this.visiblePages = [1, 2];
          break;
        default:
          this.visiblePages = [1, 2, 3];
          break;
      }
    });
  }

  getComments(): void {
    this.commentsService
      .getComments(this.limit, this.currentPage, this.order)
      .subscribe(comments => (this.comments = comments));
  }
}
