import Layout from '@components/layout/Layout';

import ListItems from '@/components/shop/ListItems/ListItems';
import NavCategory from '@/components/shop/NavCategory/NavCategory';

import { DUMMY_SHOES_CAT } from './../../dummy-data';

const ShopPages = () => {
  return (
    <Layout>
      <section>
        <aside>
          <NavCategory categories={DUMMY_SHOES_CAT} />
        </aside>

        <ListItems />
      </section>
    </Layout>
  );
};

export default ShopPages;
