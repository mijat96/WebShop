import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../services/companies.service';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Company } from '../../models/company';
import { MyCartService } from '../../services/my-cart.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { Item } from '../../models/item';

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
  private readonly myCartService = inject(MyCartService);
  company$!: Observable<Company>;
  searchTrigger$ = new BehaviorSubject<string>('');

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    const fromApi$ = this.companiesService.getCompany(id);

    this.company$ = combineLatest([fromApi$, this.searchTrigger$]).pipe(
      map(([company, searchTerm]) => ({
        ...company,
        items: !searchTerm
          ? company.items
          : company.items.filter((item) => item.name.toLowerCase().includes(searchTerm)),
      })),
    );
  }

  search(searchTerm: string) {
    this.searchTrigger$.next(searchTerm.toLowerCase());
  }

  addItemToCart(item: Item) {
    this.myCartService.addItem(item);
  }
}
