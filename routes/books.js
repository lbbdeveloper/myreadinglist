import { Router } from 'express'
import * as bookCtrl from '../controllers/book.js'


export {
  router
}

const router = Router()
router.get('/', bookCtrl.index)
router.get('/new', bookCtrl.new)

router.post('/', bookCtrl.create)
router.get('/:id', bookCtrl.show);

router.delete('/:id',bookCtrl.delete)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}