import { component$ } from '@builder.io/qwik';
import { isPortableTextToolkitList } from '@portabletext/toolkit';
import { PortableTextBlock } from '@portabletext/types';
import {
  GenericNode,
  InputValue,
  NodeType,
  NormalizedBlocks,
  PortableTextQwikComponents,
} from '../../types';

export type RenderNodeProps = {
  global: {
    /**
     * Calls user-defined onMissingComponent.
     */
    missingComponentHandler?: (type: string, nodeType: NodeType) => void;

    /**
     * Qwik components used to render portable text.
     * This is an object with user-defined components merged with native ones.
     */
    components: PortableTextQwikComponents;

    /**
     * User-defined data context, as passed to the `<PortableText>` component.
     */
    // context: ContextType;

    /**
     * Raw portable text value passed to the `<PortableText>` component.
     */
    ptRawValue: InputValue;

    /**
     * Parsed portable text value. Extracted from ptRawValue.
     */
    ptBlocks: NormalizedBlocks;
  };
  options: {
    indexInParent: number;
    node: GenericNode;
    parentBlock?: PortableTextBlock;
    isInline?: boolean;
  };
};

export const RenderNode = component$<RenderNodeProps>((props) => {
  const { node, indexInParent, parentBlock, isInline } = props.options;

  if (isPortableTextToolkitList(node)) {
    // @todo - render list component.
    return null;
  }

  return <div>Hello Qwik!</div>;
});
