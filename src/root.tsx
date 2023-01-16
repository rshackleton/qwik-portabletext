import { Demo } from './components/demo/demo';

type RootProps = {
  pkg: any;
};

export default (props: RootProps) => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>{`${props.pkg.name}@${props.pkg.version}`}</title>
      </head>
      <body>
        <main>
          <Demo />
        </main>
      </body>
    </>
  );
};
