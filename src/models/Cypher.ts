export class Cypher {

  private _id: number;
  public get id(): number {
    return this._id;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }

  private _level: string;
  public get level(): string {
    return this._level;
  }

  private _internal: string;
  public get internal(): string {
    return this._internal;
  }

  private _wearable: string;
  public get wearable(): string {
    return this._wearable;
  }

  private _usable: string;
  public get usable(): string {
    return this._usable;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }

  private _type: number;
  public get type(): number {
    return this._type;
  }

  constructor(id, name, level, internal, usable, wearable, description, type) {
    this._id = id;
    this._name = name;
    this._level = level;
    this._internal = internal;
    this._usable = usable;
    this._wearable = wearable;
    this._description = description;
    this._type = type;
  }

  public typeName(): string {
    return CypherType[this._type];
  }
}

export enum CypherType {
  Occultic = 1,
  Anoetic = 2,
}
