import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  // apiUrl = 'http://localhost:3000/projects';
  project: any;
  id: number = 0;

  constructor(
    private route:ActivatedRoute, 
    // private http:HttpClient, 
    private service:ProjectService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['project'];
    // this.http.get(this.apiUrl + '/' + this.id).subscribe(res => {
    //   this.project = res;
    // })
    this.service.getDetail(this.id).subscribe( res => {
      this.project = res;
    })
  }

  onEdit(data: any): void {
    // this.http.put(this.apiUrl + '/' + this.id, data).subscribe( res => {
    //   alert('Cập nhật thành công');
    //   this.router.navigate(['/list']);
    // })
    this.service.edit(this.id,data).subscribe(res => {
      alert('Cập nhật thành công');
      this.router.navigate(['/list']);
    })
  }
}
