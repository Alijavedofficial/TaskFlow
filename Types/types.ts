export type Task = {
    id: string;
    task: string;
    description: string;
    tag: string;
    date: string;
};

export type TaskMap = {
    [key:string]: Task[];
}

export type Board = {
    columns: TaskMap;
    ordered: string[];
}