import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category','actions'];
  constructor(
    private CoursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog){
    this.courses$ = this.CoursesService.list()
    .pipe(catchError(error => {
      this.onError('Erro ao carregar informações dos cursos');
      return of([]);
    }));
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
}
