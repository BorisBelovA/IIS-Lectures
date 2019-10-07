import { expect } from 'chai';
import 'mocha';
import { CentralBank, SberBank, VTB } from './index';

describe('Test', () => {
    it('Начальный курс ЦБ: USD: 67.58; EUR: 74.80', () => {
        const cb = new CentralBank();
        expect(cb).to.exist;
        expect(cb.state).to.deep.equal({
            usd: 67.58,
            eur: 74.80
        })
    })

    it('К ЦБ никто не подключен', () => {
        const cb = new CentralBank();
        expect(cb.banks).to.deep.equal([])
    })

    it('К ЦБ подключились Сбер и ВТБ', () => {
        const cb = new CentralBank();
        const vtb = new VTB();
        const sber = new SberBank();
        cb.addBank(vtb);
        cb.addBank(sber);
        expect(cb.banks.length).to.equal(2)
    })

    it('После обновления курса ЦБ, банки должны обновить свой курс согласно ЦБ', () => {
        const cb = new CentralBank();
        const vtb = new VTB();
        cb.addBank(vtb);
        expect(vtb.state).to.deep.equal({
            usd: 67.58,
            eur: 74.80
        })
        cb.state = {
            usd: 70.50,
            eur: 91.35
        };
        cb.notify();
        expect(vtb.state).to.deep.equal({
            usd: 70.50,
            eur: 91.35
        });
    })
})