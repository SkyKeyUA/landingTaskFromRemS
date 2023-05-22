/** @format */

import React from 'react';
import ContentLoader from 'react-content-loader';
export const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={380}
      height={642}
      viewBox="0 0 380 642"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="32" ry="32" width="340" height="382" />
      <rect x="0" y="406" rx="8" ry="8" width="340" height="72" />
      <rect x="0" y="502" rx="8" ry="8" width="340" height="50" />
    </ContentLoader>
  );
};
