class Project{
    uuid: string;
    name: string;
    description: string;
    
    constructor(name: string, description: string){
        this.uuid = self.crypto.randomUUID();
        this.name = name;
        this.description = description;
    }
}

export default Project;