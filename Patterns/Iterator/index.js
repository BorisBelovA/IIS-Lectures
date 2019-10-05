"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GraphIterator = /** @class */ (function () {
    function GraphIterator(collection, startNode) {
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
    Object.defineProperty(GraphIterator.prototype, "currentNode", {
        get: function () {
            return this._currentNode;
        },
        set: function (node) {
            this._currentNode = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphIterator.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        set: function (collection) {
            this._collection = collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphIterator.prototype, "_rawNodes", {
        get: function () {
            return this.rawNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphIterator.prototype, "_processedNodes", {
        get: function () {
            return this.processedNodes;
        },
        enumerable: true,
        configurable: true
    });
    GraphIterator.prototype.addToRawNodes = function (nodes) {
        if (nodes) {
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var node = nodes_1[_i];
                if (node && this.processedNodes.indexOf(node) === -1) {
                    this.rawNodes.push(node);
                }
            }
        }
    };
    return GraphIterator;
}());
exports.GraphIterator = GraphIterator;
var WidthIterator = /** @class */ (function (_super) {
    __extends(WidthIterator, _super);
    function WidthIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    };
    return WidthIterator;
}(GraphIterator));
exports.WidthIterator = WidthIterator;
var DepthIterator = /** @class */ (function (_super) {
    __extends(DepthIterator, _super);
    function DepthIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DepthIterator.prototype.next = function () {
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
    };
    return DepthIterator;
}(GraphIterator));
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
            return new WidthIterator(this, 'b');
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
