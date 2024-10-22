import {lookupConfig} from '@rotty3000/config-node';


const protocol = lookupConfig("com.liferay.lxc.dxp.server.protocol");
const domain = lookupConfig("com.liferay.lxc.dxp.main.domain");
const tokenURL = lookupConfig("liferay-bot-etc-node-oauth-application-headless-server.oauth2.token.uri");
const clientId = lookupConfig("liferay-bot-etc-node-oauth-application-headless-server.oauth2.headless.server.client.id");
const clientSecret = lookupConfig("liferay-bot-etc-node-oauth-application-headless-server.oauth2.headless.server.client.secret");


export default async function getToken(){
    const url = `${protocol}://${domain}${tokenURL}`;

    const body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret
    });
    
    const tokenResponse = await fetch(
        url
        ,{method:"POST",
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            body: body
        });
    
    if (tokenResponse.ok)
        return await tokenResponse.json();
    else
        throw new Error("getToken(): Could not generate token!");
}