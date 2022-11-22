import styles from './List.module.scss'
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList} from '../../redux/columnsRedux';
import { getListById } from '../../redux/listsRedux';
import { useParams, Navigate } from 'react-router';

const List = () =>{

	const { listId } =useParams();

	const columns = useSelector(state => getColumnsByList(state, listId));

	const listData = useSelector(state => getListById(state, listId));
	if(!listData) return <Navigate to="/" />
  
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
	    <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm listId={listId}/>
    </div>
  );
};

export default List;