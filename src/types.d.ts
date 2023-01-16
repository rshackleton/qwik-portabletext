import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';

export interface Props {
  components?: PortableTextComponents;
  value: InputValue;

  /**
   * Function to call when encountering unknown unknown types, eg blocks, marks,
   * block style, list styles without an associated Svelte component.
   *
   * Will print a warning message to the console by default.
   * Pass `false` to disable.
   */
  onMissingComponent?: MissingComponentHandler | boolean;
}

export interface PortableTextQwikComponents {
  types: any;
  marks: any;
  blocks: any;
  list: any;
  listItem: any;
  hardBreak: any;
  unknownType: any;
  unknownMark: any;
  unknownBlockStyle: any;
  unknownList: any;
  unknownListItem: any;
}

export type PortableTextComponents = Partial<PortableTextQwikComponents>;

export type InputValue =
  | PortableTextBlock
  | ArbitraryTypedObject
  | (PortableTextBlock | ArbitraryTypedObject)[];

export type NormalizedBlocks = (
  | TypedObject
  | ToolkitPortableTextHtmlList
  | ToolkitPortableTextDirectList
)[];

export type GenericNode = NormalizedBlocks[0];

export type NodeType = 'block' | 'mark' | 'blockStyle' | 'listStyle' | 'listItemStyle';

export type MissingComponentHandler = (
  message: string,
  context: { type: string; nodeType: NodeType },
) => void;
