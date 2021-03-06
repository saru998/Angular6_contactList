import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

export interface userSchemas {
  FirstName: string,
  LastName: string,
  Email: string,
  Phone: string,
  Status: string
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  name: string
  user: userSchemas

  private subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, data: DataService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.name = param['name']
        this.user = data.getContactDetails(this.name)

      }
    );
  }

  ngOnInit() {

  }

}
