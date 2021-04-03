import {Component, OnInit} from '@angular/core';
import { ClientServiceService} from 'src/app/client-service.service';


@Component({
  selector: 'app-tbl-datatable',
  templateUrl: './tbl-datatable.component.html',
  styleUrls: ['./tbl-datatable.component.scss']
})
export class TblDatatableComponent implements OnInit {

  ClientList: any = []
  CurrentData = null;
  CurrentIndex = -1;

  ClientIDFilter:string="";
  CompanyNameFilter:string="";
  ClientListWithoutFilter:any=[];


  constructor(private service: ClientServiceService) { }

  ngOnInit() {
    this.refreshList();
  }
  getClient(){
    this.service.getAll()
      .subscribe(
        data => {
          this.ClientList = data;
          this.ClientListWithoutFilter = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.getClient();
    this.CurrentData = null;
    this.CurrentIndex = -1;
  }

  setActiveData(client, index): void {
    this.CurrentData = client;
    this.CurrentIndex = index;
  }
  FilterFn(){
    var ClientIDFilter = this.ClientIDFilter;
    var CompanyNameFilter = this.CompanyNameFilter;

    this.ClientList = this.ClientListWithoutFilter.filter(function (el){
        return el.clientID.toString().toLowerCase().includes(
          ClientIDFilter.toString().trim().toLowerCase()
        )&&
        el.companyName.toString().toLowerCase().includes(
          CompanyNameFilter.toString().trim().toLowerCase()
        )
    });
  }
}
