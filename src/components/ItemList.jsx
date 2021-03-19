import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styles from '../../styles/ItemList.module.css';
import Link from 'next/link';

const ItemList = ({ list }) => (
  <div>
    <Grid columns={3}>
      <Grid.Row>
        {list.map(item => (
          <Grid.Column key={item.id}>
            <Link href="/detail/[id]" as={`/detail/${item.id}`}>
              <a>
                <div>
                  <img src={item.image_link} alt={item.name} className={styles.img_item}/>
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </a>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </div>
);

ItemList.propTypes = {
  list: PropTypes.array
}

export default ItemList;
