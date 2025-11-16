import { Entity } from '@garrick0/c3-shared';
export declare class Query extends Entity<string> {
    question: string;
    context: Record<string, any>;
    createdAt: Date;
    constructor(id: string, question: string, context: Record<string, any>, createdAt?: Date);
}
//# sourceMappingURL=Query.d.ts.map