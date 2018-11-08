import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl } from '@angular/forms';
import { IPeople } from '../people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public people: IPeople;
  public ctrl: FormControl = new FormControl;
  //public setValue: string = "setValue";
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getResponse()
      .subscribe(result => {
        this.people = result;
        console.log(this.people);
        this.ctrl.setValue(this.people['phone2Desc']);
      },
      error => console.log('There was an error: '));
  }

}
