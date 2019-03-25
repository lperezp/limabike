import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CicloviaInterface } from 'src/app/models/ciclovia-interface';

@Component({
  selector: 'app-ciclovia',
  templateUrl: './ciclovia.component.html',
  styleUrls: ['./ciclovia.component.scss']
})
export class CicloviaComponent implements OnInit {
  ciclovias : CicloviaInterface[] = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getAllCiclovias();
  }


  getAllCiclovias(){
    this.apiService.getAllCiclovias().subscribe(listaCiclovia =>{
      this.ciclovias = listaCiclovia;
      console.log("Lista: ", this.ciclovias)
    },err =>{
      console.log("Error!: ",err)
    })
  }
}
