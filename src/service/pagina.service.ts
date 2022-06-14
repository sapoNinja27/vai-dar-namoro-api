import {getRepository} from "typeorm";
import {Pagina} from "../model/pagina.model";

export default class PaginaService {
  repository = getRepository(Pagina);

  async create(obj: Pagina) {
    const pag = await this.repository.save(obj);
    return pag.id;
  }
  async find(id: number) {
    return await this.repository.findOne(id);
  }
}
