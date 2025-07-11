import { Router } from 'express';
import { IndexController } from '../controllers/index';
const router = Router();
const indexController = new IndexController();
export function setRoutes(app) {
    app.use('/', router);
    router.get('/', indexController.handleHome);
    // Add more routes as needed
}
