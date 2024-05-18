import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  listProjects: any;
  constructor(private thaivm2:HttpClient) {}

  ngOnInit(): void {
    let apiUrl = 'http://localhost:3000/projects';

    //cú pháp gửi http request
    //this.HttpClient.method(apiUrl).subscribe( response => {})
    this.thaivm2.get(apiUrl).subscribe(response => {
      this.listProjects = response;
    })
  }
}
