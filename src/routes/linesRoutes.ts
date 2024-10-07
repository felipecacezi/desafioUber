import { Router } from "express";
import { SpTransService } from "../services/SpTransService";

const router = Router();

router.get("/", async (req, res) => {    
    try {
        const spTransApi = new SpTransService(
            process.env.SPTRANS_TOKEN as string,
            process.env.SPTRANS_URLBASE as string
        );
        
        let auth = await spTransApi.auth();
        let positions = await spTransApi.getPositions();
        
        res.json({
            status: positions.status,
            data: positions.data
        });
        
    } catch (error: Error) {
        res.json({
            status: error.status,
            message: error.message
        });
    }
});

router.get("/:lineCode", async (req, res) => {
    
    try {
        const spTransApi = new SpTransService(
            process.env.SPTRANS_TOKEN as string,
            process.env.SPTRANS_URLBASE as string
        );
        
        let auth = await spTransApi.auth();
        let lineBuses = await spTransApi.getVeiclesOfLine(req.params.lineCode);
        
        res.json({
            status: lineBuses.status,
            data: lineBuses.data
        });
        
    } catch (error: Error) {
        res.json({
            status: error.status,
            message: error.message
        });
    }
    
});

export default router;