"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error("Token inválido");
    }
    const [, token] = authHeader.split(" ");
    const secret = process.env.SECRET;
    const decodedToken = (0, jsonwebtoken_1.verify)(token, `${secret}`);
    if (!decodedToken) {
        throw new Error("Token inválido");
    }
    const { id } = decodedToken;
    request.userId = id;
    return next();
}
exports.default = isAuthenticated;
