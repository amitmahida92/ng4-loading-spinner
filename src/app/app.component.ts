import { Component, OnInit } from '@angular/core';

import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the async loading bar';

  constructor(
    private spinnerService: SpinnerService
  ) {
    
  }

  ngOnInit() {
    
    setTimeout(function() {
      this.spinnerService.show();
    }.bind(this), 1000);

    setTimeout(function() {
      this.spinnerService.hide();
    }.bind(this), 3000);

  }

}
