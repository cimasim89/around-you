export class AreaAggregate {
  constructor(public uuid: string, public name: string, public parentUuid: string, public children: AreaAggregate[]) {}
}
