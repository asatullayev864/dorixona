"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    const PORT = process.env.PORT || 5005;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["error", "warn"]
    });
    app.setGlobalPrefix('api');
    await app.listen(PORT ?? 5005, () => {
        console.log(`Server started at: http://localhost:${PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map