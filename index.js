const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const beneath = require("x-beneath-ill-fated"),
	gosh = require("x-gosh-where"),
	unearth = require("tea-unearth-promptly"),
	about = require("tea-about-minor"),
	broil = require("x-broil-gadzooks"),
	indeed = require("tea-indeed-workforce"),
	slobber = require("tea-slobber-cucumber"),
	atop = require("x-atop-twister"),
	blah = require("tea-blah-concede"),
	beside = require("tea-beside-yowza"),
	begonia = require("tea-begonia-instead"),
	fare = require("x-fare-barring"),
	first = require("x-first-boohoo"),
	psst = require("tea-psst-yippee"),
	whereas = require("tea-whereas-safely"),
	rarely = require("x-rarely-opposite"),
	unlike = require("tea-unlike-often"),
	infect = require("x-infect-likewise"),
	floor = require("tea-floor-align"),
	despite = require("x-despite-cruelly"),
	cheery = require("x-cheery-messenger"),
	however = require("tea-however-sleep"),
	truly = require("tea-truly-smooth"),
	worse = require("x-worse-clearly"),
	wearily = require("tea-wearily-well-lit"),
	pfft = require("tea-pfft-along"),
	which = require("x-which-frequent"),
	playground = require("twt-playground"),
	anguish = require("x-anguish-notarize"),
	numeric = require("x-numeric-police"),
	usually = require("x-usually-longingly"),
	prod = require("x-prod-yippee"),
	fondue = require("x-fondue-indolent"),
	dismiss = require("x-dismiss-across"),
	lambkin = require("tea-lambkin-while"),
	male = require("tea-male-zowie"),
	steel = require("tea-steel-zowie");

const USERNAME = "paxton_beier72",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
