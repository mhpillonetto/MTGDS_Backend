import {Router} from 'express';
const baseApiURL = 'https://api.magicthegathering.io/v1/'

router = Router();


router.get('/', async (req, res) => {
    const name = req.params.name;

    const result = await fetch(baseApiURL+'cards?name='+name);
    const response = await result.json();

    res.send(response);
})

export default router;