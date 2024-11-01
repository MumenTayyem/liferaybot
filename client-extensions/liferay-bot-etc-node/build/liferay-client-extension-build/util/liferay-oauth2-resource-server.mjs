import { lookupConfig, lxcConfig } from "@rotty3000/config-node";
import cors from "cors";
import jwt from "jsonwebtoken";
import jwktopem  from "jwk-to-pem";
import  fetch  from "node-fetch";
import {applicationExternalReferenceCodes} from "./constants.mjs";

const agentOauthApp = lxcConfig.oauthApplication(
  applicationExternalReferenceCodes.OAUTH_AGENT_EXTERNAL_REFERENCE_CODE
);
const agentUriPath = agentOauthApp.jwksUri();
const domains = lxcConfig.dxpDomains();
const lxcDXPMainDomain = lxcConfig.dxpMainDomain();
const lxcDXPServerProtocol = lxcConfig.dxpProtocol();
const oauthAgentClientId = agentOauthApp.clientId();
const allowList = domains
  ? domains
      .toString()
      .split(",")
      .map((domain) => `${lxcDXPServerProtocol}://${domain}`)
  : "";
const corsOptions = {
  origin(origin, callback) {
    callback(null, allowList.includes(origin));
  },
};

export async function corsWithReady(req, res, next) {
  if (req.originalUrl === lookupConfig("readyPath")) {
    return next();
  }
  return cors(corsOptions)(req, res, next);
}
async function clientLiferayJWT(req, res, next) {
  const authorization = req.headers.authorization;
  const AgentOauth2JWKSURI = `${lxcDXPServerProtocol}://${lxcDXPMainDomain}${agentUriPath}`;
  if (!authorization) {
    res.status(401).send("No authorization header Agent");
    return;
  }
  const [, bearerToken] = req.headers.authorization.split("Bearer ");
  try {
    const jwksResponse = await fetch(AgentOauth2JWKSURI);
    if (jwksResponse.status === 200) {
      const jwks = await jwksResponse.json();
      const jwksPublicKey = jwktopem(jwks.keys[0]);
      const decoded = jwt.verify(bearerToken, jwksPublicKey, {
        algorithms: ["RS256"],
        ignoreExpiration: true,
      });
      if (
        decoded.client_id.replaceAll(" ", "") ===
        oauthAgentClientId.replaceAll(" ", "")
      ) {
        req.token = bearerToken;
        req.jwt = decoded;
        next();
      } else {
        console.error(
          "JWT token client_id value does not match expected client_id value."
        );
        res.status(401).send("Invalid authorization");
      }
    } else {
      console.error(
        "Error fetching JWKS %s %s",
        jwksResponse.status,
        jwksResponse.statusText
      );
      res.status(401).send("Invalid authorization header");
    }
  } catch (error) {
    console.error("Error validating client JWT token\n%s", error);
    res.status(401).send("Invalid authorization header");
  }
}
export async function liferayJWT(req, res, next) {
  if (req.path === lookupConfig("readyPath")) {
    return next();
  } else {
    return clientLiferayJWT(req, res, next);
  }
}
