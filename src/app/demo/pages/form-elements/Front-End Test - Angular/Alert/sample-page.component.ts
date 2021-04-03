import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {SnotifyPosition, SnotifyService, SnotifyToastConfig} from 'ng-snotify';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SamplePageComponent implements OnInit {
  style = 'material';
  success = 'Alert Success';
  warning = 'Alert Warning';
  error = 'Alert Error';
  body = 'this is a test developer text';
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.rightBottom;
  progressBar = true;
  closeClick = true;
  newTop = true;
  filterDuplicates = false;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80;

  constructor(private snotifyService: SnotifyService) { }

  ngOnInit() {
  }

  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
        // @ts-ignore
        filterDuplicates: this.filterDuplicates
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }

  onSuccess() {
    this.snotifyService.success(this.body, this.success, this.getConfig());
  }
  onError() {
    this.snotifyService.error(this.body, this.error, this.getConfig());
  }
  onWarning() {
    this.snotifyService.warning(this.body, this.warning, this.getConfig());
  }
  basicSwal() {
    Swal.fire('', 'Alert!');
  }

}
