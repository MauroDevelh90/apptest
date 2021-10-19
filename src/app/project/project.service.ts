import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/log.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor(private httpClient: HttpClient,  private logService: LogService) {}

getAll(): Observable<Project[]> {
  return this.httpClient.get<Project[]>('http://localhost:3000/projects')
  .pipe(
    tap((data) => this.logService.log(`getAll Eseguito ${data}`))
  );
}
 

add(project: Project): Observable<Project> {
  const projectToAdd = {
    ...project,
    code: Math.random().toString(36).replace('0.', '').substring(2, 9),
    done: false,
    tasks: []
  };
  return this.httpClient.post<Project>('http://localhost:3000/projects', projectToAdd).pipe(
  tap((data) => this.logService.log(`add Eseguito ${data}`))
  );
}

get(id: number): Observable<Project> {
  return this.httpClient.get<Project>(`http://localhost:3000/projects/${id}`).pipe(
    tap((data) => this.logService.log(`get Eseguito ${data}`))
    );
}

}