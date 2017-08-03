import { Component, OnInit } from '@angular/core';
import { Client} from '../../models/Client';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    balance: 0
  };
  disableBalanceOnAdd: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
