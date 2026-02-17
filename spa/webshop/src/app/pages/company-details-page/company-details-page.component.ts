import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details-page',
  templateUrl: './company-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
