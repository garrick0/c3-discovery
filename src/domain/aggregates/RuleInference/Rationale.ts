import { Entity } from '@garrick0/c3-shared';

export class Rationale extends Entity<string> {
  constructor(
    id: string,
    public reasoning: string,
    public supportingEvidence: string[],
    public confidence: number
  ) {
    super(id);
  }
}
