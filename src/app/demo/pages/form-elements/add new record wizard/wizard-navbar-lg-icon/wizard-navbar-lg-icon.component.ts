import { Component, OnInit } from '@angular/core';
import { ClientServiceService} from 'src/app/client-service.service';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-wizard-navbar-lg-icon',
  templateUrl: './wizard-navbar-lg-icon.component.html',
  styleUrls: ['./wizard-navbar-lg-icon.component.scss']
})
export class WizardNavbarLgIconComponent implements OnInit {

  ClientList: any = []
  CurrentData = null;
  CurrentIndex = -1;


 client = {
    clientID: " ",
    companyName: " ",
    typeOfBusiness: " ",
    rating: " ",
    companyEstablishDate: " ",
    country: " ",
    }

  person = {
    firstName: "",
    lastName: "",
    gender: "",
    age: "",

  }
  constructor(private Service: ClientServiceService) { }

  ngOnInit() {
  }
  add() {
    var val = [{      
      companyName:this.client.companyName,
      typeOfBusiness:this.client.typeOfBusiness,
      rating:this.client.rating,
      companyEstablishDate:this.client.companyEstablishDate,
      country:this.client.country
    }]

    this.Service.create(val).subscribe( (res) => {
      console.log(res);
      Swal.fire('Good job!', 'You clicked the button!', 'success');
      this.refreshList();
    },
      (err) => {
      console.log(err)
      Swal.fire('Good job!', 'You clicked the button!', 'error');
      }
    )

  }
  getClient(){
    this.Service.getAll()
      .subscribe(
        data => {
          this.ClientList = data;
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

}