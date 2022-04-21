export function CreateAPI(dispatchNodes, dispatchToasts) {
    return {
        addNode: info => {
            dispatchNodes({
                "type": "ADD_NODE",
                ...info
            });
        },
        removeNode: id => {
            dispatchNodes({
                "type": "REMOVE_NODE",
                "nodeId": id
            });
        },
        updateType: (id, type) => {
            dispatchNodes({
                "type": "UPDATE_TYPE",
                "nodeId": id,
                "type": type
            })
        },
        updateProperties: (id, properties) => {
            dispatchNodes({
                "type": "UPDATE_PROPERTIES",
                "nodeId": id,
                "properties": properties
            });
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
        },
        showToast: (title, message, type, duration) => {
            dispatchToasts({
                "type": "ADD_TOAST",
                "title": title,
                "message": message,
                "toastType": type,
                "duration": duration
            });
        }
    };
}
