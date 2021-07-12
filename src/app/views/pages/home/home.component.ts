import {Component, OnInit} from '@angular/core';
import {ProfileApi} from "../../../core/_api/profile-api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile:any;

  constructor(
    private  _profileApi: ProfileApi
  ) {
  }

  ngOnInit() {
    this.getProfileInfo();
  }

  getProfileInfo(){
    this._profileApi.get().subscribe(resp=>{
      console.log(resp);
      this.profile = resp;
    })
  }
}
