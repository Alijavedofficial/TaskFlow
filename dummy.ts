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
            description: 'This is a description of feature B',
            tag: 'Low',
            date: '2022-01-01',
        },
        {
            id: '3',
            task: 'Implement feature C',
            description: 'This is a description of feature C',
            tag: 'Medium',
            date: '2022-01-01',
        },
        {
            id: '5',
            task: 'Focus on DSA',
            description: 'Practice Data Structures and Algorithms problems',
            tag: 'Medium',
            date: '2022-01-01',
        },
    ],
    Ongoing: [
        {
            id: '6',
            task: 'Implement feature D',
            description: 'This is a description of feature D',
            tag: 'High',
            date: '2022-01-01',
        },
        {
            id: '7',
            task: 'Play cricket',
            description: 'Evening cricket practice',
            tag: 'Low',
            date: '2022-01-01',
        },
    ],
    Done: [
        {
            id: '8',
            task: 'Study for Exams',
            description: 'Study for the fall semester exam',
            tag: 'High',
            date: '2022-01-01',
        },
        {
            id: '4',
            task: 'Exercise',
            description: 'Morning workout routine',
            tag: 'High',
            date: '2022-01-01',
        },
    ]
};
