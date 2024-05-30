import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss',
})
export class BienvenidaComponent {
  private http = inject(HttpClient);
  data: any;

  getData() {
    return this.http.get('https://api.github.com/users/juanbarraza78');
  }
  ngOnInit(): void {
    this.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
