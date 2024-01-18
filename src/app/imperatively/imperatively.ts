import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-imperatively',
  template: `
    <h2>Imperative Lazy Loading</h2>

    <button (click)="loadUsers()">Load Users</button>
    &nbsp;
    <button (click)="loadUsersWithComments()">Load Users with Comments</button>
    &nbsp;
    <button (click)="loadPostsWithComments()">Load Posts with Comments</button>

    <ng-template #usersSlot></ng-template>
    <ng-template #commentsSlot></ng-template>
    <ng-template #postsSlot></ng-template>
  `,
})
export class Imperatively {
  @ViewChild('usersSlot') usersSlot!: TemplateRef<unknown>;
  @ViewChild('commentsSlot') commentsSlot!: TemplateRef<unknown>;
  @ViewChild('postsSlot') postsSlot!: TemplateRef<unknown>;

  vc = inject(ViewContainerRef);

  loadUsers() {
    import('./users/users.component').then((c) => {
      let cmp = this.vc.createComponent(c.UsersComponent);

      this.usersSlot.createEmbeddedView(cmp);
    });
  }

  loadUsersWithComments() {
    Promise.all([
      import('./users/users.component'),
      import('./comments/comments.component'),
    ]).then(([cuser, cusercomments]) => {
      let usersCmp = this.vc.createComponent(cuser.UsersComponent);
      let commentsCmp = this.vc.createComponent(
        cusercomments.CommentsComponent
      );

      commentsCmp.setInput('comments', ['Hi!', 'Its me!', 'User']);

      this.usersSlot.createEmbeddedView(usersCmp);
      this.commentsSlot.createEmbeddedView(commentsCmp);
    });
  }

  loadPostsWithComments() {
    Promise.all([
      import('./posts/posts.component'),
      import('./comments/comments.component'),
    ]).then(([cuser, cusercomments]) => {
      let postsCmp = this.vc.createComponent(cuser.PostsComponent);
      let commentsCmp = this.vc.createComponent(
        cusercomments.CommentsComponent
      );

      commentsCmp.setInput('comments', ['Hi!', 'Its me!', 'Post']);

      this.postsSlot.createEmbeddedView(postsCmp);
      this.commentsSlot.createEmbeddedView(commentsCmp);
    });
  }
}
