import Layout from '@components/layout/Layout';
import { useEffect, useState } from 'react';
import { IProduct, IProductCat } from 'utils/types';

import ListItems from '@/components/shop/ListItems/ListItems';
import NavCategory from '@/components/shop/NavCategory/NavCategory';

import { DUMMY_SHOES, DUMMY_SHOES_CAT } from './../../dummy-data';

const ShopPages = () => {
  const [filter, setFilter] = useState<IProductCat['type']>('all');
  const [list, setList] = useState<IProduct[]>(DUMMY_SHOES);

  useEffect(() => {
    if (filter === 'all') {
      setList(DUMMY_SHOES);
    } else {
      setList(DUMMY_SHOES.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <Layout>
      <section>
        <NavCategory categories={DUMMY_SHOES_CAT} setCategory={setFilter} />
        <aside>
          <ListItems items={list} />
        </aside>
      </section>
    </Layout>
  );
};

export default ShopPages;
