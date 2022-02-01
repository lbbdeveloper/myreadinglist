import { Profile } from '../models/profile.js'
import axios from 'axios'


export {
    show,
}

  function show(req, res) {
    Profile
    .findById(req.params.id)
    .populate({
      path: 'books',
    })
    .exec(function(err, profile){
      res.render('profile/show', {
              title: 'My Reading List', 
              profile: profile,
            })
      });
    }

 