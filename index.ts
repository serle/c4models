import workspace from './workspace/workspace';
import { push_workspace } from './utils/push_workspace';
import { export_to_plant_uml } from './utils/export_to_plant_uml';

const workspace_id = 59217;
const api_key = 'a3dbe640-01bf-4078-86f3-1ec2d414cc63';
const api_secret = 'cf0851d0-32af-4f81-91a5-ee118d6ccd73';

const main = async () => {
    // Now either write the workspace to the Structurizr backend...
    const response = await push_workspace(workspace, workspace_id, api_key, api_secret);
    if (response) {
        console.log('> workspace pushed to backend', response);
    }

    // ... or render it as PlantUML
    const location = 'output.puml';
    export_to_plant_uml(location, workspace);
    console.log('> workspace rendered as PlantUML at', location);
};

main().catch((e) => console.error('error', e));
