import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MyCartService } from '../../services/my-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly myCartService = inject(MyCartService);
  counter = this.myCartService.count;
}
