import { ReactNode } from 'react';

import Navigation from '@/components/site/navigation';

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};
export default SiteLayout;
