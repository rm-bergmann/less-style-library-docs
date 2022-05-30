import React from 'react';
import Layout from './src/components/layoutComponents/layout/layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}