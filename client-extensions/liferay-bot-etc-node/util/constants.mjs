
import { lookupConfig } from '@rotty3000/config-node'
;
export const applicationExternalReferenceCodes = {
    OAUTH_AGENT_EXTERNAL_REFERENCE_CODE:
        lookupConfig('main.liferay.agent.oauth.application'),
    OAUTH_SERVER_EXTERNAL_REFERENCE_CODE:
        lookupConfig('main.liferay.server.oauth.application'),
};