import React from 'react';
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '01:30:00'
    }
]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                   <item
                   key={index}
                   {...item}
                ))}
            </ul>
        </aside>
    )
}

export default Lista;