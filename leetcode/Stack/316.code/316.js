/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.includes(s[i])) {
            continue;
        }
        while (
            stack.length &&
            stack[stack.length - 1] > s[i] &&
            s.includes(stack[stack.length - 1], i)
        ) {
            stack.pop();
        }
        stack.push(s[i]);
    }
    return stack.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
// 仿js版本做缓存什么的 但是js并不适合这么搞
var removeDuplicateLetters$1 = function (s) {
    let res = [];
    let visit = [];
    let aIndex = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
    };

    let count = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        ++count[aIndex[s[i]]];
    }
    for (let i = 0; i < s.length; i++) {
        --count[aIndex[s[i]]];
        if (visit[aIndex[s[i]]]) continue;
        while (
            res.length &&
            s[i] < res[res.length - 1] &&
            count[aIndex[res[res.length - 1]]]
        ) {
            visit[aIndex[res[res.length - 1]]] = 0;
            res.pop();
        }
        res.push(s[i]);
        visit[aIndex[s[i]]] = 1;
    }
    return res.join('');
};
