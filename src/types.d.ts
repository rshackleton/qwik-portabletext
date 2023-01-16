import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';

export interface Props {
  components?: PortableTextComponents;
  value: InputValue;
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
