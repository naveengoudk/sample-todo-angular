import { Component } from '@angular/core';
import { room } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  role  = "User";

  hotelName ="XYZ";

  NoOfRooms = 10;

  hideRooms = false;
  rooms : room[] = [
    {
      roomNo: 1,
      roomType : "Delux",
      cost : 100
    },
    {
      roomNo:2,
      roomType : "Normal",
      cost : 50
    },
    {
      roomNo: 1,
      roomType : "Delux",
      cost : 100
    },
    {
      roomNo:2,
      roomType : "Normal",
      cost : 50
    },
    {
      roomNo: 1,
      roomType : "Delux",
      cost : 100
    },
    {
      roomNo:2,
      roomType : "Normal",
      cost : 50
    },
    {
      roomNo: 1,
      roomType : "Delux",
      cost : 100
    },
    {
      roomNo:2,
      roomType : "Normal",
      cost : 50
    }
  ]
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
