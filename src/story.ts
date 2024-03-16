class Story{
    id: number;
    name: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    projectId: string;
    creationDate: Date;
    status: 'to do' | 'doing' | 'done';
    ownerId: string;

    constructor(id: number, name: string, description: string, priority: 'low' | 'medium' | 'high', projectId: string, creationDate: Date, status: 'to do' | 'doing' | 'done', ownerId: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.projectId = projectId;
        this.creationDate = creationDate;
        this.status = status;
        this.ownerId = ownerId;
    }
}

export default Story;