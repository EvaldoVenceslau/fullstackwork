import express from 'express';
import {getusers, addUsers, updateUser, deleteUser} from '../controllers/user.js';

const router = express.Router();

router.get('/', getusers);

router.post('/', addUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;