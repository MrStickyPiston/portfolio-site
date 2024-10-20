import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { bounceInOnEnterAnimation, bounceOnEnterAnimation, collapseLeftOnLeaveAnimation, collapseOnLeaveAnimation, expandOnEnterAnimation, expandRightOnEnterAnimation, fadeInLeftAnimation, fadeInLeftOnEnterAnimation, flipInYOnEnterAnimation, flipOnEnterAnimation, flipOutYOnLeaveAnimation, heartBeatAnimation, heartBeatOnEnterAnimation, jelloOnEnterAnimation, lightSpeedInAnimation, lightSpeedInOnEnterAnimation, pulseOnEnterAnimation, swingOnEnterAnimation, wobbleOnEnterAnimation, zoomInLeftAnimation, zoomInLeftOnEnterAnimation, zoomInOnEnterAnimation, zoomOutOnLeaveAnimation, zoomOutRightOnLeaveAnimation } from 'angular-animations';

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
    pulseOnEnterAnimation({duration: 500}),
  ]
})
export class TestinominalsComponent {

  forward() {
    this.selected_id += 1

    if (this.selected_id >= this.items.length) {
      this.selected_id = 0;
    }
  }

  back() {
    this.selected_id -= 1

    if (this.selected_id < 0) {
      this.selected_id = this.items.length - 1;
    }
  }

  selected_id = 0;

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
                est. Etiam ex sem, interdum nec fermentum et, fringilla euismod velit.

                In varius posuere porta. Phasellus ut facilisis velit. Proin maximus faucibus mi, in placerat leo
                iaculis
                sed. Quisque elit augue, elementum eu sodales nec, auctor ac purus. Nullam pulvinar augue convallis,
                tristique dui a, vulputate arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Suspendisse volutpat tincidunt metus in pellentesque. Morbi pellentesque orci at
                turpis
                porttitor rutrum. Mauris rhoncus felis sed dictum viverra. Maecenas faucibus volutpat bibendum.`
    },
  ]

  // list of all testinominal ids from items
  ids = this.items.map((item, index) => index);
}
