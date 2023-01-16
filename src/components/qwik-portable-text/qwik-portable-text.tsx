import { component$, useTask$ } from '@builder.io/qwik';
import { Props } from '../../types';

export const PortableText = component$<Props>(({ components = {}, value }) => {
  useTask$(() => {
    console.log(components, value);
  });

  return <div />;
});
