const helperParseConfig = { serverId: 6436, active: true };

const helperParseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6436() {
    return helperParseConfig.active ? "OK" : "ERR";
}

console.log("Module helperParse loaded successfully.");