import React, { forwardRef } from 'react';

import { BodyProps } from './types';

const Body = forwardRef<HTMLDivElement, BodyProps>(({ children, ...others }, ref) => (
  <div tw="px-5 py-5 bg-white" ref={ref} {...others}>
    {children}
  </div>
));

export default React.memo(Body);
