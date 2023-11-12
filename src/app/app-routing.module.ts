import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/bookshelf", pathMatch: "full" },
  { path: "bookshelf", component: BookshelfComponent,
children : [{ path: "", component: BookshelfHomeComponent }]
  },
  { path: "library", component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
