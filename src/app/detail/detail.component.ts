import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id = 0;
  constructor(private route:ActivatedRoute ) {
    console.log(this.route.snapshot.params['user']);
  }
}
