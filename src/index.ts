export type AssociativeOperation<T> = { combine(a: T, b: T): T }
export type Identity<N> = { identity: N }
export type NumberOrObject = number | { value: number };

export function getValue<T>(n: NumberOrObject) {
    return typeof n === 'number' ? n : n['value'];
}

export class SegmentTree {
    private readonly buf: NumberOrObject[];
    private readonly n: number;
    private readonly fn: AssociativeOperation<NumberOrObject> & Identity<NumberOrObject>;

    constructor(
            data: NumberOrObject[],
            f: AssociativeOperation<NumberOrObject> & Identity<NumberOrObject>
        ) {
        const n = data.length;
        const buf = new Array<NumberOrObject>(n << 1);

        for(let i = 0; i < n; ++i) buf[i + n] = data[i];
        for(let i = n - 1; i > 0; --i) buf[i] = f.combine(buf[i<<1], buf[i<<1|1]);

        this.buf = buf;
        this.n = n;
        this.fn = f;
    }

    public update(i: number, v: NumberOrObject){
        for (this.buf[i += this.n] = v; i > 1; i >>= 1) 
            this.buf[i>>1] = this.fn.combine(this.buf[i], this.buf[i^1]);
    }

    public query(l: number, r: number): NumberOrObject {
        let res = this.fn.identity;

        for (l += this.n, r += this.n; l < r; l >>= 1, r >>= 1) {
            if (l&1) res = this.fn.combine(res, this.buf[l++]);
            if (r&1) res = this.fn.combine(res, this.buf[--r]);
        }

        return res;
    }
}

export namespace ops {
    export const Min = {
        combine(a: NumberOrObject, b: NumberOrObject) {
            return getValue(a) < getValue(b) ? a: b;
        },
        identity: Number.MAX_SAFE_INTEGER
    }

    export const Max = {
        combine(a: NumberOrObject, b: NumberOrObject) {
            return getValue(a) > getValue(b) ? a: b;
        },
        identity: Number.MIN_SAFE_INTEGER
    }

    export const Sum = {
        combine(a: NumberOrObject, b: NumberOrObject) {
            return getValue(a) + getValue(b);
        },
        identity: 0
    }

    export const Mul = {
        combine(a: NumberOrObject, b: NumberOrObject) {
            return getValue(a) * getValue(b);
        },
        identity: 1
    }

    export const GCD = {
        combine(a: NumberOrObject, b: NumberOrObject) {
            let x = getValue(a);
            let y = getValue(b);

            while(y !== 0) {
                [x, y] = [y, x % y];
            }

            return x;
        },
        identity: 0
    }
}