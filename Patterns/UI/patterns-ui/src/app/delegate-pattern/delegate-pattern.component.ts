import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UrgencyEnum, InternetShop, IOrder } from '../../../patterns/Chain and delegate';

@Component({
  selector: 'app-delegate-pattern',
  templateUrl: './delegate-pattern.component.html',
  styleUrls: ['./delegate-pattern.component.scss']
})
export class DelegatePatternComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;


  public goods = [
    {name: 'Iphone', cost: 500},
    {name: 'MacBook', cost: 1200},
    {name: 'Ipad', cost: 700}
  ];

  public selectedGood: any = null;

  public deliveryUrgency: UrgencyEnum;

  public deliveryUrgencies = [
    {
      name: 'Срочная',
      value: UrgencyEnum.QUICK
    },
    {
      name: 'Средняя',
      value: UrgencyEnum.MEDIUM
    },
    {
      name: 'Низкая',
      value: UrgencyEnum.LOW
    }
  ];

  public shop = new InternetShop();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      selectedGood: [{name: '', cost: 0}, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      urgency: ['', Validators.required]
    });
  }

  public calculateTotal() {
    const order: IOrder = {
      goods: this.firstFormGroup.get('selectedGood').value.name,
      cost: this.firstFormGroup.get('selectedGood').value.cost,
      deliveryOptions: {
          departure: this.secondFormGroup.get('departure').value,
          destination: this.secondFormGroup.get('destination').value,
          urgency: this.secondFormGroup.get('urgency').value,
          deliveryCost: 0,
      }
    }
    this.shop.order = order;
    this.shop.calculateDelivery();
  }

}
