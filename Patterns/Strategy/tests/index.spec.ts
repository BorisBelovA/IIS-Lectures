import { expect } from 'chai';
import 'mocha';
import { DalilyGreeter } from '../index';

describe('Test', () => {
    it('should return BigMack', () => {
        const dGreeter = new DalilyGreeter('Hans');
        expect(dGreeter).to.exist;
    })
})