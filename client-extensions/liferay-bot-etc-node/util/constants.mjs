
import { lookupConfig } from '@rotty3000/config-node'
;
export const applicationExternalReferenceCodes = {
    OAUTH_AGENT_EXTERNAL_REFERENCE_CODE:
        lookupConfig('main.liferay.agent.oauth.application'),
    OAUTH_SERVER_EXTERNAL_REFERENCE_CODE:
        lookupConfig('main.liferay.server.oauth.application'),
};

// This key is already deleted, keeping it as an example only
export const GEMINI_API_KEY = 'AIzaSyBONbH5DY1QjpWnoq7McouXzO3-AFeNff0';