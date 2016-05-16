import React from 'react';
import { Item } from '../../components/Item/Item';
import { Filters } from '../../components/Filters/Filters';

export const Home = () => (
  <div>
    <Filters />
    <Item />
    <Item />
  </div>
);
