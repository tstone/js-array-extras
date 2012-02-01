
(function(){

    var immutableAction = function(x){
        return function() {
            var na = this.clone();
            na[x].apply(na, Array.prototype.slice.call(arguments, 0));
            return na;
        }
    };

    var extras = {

        // Array.clone()
        clone: function() { return this.slice(0); },

        // Array.cons()
        cons: function() {
            var na = this.clone();
            return { head: na.shift(), tail: na };
        },

        // Array.pop()
        pop: function() {
            var na = this.clone();
            var tail = na.pop();
            return { head: na, tail: tail };
        },

        // Array.sets()
        sets: function() {
            var xs = this;
            var loop = function(acc, i) {
                if (i == xs.length || !xs[i+1]) { return acc; }
                acc.push([xs[i], xs[i+1]]);
                return loop(acc, i + 1);
            }
            return loop([], 0);
        },

        // Array.pairs();
        pairs: function() {
            var xs = this;
            var loop = function(acc, i) {
                if (i >= xs.length) { return acc; }
                var pair = [xs[i]];
                if (xs[i+1]) { pair.push(xs[i+1]); }
                return loop(acc.ipush(pair), i + 2);
            }
            return loop([], 0);
        },

        // Array.triples();
        triples: function() {
            var xs = this;
            var loop = function(acc, i) {
                if (i >= xs.length) { return acc; }
                var pair = [xs[i]];
                if (xs[i+1]) {
                    pair.push(xs[i+1]);
                    if (xs[i+2]) { pair.push(xs[i+2]); }
                }
                return loop(acc.ipush(pair), i + 3);
            }
            return loop([], 0);
        },

        // Immutable variations of standard functions
        ipush: immutableAction('push'),
        ireverse: immutableAction('reverse'),
        // isort: immutableAction('sort'),
        // isplice: immutableAction('splice'),
        iunshift: immutableAction('unshift')

    };

    // Extend
    for (var key in extras) {
        if (extras.hasOwnProperty(key) || !Array.prototype[key]) {
            Array.prototype[key] = extras[key];
        }
    }
}());
