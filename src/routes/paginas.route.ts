import {Router} from "express";
import PaginaController from "../controllers/pagina.controller";

const router = Router();
const controller = new PaginaController();

router.post("/", controller.create.bind(controller))
router.get("/:id", controller.find.bind(controller))


export default router;