"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_Rout_1 = require("./app/module/student/student.Rout");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/students', student_Rout_1.StudentRoutes);
const getAController = (req, res) => {
    const start = 'started';
    res.send(start);
};
app.get('/', getAController);
exports.default = app;
