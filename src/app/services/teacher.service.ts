import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../models/teacher';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private URL = 'https://621577d3076a.ngrok-free.app/api/v1/teachers';

  private headers = new HttpHeaders({
    'ngrok-skip-browser-warning': 'true'
  });

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Teacher[]>(this.URL, { headers: this.headers });
  }

  getById(id: number) {
    return this.http.get<Teacher>(`${this.URL}/${id}`, { headers: this.headers });
  }

  addTeacher(data: Teacher) {
    return this.http.post<Teacher>(this.URL, data, { headers: this.headers });
  }

  updateTeacher(data: Teacher, id: number) {
    return this.http.put<Teacher>(`${this.URL}/${id}`, data, { headers: this.headers });
  }

  deleteTeacher(id: number) {
    return this.http.delete<void>(`${this.URL}/${id}`, { headers: this.headers });
  }
}
