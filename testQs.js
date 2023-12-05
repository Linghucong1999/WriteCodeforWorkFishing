let mod = 1000000007;

function test(n) {
    let fact = 1;
    const start = performance.now();
    for (let i = 1; i < n; i++) {
        fact = (fact * i) % (mod);
    }
    const end = performance.now();
    const time = end - start;
    console.log(`test :${time} ms`);
    return fact;
}


function test2(n) {
    let fact = 1
    const start = performance.now();
    for (let i = 1; i < n; i += 4) {
        fact = (fact * i) % (mod);
        fact = (fact * i + 1) % (mod);
        fact = (fact * i + 2) % (mod);
        fact = (fact * i + 3) % (mod);
    }

    const end = performance.now();
    const time = end - start;
    console.log(`test2:${time} ms`);
    return fact;
}

function test3(n) {
    let fact = 1, fact2 = 1, fact3 = 1, fact4 = 1;
    const start = performance.now();
    for (let i = 1; i < n; i += 4) {
        fact = (fact * i) % (mod);
        fact2 = (fact2 * i + 1) % (mod);
        fact3 = (fact3 * i + 2) % (mod);
        fact4 = (fact4 * i + 3) % (mod);
    }
    const end = performance.now();
    const time = end - start;
    console.log(`test3:${time} ms`);
    return fact * fact2 * fact3 * fact4;
}

test(100000000);
test2(100000000);
test3(100000000);