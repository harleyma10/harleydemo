import { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard Layout</title>
      </Head>
      <div className="layout">
        {children}
      </div>
    </>
  );
};

export default Layout;
