import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testinominals',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './testinominals.component.html',
  styleUrl: './testinominals.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in')
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class TestinominalsComponent {
  
  forward() {
    this.id ++;

    if (this.id > this.items.length){
      this.id = 0
    }

    this.item = this.items[this.id]
  }
  back() {
    throw new Error('Method not implemented.');
  }

  id = 0;

  items = [
    {
      name: "Fotoclub Borger-Odoorn",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nisi in est fermentum rhoncus non
                sed
                sem. Aenean scelerisque nisi eget risus tristique, eget lacinia enim vulputate. Suspendisse potenti.
                Nullam
                condimentum quam vel nunc auctor mollis. Pellentesque blandit libero sit amet erat fermentum, vel
                tincidunt
                lorem volutpat. Curabitur tempus vel enim efficitur tristique. Morbi turpis ligula, faucibus in luctus
                ut,
                pretium iaculis arcu. Aliquam erat volutpat. Aenean ut tortor lacinia, ultricies libero blandit,
                scelerisque
                est. Etiam ex sem, interdum nec fermentum et, fringilla euismod velit.

                In varius posuere porta. Phasellus ut facilisis velit. Proin maximus faucibus mi, in placerat leo
                iaculis
                sed. Quisque elit augue, elementum eu sodales nec, auctor ac purus. Nullam pulvinar augue convallis,
                tristique dui a, vulputate arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Suspendisse volutpat tincidunt metus in pellentesque. Morbi pellentesque orci at
                turpis
                porttitor rutrum. Mauris rhoncus felis sed dictum viverra. Maecenas faucibus volutpat bibendum.`
    },
    {
      name: "Fotoclub Borger-Odoorn",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nisi in est fermentum rhoncus non
                sed
                sem. Aenean scelerisque nisi eget risus tristique, eget lacinia enim vulputate. Suspendisse potenti.
                Nullam
                condimentum quam vel nunc auctor mollis. Pellentesque blandit libero sit amet erat fermentum, vel
                tincidunt
                lorem volutpat. Curabitur tempus vel enim efficitur tristique. Morbi turpis ligula, faucibus in luctus
                ut,
                pretium iaculis arcu. Aliquam erat volutpat. Aenean ut tortor lacinia, ultricies libero blandit,
                scelerisque
                est. Etiam ex sem, interdum nec fermentum et, fringilla euismod velit.`
    }
  ]

  item = this.items[this.id];
}
