import { Entity } from '@garrick0/c3-shared';
import { Source } from './Source.js';

export class Finding extends Entity<string> {
  constructor(
    id: string,
    public queryId: string,
    public answer: string,
    public sources: Source[],
    public confidence: number
  ) {
    super(id);
  }
}
