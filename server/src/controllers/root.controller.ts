import { Request, Response } from 'express';

const root = (_: Request, res: Response) => {
	res.send({ message: 'Hello World!' });
};

export default { root };
