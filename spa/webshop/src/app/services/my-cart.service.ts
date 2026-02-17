import { computed, Injectable, signal } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class MyCartService {
  private items = signal<Item[]>([]);

  count = computed(() => this.items().length);

  addItem(item: Item) {
    this.items.update((items) => [...items, item]);
  }
}
