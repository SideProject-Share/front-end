import React, { forwardRef } from 'react';

import { HeaderProps } from './types';

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ children, ...others }, ref) => (
  <div tw="px-5 bg-white" ref={ref} {...others}>
    {children}
  </div>
));

export default React.memo(Header);
