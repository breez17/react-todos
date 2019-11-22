import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/FirebaseContext";

export const Form = () => {

    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

   const submitHandler = (event) => {
        event.preventDefault();

        if(value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show(' Заметка была создана', 'success')
            }).catch(()=> {
                alert.show('Введите название заметки', 'danger')
            });
            alert.show(' Заметка была создана', 'success')


            setValue('')
        } else {
            alert.show('Введите название заметки', 'danger')

        }
   } ;

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Write name your notate"
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
};