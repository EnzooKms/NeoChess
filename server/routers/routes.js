const Router = require("./router.js");
const router = new Router();

router.route("home", ["auth"]);
router.route("auth/register");
router.route("auth/login");

router.route("chess/create", ["auth"]);
router.route("chess/game", ["auth"]);
