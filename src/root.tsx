import { PortableText } from './components/qwik-portable-text/qwik-portable-text';

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
        <PortableText />
      </body>
    </>
  );
};
