export class LocalStorageAPI{

  constructor(_url: string){
    
  }

  public getProject<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (item === null) return null;

    const response: T = JSON.parse(item);
    return response;
  }

  public createProject(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static saveProject(key: any, value: any): void {
    localStorage.setItem(key.uuid, JSON.stringify(value));
  }

  static deleteProject(key: string): void{
    localStorage.removeItem(key);
  }
}