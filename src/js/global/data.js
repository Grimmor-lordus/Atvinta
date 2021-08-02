const componentsTemplate = {
    biomechanism: {
        coast: 7,
        sell_coast: 5,
        count: 0
    },

    cpu: {
        coast: 5,
        sell_coast: 3,
        count: 0
    },

    soul: {
        coast: 25,
        sell_coast: 15,
        count: 0
    }
};

var events = {
    bayComponent: [],
    sellComponent: []
}

export default {

    saveData(key, value) {
        return localStorage[key] = value;
    },

    getData(key) {
        return localStorage[key];
    },

    buyComponent(name) {
        var result = {
            code: 0,
            message: "Покупка совершена"
        }

        try {
            var coins = Number(this.getData("coins")) || 0;
            var componentsJsonString = this.getData("components");
            var components = componentsTemplate;

            if(componentsJsonString) {
                components = JSON.parse(componentsJsonString) || components;
            }

            var component = components[name];
            var componentCount = Number(component.count);

            if (!component) {
                result.code = 1;
                result.message = `Компонент с названием "${name}" не найден`;

                return result;
            }
            
            if (coins < component.coast) {
                result.code = 2;
                result.message = "Недостаточно средств для покупки компонента";

                return result;
            }

            coins -= component.coast;
            componentCount += 1;

            component.count = componentCount;
            components[name] = component;

            this.saveData("coins", Number(coins));
            this.saveData("components", JSON.stringify(components));

            var buyComponentEvents = events.bayComponent;

            for (var index in buyComponentEvents) {
                var buyComponentEvent = buyComponentEvents[index];

                if(typeof buyComponentEvent === "function") {
                    buyComponentEvent();
                }
            }
        } catch (error) {
            result.code = 10;
            result.message = error.message;
            console.log(error.stack);
        }

        return result;
    },

    sellComponent(name) {
        var result = {
            code: 0,
            message: "Продажа совершена"
        }

        try {
            var coins = Number(this.getData("coins")) || 0;
            var componentsJsonString = this.getData("components");
            var components = componentsTemplate;

            if(componentsJsonString) {
                components = JSON.parse(componentsJsonString) || components;
            }

            var component = components[name];
            var componentCount = Number(component.count);

            if (!component) {
                result.code = 1;
                result.message = `Компонент с названием "${name}" не найден`;

                return result;
            }
            
            if (component.count <= 0) {
                result.code = 2;
                result.message = "Недостаточно компонентов для продажи";

                return result;
            }

            

            coins += component.sell_coast;
            componentCount -= 1;

            if (coins >= 100) {
                result.code = 3;
                result.message = "Количество монет ограничено! Вы не можете иметь больше 100 монет";

                return result;
            }

            component.count = componentCount;
            components[name] = component;

            this.saveData("coins", Number(coins));
            this.saveData("components", JSON.stringify(components));

            var sellComponentEvents = events.sellComponent;

            for (var index in sellComponentEvents) {
                var sellComponentEvent = sellComponentEvents[index];

                if(typeof sellComponentEvent === "function") {
                    sellComponentEvent();
                }
            }
        } catch (error) {
            result.code = 10;
            result.message = error.message;
            console.log(error.stack);
        }

        return result;
    },

    event: {
        buyComponent: function(handler) {
            this.add("bayComponent", handler);
        },

        sellComponent: function(handler) {
            this.add("sellComponent", handler);
        },

        add: function(funcName, handler) {
            if (typeof events[funcName] === "object" && typeof handler === "function") {
                events[funcName].push(handler);
            }
        }
    },

    getComponents(name) {
        var result = {
            code: 0,
            message: "",
            data: null
        };

        try {
            var componentsJsonString = this.getData("components");
            var components = componentsTemplate;

            if (componentsJsonString) {
                components = JSON.parse(componentsJsonString) || components;
            }

            if (name) {
                if(!components[name]) {
                    result.code = 1;
                    result.message = `Компонент с названием "${name}" не найден`;

                    return result;
                }
            }

            result.data = name ? components[name] : components;
        } catch(error) {
            result.code = 10;
            result.message = error.message;
            console.log(error.stack);
        }

        return result;
    }
}