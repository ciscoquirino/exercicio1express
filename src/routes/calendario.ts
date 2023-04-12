import { Router } from "express";
import Calendario from "../controllers/Calendario";

const routes = Router();

routes.get('/', Calendario.dayOfMonth);
routes.post('/',Calendario.date);

export default routes;