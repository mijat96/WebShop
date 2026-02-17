import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-list-page',
  templateUrl: './companies-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
