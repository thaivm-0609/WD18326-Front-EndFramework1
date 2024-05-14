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
  listStudents = [
    {
      id: 1,
      name: 'thaivm2',
      email: 'thaivm2@fpt.edu.vn',
      gender: 'male',
    },
    {
      id: 2,
      name: 'thaivm3',
      email: 'thaivm3@fpt.edu.vn',
      gender: 'male',
    },
    {
      id: 3,
      name: 'thaivm4',
      email: 'thaivm4@fpt.edu.vn',
      gender: 'female',
    },
    { 
      id:4,
      name: 'thaivm4',
      email: 'thaivm4@fpt.edu.vn',
      gender: 'female',
    }
  ]
}
