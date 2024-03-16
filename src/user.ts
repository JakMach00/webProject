class User{
    userId: string;
    firstName: string;
    lastName?: string;
    isLogged: boolean;

    constructor(firstName: string, lastName: string){
        this.userId = self.crypto.randomUUID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.isLogged = false;
    }
}