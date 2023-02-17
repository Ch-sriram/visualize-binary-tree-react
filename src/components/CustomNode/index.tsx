import { SyntheticEventHandler } from 'react-d3-tree/lib/types/types/common';

export const nodeTextClass = 'node-text';
export const nodeCircleClass = 'node-circle';

export interface CustomNodeProps {
  nodeValue: string;
  nodeSize?: number;
  onNodeClick?: SyntheticEventHandler;
}

const CustomNode = ({ nodeValue, onNodeClick, nodeSize = 20 }: CustomNodeProps) => (
  <g onClick={onNodeClick}>
    <circle r={nodeSize} fill="white" className={nodeCircleClass} />
    <text x="-4" y="5" fill="darkgreen" strokeWidth="0.1" className={nodeTextClass}>
      {nodeValue}
    </text>
  </g>
);

export default CustomNode;
