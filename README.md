# `segment-tree-ts`
> Efficient segment tree implementation for NodeJS/Bun/Browser

## Usage
```typescript
const segmentTree = new SegmentTree([3, 2, 1, 4, 5], ops.Min);
// query
segmentTree.query(0, 4); // 1
// update
segmentTree.update(0, 10);
segmentTree.query(0, 4); // 2
```

## References
- [Rust Segment Tree](https://github.com/Darksonn/segment-tree)
- [Original Codeforces Blog](https://codeforces.com/blog/entry/18051)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details