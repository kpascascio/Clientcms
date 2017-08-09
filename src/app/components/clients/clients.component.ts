import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;
  num = 4;

  constructor(public clientService: ClientService) {

   }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(typeof(clients[0].balance));
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    let total = 0;

    this.clients.forEach((value: Client, key) => {
      console.log(typeof(value.balance));

      total += Number(value.balance);

      this.totalOwed = total;
    });
    console.log(this.totalOwed);
  }
}
