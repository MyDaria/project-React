import styles from './ListForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {

    const [title, setValueTitle] = useState('');
    const [description, setValueDescription] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setValueTitle(' ');
        setValueDescription(' ');
    };

    return ( 
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span> <TextInput value={title} onChange={e => setValueTitle(e.target.value)} />
            <span>Description:</span> <TextInput value={description} onChange={e => setValueDescription(e.target.value)} />
            <Button>Add List</Button>
        </form>
    );   
};

export default ListForm;