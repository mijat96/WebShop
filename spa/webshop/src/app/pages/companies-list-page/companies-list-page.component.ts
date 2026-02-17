import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Company } from '../../models/company';
import { AsyncPipe, CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-companies-list-page',
  templateUrl: './companies-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CommonModule, InputTextModule, InputIconModule, IconFieldModule, RouterLink],
})
export class CompaniesListPageComponent implements OnInit {
  private readonly companiesService = inject(CompaniesService);

  companies$!: Observable<Company[]>;
  searchTrigger$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.companies$ = this.searchTrigger$.pipe(
      switchMap((search) => this.companiesService.getCompanies(search)),
    );
  }

  search(searchTerm: string) {
    this.searchTrigger$.next(searchTerm.toLowerCase());
  }
}
