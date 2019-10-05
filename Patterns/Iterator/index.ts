// const graph = {
//     'a': ['b', 'c', 'd', 'e'],
//     'b': ['a', 'e'],
//     'c': ['a', 'd'],
//     'd': ['a', 'c'],
//     'e': ['a', 'b']
// }

interface IIterator {
    /**
     * Получить следующую вершину
     */
    next(): any;



}

interface IIterableCollection {
    createIterator(type: string): IIterator;

    getItems();


}

export class WidthIterator implements IIterator {
    private _collection: Graph;

    private _currentNode: string;

    /**
     * Очередь необработанных вершин
     */
    protected rawNodes: string[] = [];

    /**
     * Список обработанных вершин
     */
    protected processedNodes: string[] = [];

    constructor(collection: any, startNode: string) {
        this.collection = collection;
        this.currentNode = startNode;
        this.next()
    }

    public next() {
        if (this.processedNodes.indexOf(this.currentNode) < 0) {
            const neighbours = this.collection.getNeignbours(this.currentNode);
            this.addToRawNodes(neighbours);
            this.processedNodes.push(this.currentNode);
            this.currentNode = this.rawNodes[0];
            this.rawNodes.shift()
        } else {
            this.currentNode = this.rawNodes[0];
            this.rawNodes.shift()
        }
        //console.log(this.rawNodes, this.processedNodes);
    }

    get currentNode(): string {
        return this._currentNode;
    }

    set currentNode(node: string) {
        this._currentNode = node;
    }

    get collection(): Graph {
        return this._collection;
    }

    set collection(collection: Graph) {
        this._collection = collection;
    }

    get _rawNodes(): string[] {
        return this.rawNodes
    }

    get _processedNodes(): string[] {
        return this.processedNodes
    }

    addToRawNodes(nodes: string[]) {
        if (nodes) {
            for (let node of nodes) {
                if (node && this.processedNodes.indexOf(node) === -1) {
                    this.rawNodes.push(node)
                }
            }
        }
    }
}

export class DepthIterator implements IIterator {

    private _collection: Graph;

    private _currentNode: string;

    /**
     * Очередь необработанных вершин
     */
    protected rawNodes: string[] = [];

    /**
     * Список обработанных вершин
     */
    protected processedNodes: string[] = [];

    constructor(collection: any, startNode: string) {
        this.collection = collection;
        this.currentNode = startNode;
        this.next()
    }

    public next() {
        //console.log(this.currentNode)
        if (this.processedNodes.indexOf(this.currentNode) < 0) {
            const neighbours = this.collection.getNeignbours(this.currentNode);
            this.addToRawNodes(neighbours);
            this.processedNodes.push(this.currentNode)
            this.currentNode = this.rawNodes[this.rawNodes.length - 1]
            this.rawNodes.pop()
        } else {
            this.currentNode = this.rawNodes[this.rawNodes.length - 1];
            this.rawNodes.pop()
        }
        //console.log(this.rawNodes, this.processedNodes)
    }

    get currentNode(): string {
        return this._currentNode;
    }

    set currentNode(node: string) {
        this._currentNode = node;
    }

    get collection(): Graph {
        return this._collection;
    }

    set collection(collection: Graph) {
        this._collection = collection;
    }

    get _rawNodes(): string[] {
        return this.rawNodes
    }

    get _processedNodes(): string[] {
        return this.processedNodes
    }

    addToRawNodes(nodes: string[]) {
        if (nodes) {
            for (let node of nodes) {
                if (node && this.processedNodes.indexOf(node) === -1) {
                    this.rawNodes.push(node)
                }
            }
        }
    }
}

export class Graph implements IIterableCollection {

    private graph = {
        'a': ['b', 'c', 'd', 'e'],
        'b': ['a', 'e'],
        'c': ['a', 'd'],
        'd': ['a', 'c'],
        'e': ['a', 'b']
    }
    
    constructor(){}
    
    createIterator(type: string) {
        if (type === 'width') {
            return new WidthIterator(this, 'e');
        } else {
            return new DepthIterator(this, 'b');
        }
    }

    getItems() {
        return this.graph
    }

    getNeignbours(node: string): string[] {
        return this.getItems()[`${node}`]
    }

}

const graph = new Graph();

// Итератор по обходу графа в ширину
const widthIterator = graph.createIterator('width');
const depthIterator = graph.createIterator('depth');

while (widthIterator._rawNodes.length !== 0) {
    widthIterator.next()
}

console.log("Widths search: ", widthIterator._processedNodes)

console.log('\n');
while (depthIterator._rawNodes.length !== 0) {
    depthIterator.next()
}

console.log("Depth search: ", depthIterator._processedNodes)