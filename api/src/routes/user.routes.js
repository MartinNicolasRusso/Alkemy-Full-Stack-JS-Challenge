import { Router } from "express";
import { check } from "express-validator";
import { getUser, postUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { validatejwt} from "../middlewares/validate-jwt.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.post('/',[
    check('name', 'Username is required').not().isEmpty(),
    check('email', 'User Email is required').not().isEmpty(),
    check('password', 'User Password is required').isLength({min:8}),
    validate
] ,postUser);

router.get('/:id',[validatejwt,validate], getUser);
router.put('/:id',[validatejwt,validate], updateUser);
router.delete('/:id',[validatejwt,validate], deleteUser);


export default router;