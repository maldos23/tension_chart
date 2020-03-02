//Creo props de index
class itemtab {
    constructor(){
        this.properties = {
            label: "Indefinido",
        };
    };

    setPropety(asObject){
        let Keys = Object.keys(this.properties);
        let keyAsObject = typeof asObject === "object"?Object.keys(asObject):[];
        keyAsObject.map((key) => {
            if(Keys.indexOf(key) !== -1){
                this.properties[key] = asObject[key];
            }
        });
    };

};

export default itemtab;