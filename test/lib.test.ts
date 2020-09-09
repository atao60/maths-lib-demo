import { expect } from 'chai';
import { describe, it } from 'mocha';

import { add } from '../src/add';

describe('Math function test, add', () => {
    it('(1 + 2) should return 3', () => {
        const result = add( 1, 2);
        expect(result).to.equal(3);
    });
});
