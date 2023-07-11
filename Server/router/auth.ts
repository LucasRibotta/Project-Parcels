import express from "express"
import {
    parcela,
    parcelas,
    createCondominio,
    createParcela,
    updateParcela,
    deleteParcela,
    desableParcela
} from "../controllers/auth"

import users from '../controllers/users'

const router = express.Router();

router.get("/parcelas", parcelas)
router.get("/parcelas/:id", parcela)
router.post("/parcela", createParcela)


router.get('/users', users)
router.post("/condominio", createCondominio)
router.put("/updateParcela/:id", updateParcela)
router.put("/deleteParcela/:id", deleteParcela)
router.put("/desableParcela/:id", desableParcela)



export default router;
