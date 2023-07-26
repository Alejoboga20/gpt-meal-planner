import express from 'express';
import RootController from '../controllers/root.controller';

export enum RoutesVersion {
	v1 = '/api/v1',
}

enum Routes {
	root = '/',
}

export const router = express.Router();

router.get(Routes.root, RootController.root);
