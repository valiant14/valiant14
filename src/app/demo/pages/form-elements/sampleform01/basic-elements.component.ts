import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ClientServiceService} from 'src/app/client-service.service';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';
import {IOption} from 'ng-select';




@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

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

    countries: Array<IOption> = this.selectOptionService.getCountries();
    selectedCountry = 'PH';
    selectedCountries: Array<string> = ['PH', 'BE', 'LU', 'NL'];

  constructor(private service: ClientServiceService, public selectOptionService: SelectOptionService) { }

  ngOnInit() {
    this.getClient();
  }

  save() {
    var val = [{      
      companyName:this.client.companyName,
      typeOfBusiness:this.client.typeOfBusiness,
      rating:this.client.rating,
      companyEstablishDate:this.client.companyEstablishDate,
      country:this.client.country
    }]

    this.service.create(val).subscribe( (res) => {
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
    this.service.getAll()
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

  setActiveData(client, index): void {
    this.CurrentData = client;
    this.CurrentIndex = index;
  }
}

