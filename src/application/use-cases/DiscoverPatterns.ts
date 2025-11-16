import { Pattern } from '../../domain/aggregates/PatternAnalysis/Pattern.js';
import { PatternDetectionService } from '../../domain/services/PatternDetectionService.js';
import { PropertyGraph } from '@garrick0/c3-parsing';
import { Logger } from '@garrick0/c3-shared';

export class DiscoverPatternsUseCase {
  constructor(
    private patternDetection: PatternDetectionService,
    private logger: Logger
  ) {}

  async execute(graph: PropertyGraph): Promise<Pattern[]> {
    this.logger.info('Discovering patterns');
    return this.patternDetection.detectPatterns(graph);
  }
}
