import { component$ } from '@builder.io/qwik';
import { LIST_NEST_MODE_HTML, nestLists } from '@portabletext/toolkit';
import { NodeType, Props } from '../../types';
import { getWarningMessage, printWarning } from '../../warnings';
import { RenderNode } from '../render-node/render-node';

export const PortableText = component$<Props>(
  ({ components = {}, value, onMissingComponent = true }) => {
    // const mergedComponents = mergeComponents(defaultComponents, components);
    const blocks = nestLists(Array.isArray(value) ? value : [value], LIST_NEST_MODE_HTML);

    const missingComponentHandler = (type: string, nodeType: NodeType) => {
      if (onMissingComponent === false) {
        return;
      }
      const message = getWarningMessage(type, nodeType);
      if (typeof onMissingComponent === 'function') {
        onMissingComponent(message, { type, nodeType });
        return;
      }
      printWarning(message);
    };

    return (
      <>
        {blocks.map((node, index) => (
          <RenderNode
            global={{
              components: {
                blocks: null,
                hardBreak: null,
                list: null,
                listItem: null,
                marks: null,
                types: null,
                unknownBlockStyle: null,
                unknownList: null,
                unknownListItem: null,
                unknownMark: null,
                unknownType: null,
              },
              missingComponentHandler,
              // context,
              ptBlocks: blocks,
              ptRawValue: value,
            }}
            options={{
              node,
              isInline: false,
              indexInParent: index,
            }}
          />
        ))}
      </>
    );
  },
);
