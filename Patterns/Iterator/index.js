"use strict";
// const graph = {
//     'a': ['b', 'c', 'd', 'e'],
//     'b': ['a', 'e'],
//     'c': ['a', 'd'],
//     'd': ['a', 'c'],
//     'e': ['a', 'b']
// }
Object.defineProperty(exports, "__esModule", { value: true });
var WidthIterator = /** @class */ (function () {
    function WidthIterator(collection, startNode) {
        /**
         * Очередь необработанных вершин
         */
        this.rawNodes = [];
        /**
         * Список обработанных вершин
         */
        this.processedNodes = [];
        this.collection = collection;
        this.currentNode = startNode;
        this.next();
    }
    WidthIterator.prototype.next = function () {
        if (this.processedNodes.indexOf(this.currentNode) < 0) {
            var neighbours = this.collection.getNeignbours(this.currentNode);
            this.addToRawNodes(neighbours);
            this.processedNodes.push(this.currentNode);
            this.currentNode = this.rawNodes[0];
            this.rawNodes.shift();
        }
        else {
            this.currentNode = this.rawNodes[0];
            this.rawNodes.shift();
        }
        //console.log(this.rawNodes, this.processedNodes);
    };
    Object.defineProperty(WidthIterator.prototype, "currentNode", {
        get: function () {
            return this._currentNode;
        },
        set: function (node) {
            this._currentNode = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidthIterator.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        set: function (collection) {
            this._collection = collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidthIterator.prototype, "_rawNodes", {
        get: function () {
            return this.rawNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidthIterator.prototype, "_processedNodes", {
        get: function () {
            return this.processedNodes;
        },
        enumerable: true,
        configurable: true
    });
    WidthIterator.prototype.addToRawNodes = function (nodes) {
        if (nodes) {
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var node = nodes_1[_i];
                if (node && this.processedNodes.indexOf(node) === -1) {
                    this.rawNodes.push(node);
                }
            }
        }
    };
    return WidthIterator;
}());
exports.WidthIterator = WidthIterator;
var DepthIterator = /** @class */ (function () {
    function DepthIterator(collection, startNode) {
        /**
         * Очередь необработанных вершин
         */
        this.rawNodes = [];
        /**
         * Список обработанных вершин
         */
        this.processedNodes = [];
        this.collection = collection;
        this.currentNode = startNode;
        this.next();
    }
    DepthIterator.prototype.next = function () {
        //console.log(this.currentNode)
        if (this.processedNodes.indexOf(this.currentNode) < 0) {
            var neighbours = this.collection.getNeignbours(this.currentNode);
            this.addToRawNodes(neighbours);
            this.processedNodes.push(this.currentNode);
            this.currentNode = this.rawNodes[this.rawNodes.length - 1];
            this.rawNodes.pop();
        }
        else {
            this.currentNode = this.rawNodes[this.rawNodes.length - 1];
            this.rawNodes.pop();
        }
        //console.log(this.rawNodes, this.processedNodes)
    };
    Object.defineProperty(DepthIterator.prototype, "currentNode", {
        get: function () {
            return this._currentNode;
        },
        set: function (node) {
            this._currentNode = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepthIterator.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        set: function (collection) {
            this._collection = collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepthIterator.prototype, "_rawNodes", {
        get: function () {
            return this.rawNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepthIterator.prototype, "_processedNodes", {
        get: function () {
            return this.processedNodes;
        },
        enumerable: true,
        configurable: true
    });
    DepthIterator.prototype.addToRawNodes = function (nodes) {
        if (nodes) {
            for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
                var node = nodes_2[_i];
                if (node && this.processedNodes.indexOf(node) === -1) {
                    this.rawNodes.push(node);
                }
            }
        }
    };
    return DepthIterator;
}());
exports.DepthIterator = DepthIterator;
var Graph = /** @class */ (function () {
    function Graph() {
        this.graph = {
            'a': ['b', 'c', 'd', 'e'],
            'b': ['a', 'e'],
            'c': ['a', 'd'],
            'd': ['a', 'c'],
            'e': ['a', 'b']
        };
    }
    Graph.prototype.createIterator = function (type) {
        if (type === 'width') {
            return new WidthIterator(this, 'e');
        }
        else {
            return new DepthIterator(this, 'b');
        }
    };
    Graph.prototype.getItems = function () {
        return this.graph;
    };
    Graph.prototype.getNeignbours = function (node) {
        return this.getItems()["" + node];
    };
    return Graph;
}());
exports.Graph = Graph;
var graph = new Graph();
// Итератор по обходу графа в ширину
var widthIterator = graph.createIterator('width');
var depthIterator = graph.createIterator('depth');
while (widthIterator._rawNodes.length !== 0) {
    widthIterator.next();
}
console.log("Widths search: ", widthIterator._processedNodes);
console.log('\n');
while (depthIterator._rawNodes.length !== 0) {
    depthIterator.next();
}
console.log("Depth search: ", depthIterator._processedNodes);
