import { List, Seq } from 'immutable';

import { Organ, Stop, StopsGroup } from './Organ';

export class MartinuHallOrgan implements Organ {
  count = 1000;
  size = 64;

  // tslint:disable:quotemark
  stops: List<Stop> = Seq.of(
    "Burdon 16'",
    "Principál 8'",
    "Flétna dřevěná 8'",
    "Gamba špičatá 8'",
    "Oktáva 4'",
    "Roh kamzičí 4'",
    "Kvinta 2²/₃'",
    "Superoktáva 2'",
    "Mixtura 5 nás. 1¹/₃'",
    "Trompeta 8'",
    "II/I",
    "III/I",
    "Principálbas 16'",
    "Burdonbas 16'",
    "Oktáva 8'",
    "Flétna trubicová 8'",
    "Chorálbas 4'",
    "Kryt 4'",
    "Mixtura 4 nás. 2²/₃'",
    "I/P",
    "Pozoun tichý 16'",
    "Trubka basová 8'",
    "Šalmaj 4'",
    "II/P",
    "III/P",
    "Principál dřevěný 8'",
    "Kopula 8'",
    "Salicionál 8'",
    "Oktáva 4'",
    "Flétna zobcová 4'",
    "Nasard 2²/₃'",
    "Flétna příčná 2'",
    "Tercie 1³/₅'",
    "Mixtura 4 nás. 2'",
    "Fagot 16'",
    "Hoboj 8'",
    "Tromp. harm. 8'",
    "Kryt 8'",
    "Kvintadena 8'",
    "Principál 4'",
    "Flétna vřetenová 4'",
    "Oktáva 2'",
    "Kvinta 1¹/₃'",
    "Flétna syčivá 1'",
    "Cimbál 3 nás. ²/₃'",
    "Roh křivý 8'",
    "III/II",
    "Tremolo II",
    "Tremolo III",
    "Vypínač jazyků")
    // tslint:enable:quotemark
    .map((name: string, index: number) => new Stop(index, name))
    .toList();

  groups: List<StopsGroup> = Seq.of<[string, number, number]>(
    ['I. Manuál', 0, 12],
    ['Pedál', 12, 25],
    ['III. Manuál', 25, 37],
    ['II. Manuál', 37, 50])
    .map(([name, from, to]: [string, number, number]) =>
      new StopsGroup(this.stops.slice(from, to).toList(), name),
    )
    .toList();
}
