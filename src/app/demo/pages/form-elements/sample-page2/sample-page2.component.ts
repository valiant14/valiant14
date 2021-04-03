import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ClientServiceService} from 'src/app/client-service.service';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';
import {IOption} from 'ng-select';
import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

const now = new Date();

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-sample-page2',
  templateUrl: './sample-page2.component.html',
  styleUrls: ['./sample-page2.component.scss']
})
export class SamplePage2Component implements OnInit {

  ClientList: any[];
  p: number = 1;
  filterTerm: any;

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

    public model: any;
    modelCustomDay: any;
  
    displayMonths = 3;
    navigation = 'select';
    showWeekNumbers = false;
  
    hoveredDate: NgbDateStruct;
    fromDate: NgbDateStruct;
    toDate: NgbDateStruct;
  
    disabled = true;
  
    @Input() testRangeDate: Date;
  
    modelPopup: NgbDateStruct;
    public date: {year: number, month: number};
  
    isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    }
  
    isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
    }

  constructor(private service: ClientServiceService, public selectOptionService: SelectOptionService, public parserFormatter: NgbDateParserFormatter, public calendar: NgbCalendar) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    const windowWidth = window.innerWidth;
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.displayMonths = 2;
      this.navigation = 'select';
    } else if (windowWidth < 768) {
      this.displayMonths = 1;
      this.navigation = 'select';
    } else {
      this.displayMonths = 3;
      this.navigation = 'none';
    }
  }

  ngOnInit() {
    this.getdata();
  }
  

  getdata() {  
    this.service.tableData().subscribe((data: any[]) => {  
      this.ClientList = data;
    })  
  }  

  add() {
    var val = [{      
      companyName:this.client.companyName,
      typeOfBusiness:this.client.typeOfBusiness,
      rating:this.client.rating,
      companyEstablishDate:this.client.companyEstablishDate,
      country:this.client.country
    }]

    this.service.create(val).subscribe( (res) => {
      console.log(res);
      window.alert('Succesfully Added!!!')
    },
      (err) => {
      console.log(err)
      window.alert('Failed to Add a User....')
      }
    )}

    selectToday() {
      this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }
  
    onDateChange(date: NgbDateStruct) {
      if (!this.fromDate && !this.toDate) {
        this.fromDate = date;
      } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
        this.toDate = date;
      } else {
        this.toDate = null;
        this.fromDate = date;
      }
    }
}
