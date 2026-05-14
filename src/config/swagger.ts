// Експорт специфікації Swagger/OpenAPI для документації про API
export const swaggerSpec = {
    // Версія специфікації OpenAPI
    openapi: '3.0.0',
    // Загальна інформація про API
    info: {
        title: 'API Сайту про Лисиців',
        version: '1.0.0',
        description: 'Документація API для Сайту про Лисиців',
    },
    // Налаштування серверів для тестування API
    servers: [
        {
            url:
                process.env.CODESPACE_NAME !== undefined
                    ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
                    : 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    // Визначення кінцевих точок (endpoints) REST API та операцій з ними
    paths: {
        '/api/foxs': {
            // GET запит для отримання всіх лисиців
            get: {
                summary: 'Отримати всіх лисиців',
                responses: {
                    '200': {
                        description: 'Список всіх лисиців',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Fox' },
                                },
                            },
                        },
                    },
                },
            },

            // POST запит для створення нового лисиця
            post: {
                summary: 'Створити нового лисиця',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Fox' },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: "Створений об'єкт лисиця",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Fox' },
                            },
                        },
                    },
                },
            },
        },

        // Операції для конкретного лисиця за ID
        '/api/foxs/{id}': {
            // GET запит для отримання лисиця за ID
            get: {
                summary: 'Отримати лисиця за ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID лисиця',
                    },
                ],
                responses: {
                    '200': {
                        description: "Об'єкт лисиця",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Fox' },
                            },
                        },
                    },
                    '404': { description: 'Лисиця не знайдено' },
                },
            },

            // PUT запит для повного оновлення лисиця за ID
            put: {
                summary: 'Повністю оновити лисиця',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID лисиця',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Fox' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт лисиця",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Fox' },
                            },
                        },
                    },
                    '404': { description: 'Лисиця не знайдено' },
                },
            },
            // PATCH запит для часткового оновлення лисиця за ID
            patch: {
                summary: 'Частково оновити лисиця',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID лисиця',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Fox' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт лисиця",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Fox' },
                            },
                        },
                    },
                    '404': { description: 'Лисиця не знайдено' },
                },
            },
            // DELETE запит для видалення даних про лисиця за ID
            delete: {
                summary: 'Видалити дані про лисиця',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID лисиця',
                    },
                ],
                responses: {
                    '200': { description: 'Повідомлення про успішне видалення' },
                    '404': { description: 'Лисиця не знайдено' },
                },
            },
        },
    },

    // Визначення компонентів для повторного використання
    components: {
        // Схеми даних
        schemas: {
            // Схема об'єкта Заєць
            Fox: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender'],
                properties: {
                    name: {
                        type: 'string',
                        description: "Ім'я лисиця",
                    },
                    age: {
                        type: 'number',
                        description: 'Вік лисиця у роках',
                    },
                    height: {
                        type: 'number',
                        description: 'Висота лисиця в сантиметрах',
                    },
                    weight: {
                        type: 'number',
                        description: 'Вага лисиця в кілограмах',
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Стать лисиця',
                    },
                    description: {
                        type: 'string',
                        description: "Опис лисиця (необов'язкове поле)",
                    },
                },
            },
        },
    },
};
