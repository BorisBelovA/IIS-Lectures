import { expect } from 'chai';
import 'mocha';
import { Graph, WidthIterator, DepthIterator } from '../index';

describe('Test', () => {
    it('Graph should exist', () => {
        const graph = new Graph();
        expect(graph).to.exist;
    })

    it("WidthIterator should return [ 'b', 'a', 'e', 'c', 'd' ]", () => {
        const graph = new Graph();
        const widthIterator = graph.createIterator('width');

        while (widthIterator._rawNodes.length !== 0) {
            widthIterator.next()
        }

        expect(widthIterator._processedNodes).to.deep.equal([ 'b', 'a', 'e', 'c', 'd' ]);
    })

    it("DepthIterator should return: [ 'b', 'e', 'a', 'd', 'c' ]", () => {
        const graph = new Graph();
        const depthIterator = graph.createIterator('depth');

        while (depthIterator._rawNodes.length !== 0) {
            depthIterator.next()
        }

        expect(depthIterator._processedNodes).to.deep.equal([ 'b', 'e', 'a', 'd', 'c' ]);
    })
})