export abstract class BaseDto {
  constructor(
    public readonly id: number | string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null
  ) {}

  public isDeleted(): boolean {
    return this.deletedAt != null;
  }
}
