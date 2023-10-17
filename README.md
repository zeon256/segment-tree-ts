# `segment-tree-ts`
> Efficient segment tree implementation for NodeJS/Bun/Browser

A versatile and efficient implementation of a segment tree in TypeScript, compatible with various environments including Node.js, Bun, and modern web browsers.

## Installation
You can install `segment-tree-ts` via npm using the following command:

```shell
npm install segment-tree-ts
```

## Usage

### NodeJS
To use `segment-tree-ts` in a Node.js environment, you need to import the library and create a segment tree.
```typescript
const { SegmentTree, operations } = require('segment-tree-ts');

const segmentTree = new SegmentTree([3, 2, 1, 4, 5], operations.Min);

// Query
segmentTree.query(0, 4); // 1

// Update
segmentTree.update(0, 10);
segmentTree.query(0, 4); // 2
```

### Bun
If you're working in a Bun environment, the process is similar to Node.js.
```typescript
import { SegmentTree, operations } from 'segment-tree-ts';

const segmentTree = new SegmentTree([3, 2, 1, 4, 5], operations.Min);

// Query
segmentTree.query(0, 4); // 1

// Update
segmentTree.update(0, 10);
segmentTree.query(0, 4); // 2
```

### Browser
When working in a web browser environment, you can directly include the pre-built script in your HTML file:
```typescript
<script src="path-to-segment-tree-ts/dist/segment-tree.min.js"></script>
<script>
  const segmentTree = new SegmentTree([3, 2, 1, 4, 5], operations.Min);

  // Query
  segmentTree.query(0, 4); // 1

  // Update
  segmentTree.update(0, 10);
  segmentTree.query(0, 4); // 2
</script>
```
## Examples

### Using the Segment Tree
Here's an example demonstrating how to use the segment tree to find the minimum value in a range.
```typescript
const { SegmentTree, operations } = require('segment-tree-ts');

// Create a segment tree
const numbers = [3, 2, 1, 4, 5];
const segmentTree = new SegmentTree(numbers, operations.Min);

// Query for the minimum value in a range
segmentTree.query(0, 4); // Should return 1
```

### Updating Values
You can also update values in the segment tree. Here's an example of how to do this:
```typescript
const { SegmentTree, operations } = require('segment-tree-ts');

// Create a segment tree
const numbers = [3, 2, 1, 4, 5];
const segmentTree = new SegmentTree(numbers, operations.Min);

// Update a value
segmentTree.update(0, 10);

// Query for the minimum value in the updated range
segmentTree.query(0, 4); // Should return 2
```

## References
- [Rust Segment Tree](https://github.com/Darksonn/segment-tree)
- [Original Codeforces Blog](https://codeforces.com/blog/entry/18051)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
