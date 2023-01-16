import { component$, useStyles$ } from '@builder.io/qwik';
import dummyData from '../../dummy-data';
import { PortableText } from '../qwik-portable-text/qwik-portable-text';

export const Demo = component$(() => {
  useStyles$(`
    html, body {
      margin: 0;
      padding: 0;
    }

    main {
      margin: 0px auto;
      max-width: 800px;
      padding: 16px;
    }
  `);

  return (
    <>
      <PortableText value={dummyData} />

      {/* Output dummy content as JSON */}
      <details>
        <summary>Source Content</summary>
        <pre>{JSON.stringify(dummyData, null, 2)}</pre>
      </details>
    </>
  );
});
