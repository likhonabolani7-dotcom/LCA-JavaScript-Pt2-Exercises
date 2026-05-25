function validateUserInput(input) {
    if (!input || typeof input !== 'object') {
        throw new Error("ValidationError: Invalid payload structure provided.");
    }

    // 1. Username Validation
    if (!input.username || typeof input.username !== 'string') {
        throw new Error("ValidationError: Username is required and must be text.");
    }
    if (input.username.trim().length < 3) {
        throw new Error("ValidationError: Username must be at least 3 characters long.");
    }

    // 2. Email Validation
    if (!input.email || !input.email.includes('@') || !input.email.includes('.')) {
        throw new Error("ValidationError: Provide a structurally valid email address.");
    }

    // 3. Age Validation
    if (typeof input.age !== 'number' || input.age % 1 !== 0 || input.age < 18) {
        throw new Error("ValidationError: User must be an adult (integer age >= 18).");
    }

    return "User validation successful! Data is safe to process.";
}


function demonstrateErrorTypes(errorType) {
    try {
        switch (errorType.toLowerCase()) {
            case 'reference':
                // ReferenceError: Triggered by accessing an unallocated variable identifier
                return callUnknownFunction();

            case 'type':
                // TypeError: Triggered by performing an operation on an incorrect data type
                const constantValue = 100;
                constantValue.toLowerCase(); 
                break;

            case 'range':
                // RangeError: Triggered when a number falls outside its legal boundaries
                const structuralArray = new Array(-1);
                break;

            default:
                throw new Error("GeneralError: Unknown scenario token supplied.");
        }
    } catch (error) {
        // Intercepting and formatting the errors gracefully to console
        console.log(`[Handled ${error.name}]: ${error.message}`);
    }
}

const stringHelpers = {
    capitalizeWords(text) {
        if (typeof text !== 'string') {
            throw new TypeError('capitalizeWords expects a string.');
        }
        return text
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    },

    reverse(text) {
        if (typeof text !== 'string') {
            throw new TypeError('reverse expects a string.');
        }
        return text.split('').reverse().join('');
    },

    containsWord(text, word) {
        if (typeof text !== 'string' || typeof word !== 'string') {
            throw new TypeError('containsWord expects string arguments.');
        }
        return text.toLowerCase().split(/\W+/).includes(word.toLowerCase());
    }
};

const arrayHelpers = {
    average(numbers) {
        if (!Array.isArray(numbers)) {
            throw new TypeError('average expects an array of numbers.');
        }
        if (numbers.length === 0) {
            throw new RangeError('average requires at least one number.');
        }
        const total = numbers.reduce((sum, item) => {
            if (typeof item !== 'number') {
                throw new TypeError('average only supports numbers.');
            }
            return sum + item;
        }, 0);
        return total / numbers.length;
    },

    uniqueValues(items) {
        if (!Array.isArray(items)) {
            throw new TypeError('uniqueValues expects an array.');
        }
        return [...new Set(items)];
    },

    flatten(nestedArray) {
        if (!Array.isArray(nestedArray)) {
            throw new TypeError('flatten expects an array.');
        }
        return nestedArray.flat(Infinity);
    }
};

console.log('--- Example Usage ---');
try {
    console.log(validateUserInput({ username: 'John', email: 'John@example.com', age: 25 }));
} catch (error) {
    console.log(error.message);
}

demonstrateErrorTypes('reference');
demonstrateErrorTypes('type');
demonstrateErrorTypes('range');
demonstrateErrorTypes('unknown');

console.log('String Helpers:', stringHelpers.capitalizeWords('hello world from javascript'));
console.log('Reverse:', stringHelpers.reverse('hello'));
console.log('Contains word "world"?', stringHelpers.containsWord('Hello world', 'world'));

console.log('Array Helpers average:', arrayHelpers.average([10, 20, 30]));
console.log('Array Helpers unique:', arrayHelpers.uniqueValues([1, 2, 2, 3]));
console.log('Array Helpers flatten:', arrayHelpers.flatten([1, [2, [3, [4]]]]));

