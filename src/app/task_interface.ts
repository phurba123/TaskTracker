//export interface for task

export interface Task  {
    id?:number, // optional id, in a production environment while creating new task, id wont be present
    text:string,
    day:string,
    reminder:boolean,
    extra?:string // optional property
}