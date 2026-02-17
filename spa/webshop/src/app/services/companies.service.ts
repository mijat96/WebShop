import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private readonly http = inject(HttpClient);

  private dummyCompanies: Company[] = [
    {
      id: '1',
      name: 'Tech Solutions Ltd.',
      externalId: 'EXT001',
      surname: 'Smith',
      address: '123 Tech Park',
      phone: '+1-555-0101',
      email: 'contact@techsolutions.com',
      city: 'San Francisco',
      cityCode: 94105,
      street: 'Market Street',
      deliveryType: {
        delivery: 'Standard',
        pickUp: 'Available',
      },
    },
    {
      id: '2',
      name: 'Green Grocers Inc.',
      externalId: 'EXT002',
      surname: 'Doe',
      address: '456 Green Avenue',
      phone: '+1-555-0202',
      email: 'info@greengrocers.com',
      city: 'Portland',
      cityCode: 97204,
      street: 'Oak Street',
      deliveryType: {
        delivery: 'Express',
        pickUp: 'Curbside',
      },
    },
    {
      id: '3',
      name: 'Blue Sky Logistics',
      externalId: 'EXT003',
      surname: 'Johnson',
      address: '789 Blue Blvd',
      phone: '+1-555-0303',
      email: 'support@bluesky.com',
      city: 'Seattle',
      cityCode: 98101,
      street: 'Pine Street',
      deliveryType: {
        delivery: 'Overnight',
        pickUp: 'Warehouse',
      },
    },
    {
      id: '4',
      name: 'Quantum Innovations',
      externalId: 'EXT004',
      surname: 'Williams',
      address: '101 Quantum Way',
      phone: '+1-555-0404',
      email: 'hello@quantuminnovations.com',
      city: 'Austin',
      cityCode: 73301,
      street: 'Tech Ridge',
      deliveryType: {
        delivery: 'Standard',
        pickUp: 'Available',
      },
    },
    {
      id: '5',
      name: 'Solaris Energy',
      externalId: 'EXT005',
      surname: 'Brown',
      address: '202 Sun Lane',
      phone: '+1-555-0505',
      email: 'info@solarisenergy.com',
      city: 'Phoenix',
      cityCode: 85001,
      street: 'Sunny Blvd',
      deliveryType: {
        delivery: 'Express',
        pickUp: 'Curbside',
      },
    },
    {
      id: '6',
      name: 'Oceanic Shipping',
      externalId: 'EXT006',
      surname: 'Davis',
      address: '303 Harbor Drive',
      phone: '+1-555-0606',
      email: 'contact@oceanicshipping.com',
      city: 'Miami',
      cityCode: 33101,
      street: 'Ocean View',
      deliveryType: {
        delivery: 'Overnight',
        pickUp: 'Port',
      },
    },
    {
      id: '7',
      name: 'Mountain Gear Co.',
      externalId: 'EXT007',
      surname: 'Miller',
      address: '404 Peak Road',
      phone: '+1-555-0707',
      email: 'support@mountaingear.com',
      city: 'Denver',
      cityCode: 80201,
      street: 'High Altitude Way',
      deliveryType: {
        delivery: 'Standard',
        pickUp: 'Store',
      },
    },
    {
      id: '8',
      name: 'Urban Outfitters Ltd.',
      externalId: 'EXT008',
      surname: 'Wilson',
      address: '505 City Center',
      phone: '+1-555-0808',
      email: 'sales@urbanoutfitters.com',
      city: 'New York',
      cityCode: 10001,
      street: 'Broadway',
      deliveryType: {
        delivery: 'Express',
        pickUp: 'In-Store',
      },
    },
  ];

  getCompanies(search: string): Observable<Company[]> {
    const filter = this.dummyCompanies.filter((x) => x.name.toLowerCase().includes(search));
    return of(filter);
  }

  getCompany(id: string): Observable<Company | undefined> {
    const company = this.dummyCompanies.find((c) => c.id === id);
    return of(company);
  }
}
