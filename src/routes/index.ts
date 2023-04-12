import { Router, Request,Response } from "express";
import calendario from './calendario';

const routes = Router();

routes.use('/calendario', calendario);

routes.use((req:Request,res:Response)=>res.json({error:"Requisição desconhecida"}))

export default routes;