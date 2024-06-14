import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService){
    console.log('c')
  }
  title = 'base';



  sliderWidth:any;
ngOnInit(): void {

  this.apiService.tempfn('2')


  console.log('b')
  this.sliderWidth = {
    '0': 0,
    '10': 5,
    '15': 10.5,
    '25': 20,
    '35': 28.5,
    '70': 35,
    '80': 65,
    '100': 100
  };
}


}
