import { Component, OnInit, ViewChild} from '@angular/core';
import { ClientServiceService} from 'src/app/client-service.service';


@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent implements OnInit {


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

