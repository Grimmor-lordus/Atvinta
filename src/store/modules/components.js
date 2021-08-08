export default {
    actions: {
        async loadComponentsData(ctx) {
            let components = localStorage["components"] ? JSON.parse(localStorage["components"]) : null
            
            ctx.commit('updateComponents', components);
        }
    },

    mutations: {
        updateComponents(state, components) {
            if(!components) {
                return state.components;
            }

            let resultComponents = {};

            for(let componentName in state.components) {
                let component = state.components[componentName];

                resultComponents[componentName] = {};

                for(let fieldName in component) {
                    let field = component[fieldName];

                    if(!components[componentName]) {
                        resultComponents[componentName] = component;
                        continue;
                    }

                    if(!components[componentName][fieldName]) {
                        resultComponents[componentName][fieldName] = field;
                        continue;
                    }

                    resultComponents[componentName][fieldName] = components[componentName][fieldName];
                }
            }
            
            state.components = resultComponents;
        },
        
        setComponents(state, components) {
            let componentsString = JSON.stringify(state.coins =  components || state.components);

            localStorage["components"] = componentsString
        }
    },

    state: {
        components: {
            biomechanism: {
                coast: 7,
                sell_coast: 5,
                need_to_create: 4,
                name: "Биомеханизм"
            },
        
            cpu: {
                coast: 5,
                sell_coast: 3,
                need_to_create: 4,
                name: "Процессор"
            },
        
            soul: {
                coast: 25,
                sell_coast: 15,
                need_to_create: 1,
                name: "Душа"
            }
        }
    },

    getters: {
        getComponents(state) {
            return state.components;
        },
    }
}