import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IPeople } from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public people: IPeople;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getResponse()
      .subscribe(result => this.people = result,
        error => console.log('There was an error: '));
  }

}
