import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js'
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = () => {

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.span}>Title:</span><input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.span}>Icon:</span><input className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;