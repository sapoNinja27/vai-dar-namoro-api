import {Request, Response} from "express";
import {Pagina} from "../model/pagina.model";
import PaginaService from "../service/pagina.service";

export default class PaginaController {
    service = new PaginaService();

    async create(req: Request, res: Response) {
        let obj : Pagina = req.body;
        return res.json(await this.service.create(obj));
    }

    async find(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        res.json(await this.service.find(id));
    }
}