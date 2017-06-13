/**
 * Created by Yarkin UCERLER on 11.06.2017.
 */

function OperatorTutorail() {}


// Assignment Operators Begin

OperatorTutorail.prototype.assignment = function(y) {
    if(typeof y !== 'undefined') {
        var x = null;
        return x = y;
    }

    return false;
};

OperatorTutorail.prototype.additionAssignment = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {

        return x += y;
    }

    return false;
};

OperatorTutorail.prototype.subtractionAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x -= y;
    }

    return false;
};

OperatorTutorail.prototype.multiplicationAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x *= y;
    }

    return false;
};

OperatorTutorail.prototype.divisionAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x /= y;
    }

    return false;
};

OperatorTutorail.prototype.remainderAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x %= y;
    }

    return false;
};

OperatorTutorail.prototype.exponentiationAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x **= y;
    }

    return false;
};

OperatorTutorail.prototype.leftShiftAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x <<= y;
    }

    return false;
};

OperatorTutorail.prototype.rightShiftAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x >>= y;
    }

    return false;
};

OperatorTutorail.prototype.unSingedRightShiftAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x >>>= y;
    }

    return false;
};

OperatorTutorail.prototype.bitwiseAndAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x &= y;
    }

    return false;
};

OperatorTutorail.prototype.bitwiseXOrAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x ^= y;
    }

    return false;
};

OperatorTutorail.prototype.bitwiseOrAssignment = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number') ) {
        return x |= y;
    }

    return false;
};

// Assignment Operators End

// Comparison Operators Begin

OperatorTutorail.prototype.equalComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x == y;
    }

    return false;
};

OperatorTutorail.prototype.notEqualComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x != y;
    }

    return false;
};

OperatorTutorail.prototype.strictEqualComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x === y;
    }

    return false;
};

OperatorTutorail.prototype.notStrictEqualComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x !== y;
    }

    return false;
};

OperatorTutorail.prototype.greaterThanComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x > y;
    }

    return false;
};

OperatorTutorail.prototype.greaterThanOrEqualComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x >= y;
    }

    return false;
};

OperatorTutorail.prototype.lessThanComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x < y;
    }

    return false;
};

OperatorTutorail.prototype.lessThanOrEqualComparison = function(x, y) {
    if(typeof x !== 'undefined' && typeof y !== 'undefined') {
        return x <= y;
    }

    return false;
};

// Comparison Operators End


// Arithmetic Operators Begin

OperatorTutorail.prototype.remainderArithmetic = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x % y;
    }

    return false;
};

OperatorTutorail.prototype.incrementArithmetic = function(x) {
    if(typeof x !== 'undefined' && typeof x === 'number') {
        return x++;
    }

    return false;
};

OperatorTutorail.prototype.decrementArithmetic = function(x) {
    if(typeof x !== 'undefined' && typeof x === 'number') {
        return x--;
    }

    return false;
};

OperatorTutorail.prototype.unaryNegationArithmetic = function(x) {
    if(typeof x !== 'undefined' && typeof x === 'number') {
        return -x;
    }

    return false;
};

OperatorTutorail.prototype.unaryPlusArithmetic = function(x) {
    if(typeof x !== 'undefined' && typeof x === 'number') {
        return +x;
    }

    return false;
};

OperatorTutorail.prototype.exponentiationArithmetic = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x ** y;
    }

    return false;
};

// Arithmetic Operators End

// Bitwise Operators Begin

OperatorTutorail.prototype.andBitwise = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x & y;
    }

    return false;
};

OperatorTutorail.prototype.orBitwise = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x | y;
    }

    return false;
};

OperatorTutorail.prototype.xOrBitwise = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x ^ y;
    }

    return false;
};

OperatorTutorail.prototype.notBitwise = function(x, y) {
    if(typeof x !== 'undefined' && typeof x === 'number') {
        return ~ y;
    }

    return false;
};

OperatorTutorail.prototype.leftShiftBitwise = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x << y;
    }

    return false;
};

OperatorTutorail.prototype.singPropagatingRightShiftBitwise = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x >> y;
    }

    return false;
};

OperatorTutorail.prototype.zeroFillRightShiftBitwise = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x >>> y;
    }

    return false;
};

// Bitwise Operators End

// Logical Operators Begin

OperatorTutorail.prototype.andLogical = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x && y;
    }

    return false;
};

OperatorTutorail.prototype.orLogical = function(x, y) {
    if((typeof x !== 'undefined' && typeof y !== 'undefined') && (typeof x === 'number' && typeof y === 'number')) {
        return x || y;
    }

    return false;
};

OperatorTutorail.prototype.notLogical = function(x) {
    if(typeof x !== 'undefined' && typeof x === 'boolean') {
        return !x;
    }

    return false;
};


// Logical Operators End


// Conditional(Ternary) Operators Begin

OperatorTutorail.prototype.conditional = function(x) {
    if(typeof x !== 'undefined' && typeof x === 'boolean') {
        return x >= 18 ? 'adult': 'minor';
    }

    return false;
};

// Conditional(Ternary) Operators End

// Unary Operators Begin

OperatorTutorail.prototype.unary = function(x) {
    if(typeof x !== 'undefined') {
        return delete x;
    }

    return false;
};

// Unary Operators End

// Type Of Operators Begin

OperatorTutorail.prototype.unary = function(x) {
    if(typeof x !== 'undefined') {
        return typeof x;
    }

    return false;
};

// Type Of Operators End

// Find given variable equals true or false

OperatorTutorail.prototype.findEqualTrueOrFalse = function(x) {
    return x == true;
};

// End

// Find given variable equals true or false

OperatorTutorail.prototype.findEqualTrueOrFalse = function(x) {
    return x == true;
};

// End

// Loops Begin

OperatorTutorail.prototype.for = function(repeatLoop, message) {
    if((typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'number') && (typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'string')) {
        for(var i = 0; i < repeatLoop; i++) {
            return message;
        }
    }

    return false;
};

OperatorTutorail.prototype.doWhile = function(repeatLoop, message) {
    if((typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'number') && (typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'string')) {
        var i = 0;
        do {
            i++;
            return message;
        }
        while (i < repeatLoop);
    }

    return false;
};

OperatorTutorail.prototype.break = function(repeatLoop, breakEqual, message) {
    if((typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'number') && (typeof breakEqual !== 'undefined' && typeof breakEqual === 'number') && (typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'string')) {
        for(var i = 0; i < repeatLoop; i++) {
            if( i == breakEqual) {
                console.log('break');
                break;
            }
            return message;
        }
    }

    return false;
};

OperatorTutorail.prototype.continue = function(repeatLoop, continueEqual, message) {
    if((typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'number') && (typeof continueEqual !== 'undefined' && typeof continueEqual === 'number') && (typeof repeatLoop !== 'undefined' && typeof repeatLoop === 'string')) {
        for(var i = 0; i < repeatLoop; i++) {
            if( i == continueEqual) {
                console.log('continue');
                continue;
            }
            return message;
        }
    }

    return false;
};

OperatorTutorail.prototype.forIn = function(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    for(var i in arr) {
        return arr[i];
    }
};

OperatorTutorail.prototype.forOf = function(object) {
    if ((typeof object === 'object') && (object !== null)) {
        return false;
    }

    for(var i of object) {
        return i;
    }
};


// Loops End
