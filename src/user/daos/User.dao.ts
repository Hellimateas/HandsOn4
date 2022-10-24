import { IUserDTO } from "../dtos/user.dto";

class UsersDAO{
  private _User: IUserDTO[];
  constructor(){
    this._User=[];
  }
  cadastrar(user: IUserDTO): IUserDTO{
    let objUser;

    user.indexId = this._User.length;
    objUser = user;
    this._User.push(objUser)
    return objUser;

  }

  atualizar(user: IUserDTO): IUserDTO | undefined {
    let objUser;
    
    objUser = user;

    if(objUser.indexId === undefined)
        return;
    
    this._User[objUser.indexId] = objUser;

    return objUser;
}

    listar(): (IUserDTO)[] {
      let objUser: (IUserDTO)[] = [];

      for(let users of this._User)
        objUser.push(users);

      return objUser;
    }

    excluir(Id: number): void {

      const indexId = this._User.findIndex((obj: IUserDTO) => {
          if('cpf' in obj)
              return obj.indexId === Id;
      });
      console.log(`Delete Index: ${Id}`);
      this._User.splice(indexId, 1);
  }
}

export default new UsersDAO;