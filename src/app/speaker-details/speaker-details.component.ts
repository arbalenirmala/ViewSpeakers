import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css'],
})
export class SpeakerDetailsComponent implements OnInit {
  public spData: any;
  constructor(private sharedService: SharedService, private _router: Router) {}

  ngOnInit(): void {
    this.spData = this.sharedService.spObject;
  }

  backToPage() {
    this._router.navigate(['../speakerInfo']);
  }
}
