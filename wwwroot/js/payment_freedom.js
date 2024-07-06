(function (p, a, y, b, o, x) {
    o = p.createElement(a);
    x = p.getElementsByTagName(a)[0];
    o.async = 1;
    o.src = 'https://cdn.freedompay.kz/widget/pbwidget.js?' + 1 * new Date();
    x.parentNode.insertBefore(o, x);
})(document, 'script');

function pay_short(amount, token, description, language) {
    var data = {
        token: token,
        payment: {
            amount: language,
            language: 'ru', // Язык виджета
            description: description,
            //order: order,
        },
        successCallback: function (payment) {
            console.log(payment) // Данные о платеже
        },
        errorCallback: function (payment) {
            console.log(payment) // Данные о платеже
        }
    }

    var widget = new PayBox(data);
    widget.create();
}

function pay(amount, order, token, currency, description) {
    var data = {
        token: "Ваш токен",
        payment: {
            order: "1",
            amount: "200",
            currency: "KZT",
            description: "Описание заказа",
            expires_at: "2020-12-12 00:00:00",
            param1: "string",
            param2: "string",
            param3: "string",
            test: 1,  // testing mode
            options: {
                callbacks: {
                    result_url: "https://my-domain.com/result",
                    check_url: "https://my-domain.com/check"
                },
                custom_params: {},
                user: {
                    email: "user@test.com",
                    phone: "77777777777",
                },
                receipt_positions: [
                    {
                        count: 2,
                        name: "Коврик для мыши",
                        tax_type: 3,
                        price: 1000
                    },
                    {
                        count: 2,
                        name: "Розетка",
                        tax_type: 3,
                        price: 1000
                    }
                ]
            }
        },
        successCallback: function (payment) {
            //...
        },
        errorCallback: function (payment) {
            //...
        }
    }

    var widget = new PayBox(data);
    widget.create();
}