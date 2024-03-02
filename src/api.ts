class API{
  static saveData(key: string, data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  static getData(key: string): any | null {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  }

  static deleteData(key: string): void{
    localStorage.removeItem(key);
  }
}

export default API;