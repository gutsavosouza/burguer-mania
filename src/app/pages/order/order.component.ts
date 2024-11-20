import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import Hamburger from '../../interfaces/hamburger';
import { HamburgerService } from '../../services/hamburger.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ButtonComponent, CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  hamburgers: Hamburger[] = [];
  hamburgerService : HamburgerService = inject(HamburgerService);
  hamburgerQuantity: number  = 1;

  async ngOnInit(): Promise<void> {
    this.hamburgers = await this.hamburgerService.getAllHamburgers();
  }

  addHamburger() {
    this.hamburgerQuantity++;
  }

  removeHamburger() {
    if(this.hamburgerQuantity > 1) this.hamburgerQuantity--;
  }

  submitOrder(form: NgForm) {
    if (form.valid) {
      const order: { products: { id: string; quantity: number }[]; observations: string } = {
        products: [],
        observations: form.value.observations
      };

      for (let i = 0; i < this.hamburgerQuantity; i++) {
        const productId = form.value[`product_name_${i}`];
        const quantity = form.value[`quantity_${i}`];

        if (productId && quantity) {
          order.products.push({ id: productId, quantity: Number(quantity) });
        }
      }

      console.log(order);
    } else {
      console.log('invalid form')
    }
  }

}
