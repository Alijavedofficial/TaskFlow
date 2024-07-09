import * as React from 'react';
import {Card, CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from './ui/card';
import {Task} from '@/Types/types'
import { DraggableProvided } from 'react-beautiful-dnd';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { CalendarIcon, DotsHorizontalIcon,Pencil1Icon,StarIcon,TrashIcon } from '@radix-ui/react-icons';
import { DropdownMenu,DropdownMenuContent,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger } from './ui/dropdown-menu';
import { useBoard } from '@/context/BoardContext/BoardContext';

type taskItemProps = {
    task: Task;
    isDragging: boolean;
    provided: DraggableProvided;
}

function taskItem({ isDragging, provided,task}: taskItemProps) {
    const { dispatch } = useBoard();
    return(
        <li className='relative' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
             <Card className={cn(isDragging ? "bg-slate-50": "")}>
                <CardHeader className='pb-3'>
                    <div className='flex justify-between'>
                        <CardTitle>{task.task}</CardTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={"outline"} size={"icon"} className='absolute right-5 top-5 h-6 w-6'>
                                    <DotsHorizontalIcon />
                                </Button>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </div>
                </CardHeader>
             </Card>
        </li>
    )
}