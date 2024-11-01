import {lookupConfig, lxcConfig} from '@rotty3000/config-node';
import {applicationExternalReferenceCodes} from './constants.mjs';
import fetch from 'node-fetch';

const serverOauthApp = lxcConfig.oauthApplication(applicationExternalReferenceCodes.OAUTH_SERVER_EXTERNAL_REFERENCE_CODE);

const protocol = lxcConfig.dxpProtocol();
const domain = lxcConfig.dxpMainDomain();
const tokenURL = serverOauthApp.tokenUri();
const clientId = serverOauthApp.clientId();
const clientSecret = serverOauthApp.clientSecret();


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
    else{
        console.log(`URL: ${url}`);
        console.log(`tokenURL: ${tokenURL}`);
        console.log(`clientId: ${clientId}`);
        console.log(`clientSecret: ${clientSecret}`);
        console.log(`tokenResponse.status: ${tokenResponse.status}`);
        console.log(`tokenResponse.statusText: ${tokenResponse.statusText}`);
        throw new Error("getToken(): Could not generate token!");
    }
}