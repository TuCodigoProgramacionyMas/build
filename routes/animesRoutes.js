"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var animeControllers_1 = __importDefault(require("../controllers/animeControllers"));
var AnimeRoutes = /** @class */ (function () {
    function AnimeRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    AnimeRoutes.prototype.config = function () {
        this.router.get('/', animeControllers_1.default.list);
        this.router.post('/listado', animeControllers_1.default.consultar);
    };
    return AnimeRoutes;
}());
var animeRoutes = new AnimeRoutes();
exports.default = animeRoutes.router;
