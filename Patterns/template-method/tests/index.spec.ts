import { expect } from 'chai';
import 'mocha';
import { BurgerBuilder, BigMackBuilder, ChickenBurgerBuilder } from '../index';

describe('Test', () => {
    it('should return BigMack', () => {
        const bmMaker = new BigMackBuilder('Биг Мак');
        expect(bmMaker).to.exist;
    })
})