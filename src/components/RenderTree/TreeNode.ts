
class TreeNode {
  public name: string;
  public children: TreeNode[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }
}

export default TreeNode;
