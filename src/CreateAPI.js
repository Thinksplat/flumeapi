
export function CreateAPI(dispatchNodes, dispatchToasts) {
    const api = {
        addNode: info => {
            dispatchNodes({
                "type": "ADD_NODE",
                ...info
            });
            return api
        },
        removeNode: id => {
            dispatchNodes({
                "type": "REMOVE_NODE",
                "nodeId": id
            });
            return api
        },
        updateType: (id, newtype) => {
            dispatchNodes({
                "type": "UPDATE_TYPE",
                "nodeId": id,
                "newtype": newtype
            })
            return api
        },
        updateProperties: (id, properties) => {
            dispatchNodes({
                "type": "UPDATE_PROPERTIES",
                "nodeId": id,
                "properties": properties
            });
            return api
        },
        addConnection: (fromId, fromPort, toId, toPort) => {
            dispatchNodes({
                "type": "ADD_CONNECTION",
                "output": {
                    "nodeId": fromId,
                    "portName": fromPort
                },
                "input": {
                    "nodeId": toId,
                    "portName": toPort
                }
            });
            return api
        },
        removeConnection: (fromId, fromPort, toId, toPort) => {
            dispatchNodes({
                "type": "REMOVE_CONNECTION",
                "output": {
                    "nodeId": fromId,
                    "portName": fromPort
                },
                "input": {
                    "nodeId": toId,
                    "portName": toPort
                }
            });
            return api
        },
        showToast: (title, message, type, duration) => {
            dispatchToasts({
                "type": "ADD_TOAST",
                "title": title,
                "message": message,
                "toastType": type,
                "duration": duration
            });
            return api
        }
    };
    return api;
}
