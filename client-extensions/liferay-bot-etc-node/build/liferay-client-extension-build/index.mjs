/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import express from "express";

import {
  corsWithReady,
  liferayJWT,
} from "./util/liferay-oauth2-resource-server.mjs";
import { logger } from "./util/logger.mjs";
import { lookupConfig } from "@rotty3000/config-node";
import { readyRouter } from "./routes/public/ready.mjs";
import initializeBots from "./functions/initialize-telegram-bots.mjs";

const serverPort = lookupConfig("server.port");
console.log("MOMEN");
console.log("Printing port number:")
console.log(serverPort);
const app = express();

app.use(express.json());
app.use(corsWithReady);
app.use(liferayJWT);

app.use(readyRouter);

await initializeBots();

app.listen(serverPort, () => {
  logger.log(`App listening on ${serverPort}`);
});

export default app;
