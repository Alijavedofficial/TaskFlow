import { TaskMap } from "./Types/types";

export const initialState: TaskMap = {
    Pending: [
    {
        id: '1',
        task: 'Implement feature A',
        description: 'This is a description of feature A',
        tag: 'High',
        date: '2022-01-01',
    },
    {
        id: '2',
        task: 'Implement feature B',
        description: 'This is a description of feature A',
        tag: 'Low',
        date: '2022-01-01',
    },
    {
        id: '3',
        task: 'Implement feature C',
        description: 'This is a description of feature A',
        tag: 'Medium',
        date: '2022-01-01',
    }
    ],
    Ongoing: [
        {
        id: '4',
        task: 'Implement feat',
        description: 'This is a description of feature A',
        tag: 'High',
        date: '2022-01-01',
        }
    ],
    Done: [
        {
        id: '5',
        task: 'Implement feature 123',
        description: 'This is a description of feature A',
        tag: 'High',
        date: '2022-01-01',
        }
    ]
}