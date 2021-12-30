import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products!: any [];

  constructor(private api:APIService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getJson().subscribe(api => {
      this.products = api;
    });
  }
}
