import * as React from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

export default function Dashboard():JSX.Element {
    const onDragEnd = React.useCallback((result: DropResult) => {
        console.log(result)
    }, [])
    return <DragDropContext onDragEnd={onDragEnd}>
<Droppable droppableId='dashboard' type='COLUMN' direction='horizontal'>
{(provided, snapshot) => (
    <ul
    className='border border-red-600'
    ref={provided.innerRef} 
    {...provided.droppableProps}
    >
Colums
    </ul>
)}
</Droppable>
    </DragDropContext>
}