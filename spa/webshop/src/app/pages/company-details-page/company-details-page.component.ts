import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../services/companies.service';
import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';
import { Company } from '../../models/company';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-company-details-page',
  templateUrl: './company-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    CommonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
  ],
})
export class CompanyDetailsPageComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly companiesService = inject(CompaniesService);
  company$!: Observable<Company>;
  searchTrigger$ = new BehaviorSubject<string>('');

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.company$ = this.companiesService.getCompany(id);
  }

  search(searchTerm: string) {
    this.searchTrigger$.next(searchTerm.toLowerCase());
  }
}
