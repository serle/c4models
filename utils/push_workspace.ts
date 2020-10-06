import { Workspace, StructurizrClient } from "structurizr-typescript"

export const push_workspace = async (workspace: Workspace, workspace_id:number, api_key:string, api_secret:string) => {
    const client = new StructurizrClient(api_key, api_secret);
    return client.putWorkspace(workspace_id, workspace);
}