export default {
    actions: {
        async loadUserData(ctx) {
            let userComponents = localStorage["user_components"] ? JSON.parse(localStorage["user_components"]) : null;

            ctx.commit('updateCoins', localStorage["coins"]);
            ctx.commit('updateUserComponents', userComponents);
        }
    },

    mutations: {
        updateCoins(state, coins) {
            state.coins = Number(coins || 0)
        },
        
        updateUserComponents(state, components) {
            if(!components) {
                return state.components;
            }

            let resultComponents = {};

            for (let componentName in state.components) {
                let component = state.components[componentName];

                resultComponents[componentName] = {};

                for (let fieldName in component) {
                    let field = component[fieldName];

                    if (!components[componentName]) {
                        resultComponents[componentName] = component;
                        continue;
                    }

                    if (!components[componentName][fieldName]) {
                        resultComponents[componentName][fieldName] = field;
                        continue;
                    }

                    resultComponents[componentName][fieldName] = components[componentName][fieldName];
                }
            }
            
            state.components = resultComponents;
        },

        setCoins(state, coins){
            localStorage["coins"] = state.coins = Number(coins || 0)
        },

        setUserComponents(state, components) {
            if (!components) {
                localStorage["user_components"] = JSON.stringify(state.components);
                return;
            }

            let resultComponents = {};

            for (let componentName in state.components) {
                let component = state.components[componentName];

                resultComponents[componentName] = {};

                for (let fieldName in component) {
                    let field = component[fieldName];

                    if (!components[componentName]) {
                        resultComponents[componentName] = component;
                        continue;
                    }

                    if (!components[componentName][fieldName]) {
                        resultComponents[componentName][fieldName] = field;
                        continue;
                    }

                    resultComponents[componentName][fieldName] = components[componentName][fieldName];
                }
            }

            state.components = resultComponents;

            localStorage["user_components"] = JSON.stringify(resultComponents);
        }
    },

    state: {
        coins: 0,

        components: {
            biomechanism: {
                count: 0,
                in_process: {
                    count: 0
                }
            },
        
            cpu: {
                count: 0,
                in_process: {
                    count: 0
                }
            },
        
            soul: {
                count: 0,
                in_process: {
                    count: 0
                }
            }
        }
    },

    getters: {
        getCoins(state) {
            return Number(state.coins || 0);
        },
        
        getCoinsName(state) {
            let words = ["монета", "монеты", "монет"]
            let number = state.coins
            
            return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]]
        },

        getUserComponents(state) {
            return state.components;
        }
    }
}