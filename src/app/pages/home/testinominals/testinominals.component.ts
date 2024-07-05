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
    trigger('movement', [
      state('left', style({ transform: 'translateX(-5%)', opacity: 1 })),
      state('right', style({ transform: 'translateX(5%)', opacity: 1 })),
      transition('* => left', [
        style({ transform: 'translateX(5%)', opacity: 0 }),
        animate('500ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => right', [
        style({ transform: 'translateX(-5%)', opacity: 0 }),
        animate('500ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class TestinominalsComponent {

  t!: NodeJS.Timeout;
  animationActive: boolean = false;

  forward() {
    console.log('a')
    console.log(this.animationActive)
    if (this.animationActive) {
      console.log('b')
      return
    }

    this.animationActive = true
    clearTimeout(this.t)

    this.movement = ''
    this.id++;

    if (this.id >= this.items.length) {
      this.id = 0
    }

    this.item = this.items[this.id]
    this.movement = 'right'
    this.t = setTimeout(() => {
      this.animationActive = false
      this.movement = ''
      console.log('r')
    }, 500);
  }

  back() {
    if (this.animationActive) {
      return
    }

    this.animationActive = true
    clearTimeout(this.t)

    this.movement = 'left';
    this.t = setTimeout(() => {
      this.animationActive = false
      this.movement = ''
      console.log('r')
    }, 500);
  }

  resetAnimation() {

  }

  id = 0;

  movement: string = '';

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
