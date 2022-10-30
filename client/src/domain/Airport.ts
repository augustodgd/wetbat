export default class Airport {
  constructor(
    public readonly id: string,
    public readonly code: string,
    public readonly name: string,
  ) {}

  toString() {
    return `${this.code} - ${this.name}`;
  }
}
export interface RawAirport {
  id: string;
  code: string;
  name: string;
}

export const parseAirport = (raw: RawAirport): Airport => {
  return new Airport(raw.id, raw.code, raw.name);
};
