import { Controller } from './controller';
import { client } from '../redis'
import model from '../models/index';

class HomeController extends Controller {
    index(req, res) {
        model.Posts.findAll()
            .then(data => {
                return res.render('home', {
                    posts: data
                })
            })
    }
}
const home = new HomeController()
export { home as HomeController }
