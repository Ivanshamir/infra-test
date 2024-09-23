"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe('API Endpoints', () => {
    it('GET /test should return current timestamp', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get('/test');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('api', 'testApi');
        expect(res.body).toHaveProperty('result');
        expect(typeof res.body.result).toBe('number');
    }));
    it('GET /dateonly should return current date', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get('/dateonly');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('api', 'testApi');
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }));
    it('POST /dateonly should return formatted date and time', () => __awaiter(void 0, void 0, void 0, function* () {
        const timestamp = Math.floor(Date.now() / 1000);
        const res = yield (0, supertest_1.default)(app_1.default)
            .post('/dateonly')
            .send({ timestamp })
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('api', 'testApi');
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    }));
});
