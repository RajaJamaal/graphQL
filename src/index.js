"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb+srv://JamalSaeed:<jjaammaall>@cluster0.p2kpsa3.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: true,
}));
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
});
