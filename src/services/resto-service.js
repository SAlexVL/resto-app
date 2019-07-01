const url = 'http://localhost:3000/menu';
export default class RestoService {
  getAllItems = async () => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`An error has occurred in fetching ${url}, with status: ${res.status}`);
    }

    return res.json();
  }
  
  getMenuItems = async () => {
    return await this.getAllItems();
  }

}