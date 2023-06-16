import Layout from '@components/layout/Layout';

import ListItems from '@/components/shop/ListItems/ListItems';
import NavCategory from '@/components/shop/NavCategory/NavCategory';

import { DUMMY_SHOES, DUMMY_SHOES_CAT } from './../../dummy-data';

const ShopPages = () => {
  return (
    <Layout>
      <section>
        <NavCategory categories={DUMMY_SHOES_CAT} />
        <aside>
          <ListItems items={DUMMY_SHOES} />
        </aside>
      </section>
    </Layout>
  );
};

export default ShopPages;
