import { ITarefa } from '../../types/tarefas';
import Item from './Item/index';
import style from './Lista.module.scss';

function Lista({ tarefas }:  { tarefas: ITarefa[] }) {  

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                  <Item 
                  tarefa={item.tarefa}
                  tempo={item.tempo}
                  />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;