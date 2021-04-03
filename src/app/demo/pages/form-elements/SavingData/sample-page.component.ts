import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ClientServiceService} from 'src/app/client-service.service';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  client = {
  clientID: " ",
  companyName: " ",
  typeOfBusiness: " ",
  rating: " ",
  companyEstablishDate: " ",
  country: " ",
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
      window.alert('Succesfully Added!!!')
    },
      (err) => {
      console.log(err)
      window.alert('Failed to Add a User....')
      }
    )}

  }
