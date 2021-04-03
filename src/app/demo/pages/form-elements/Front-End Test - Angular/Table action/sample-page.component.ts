import { Component, OnInit } from '@angular/core';
import { ClientServiceService} from 'src/app/client-service.service';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  constructor(private service: ClientServiceService) {
  }

  p: number = 1;
  ClientList: any = [];
  filterTerm: any;

  ngOnInit(): void {  
    this.getdata();

  }

  getdata() {  
    this.service.tableData().subscribe((data: any[]) => {  
      this.ClientList = data;
    })  
  }  

}