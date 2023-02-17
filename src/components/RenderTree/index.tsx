import Tree from 'react-d3-tree';
import { RawNodeDatum, RenderCustomNodeElementFn } from 'react-d3-tree/lib/types/types/common';
import { TreeProps, TreeNodeEventCallback } from 'react-d3-tree/lib/types/Tree/types';
import CustomNode, { nodeCircleClass } from '../CustomNode';
import { getAllNumbers } from '../../utils';
import TreeNode from './TreeNode';

export const MAX_TIMEOUT = 300; // keep the color for 0.3s only, after clicking

export enum Colors {
  White = 'white',
  LightGreen = 'lightgreen'
}

export const defaultTreeProps: TreeProps = {
  data: [],
  zoom: 1,
  depthFactor: 50,
  zoomable: false,
  draggable: false,
  collapsible: false,
  orientation: 'vertical',
  svgClassName: 'binary-tree',
  translate: { x: window.innerWidth / 2, y: 90 },
};

const renderCustomNodeElement: RenderCustomNodeElementFn = ({ nodeDatum, onNodeClick }) =>
  <CustomNode nodeValue={nodeDatum.name} onNodeClick={onNodeClick} />;

const colorTillParent: TreeNodeEventCallback = node => {
  if (!node) return;
  const nodeId = node.data.__rd3t.id;
  const nodeCircleElement = document.getElementById(nodeId)!.querySelector(`.${nodeCircleClass}`)!;
  const currentColor = nodeCircleElement.getAttribute('fill');
  nodeCircleElement.setAttribute(
    'fill',
    currentColor === Colors.LightGreen ? Colors.White : Colors.LightGreen
  );
  // @ts-ignore
  colorTillParent(node.parent!);
};

const onNodeClick: TreeNodeEventCallback = node => {
  // @ts-ignore
  colorTillParent(node);
  // @ts-ignore
  setTimeout(() => colorTillParent(node), MAX_TIMEOUT);
};

const getCompleteBinaryTreeFromList = (list: number[], i = 0) => {
  if (i >= list.length) return null;
  const root = new TreeNode(list[i].toString());
  const leftChild = getCompleteBinaryTreeFromList(list, (2 * i) + 1);
  const rightChild = getCompleteBinaryTreeFromList(list, (2 * i) + 2);
  if (leftChild) {
    root.children.push(leftChild);
  }
  if (rightChild) {
    root.children.push(rightChild);
  }
  return root;
}

const getTreeData = (rawData: string) => getCompleteBinaryTreeFromList(getAllNumbers(rawData));

export interface RenderTreeProps {
  rawData?: string;
}

const RenderTree = ({ rawData }: RenderTreeProps) => (
  <div className="binary-tree-render-area">
    <Tree
      {...defaultTreeProps}
      onNodeClick={onNodeClick}
      renderCustomNodeElement={renderCustomNodeElement}
      data={getTreeData(rawData ?? '') as RawNodeDatum | RawNodeDatum[]}
    />
  </div>
);

export default RenderTree;
