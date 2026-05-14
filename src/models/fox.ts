import { Schema, model } from 'mongoose';

// Інтерфейс для об'єкта "Заєць"
interface IFox {
    name: string; // Ім'я лисиця
    age: number; // Вік лисиця у роках
    height: number; // Висота лисиця в сантиметрах
    weight: number; // Вага лисиця в кілограмах
    gender: 'male' | 'female'; // Стать лисиця: 'male' - самець, 'female' - самка
    offspringNumber?: number; // Кількість нащадків (необов'язкове поле)
    description?: string; // Опис лисиця (необов'язкове поле)
    dateAdded: Date; // Дата додавання запису до бази даних
}

// Схема MongoDB для моделі "Заєць"
const foxSchema = new Schema<IFox>({
    name: {
        type: String,
        required: true, // Поле є обов'язковим
    },
    age: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    height: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    weight: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    gender: {
        type: String,
        required: true, // Поле є обов'язковим
        enum: ['male', 'female'], // Допустимі значення: 'male' або 'female'
    },
    offspringNumber: Number, // Необов'язкове поле
    description: String, // Необов'язкове текстове поле
    dateAdded: {
        type: Date,
        default: Date.now, // Значення за замовчуванням - поточна дата і час
    },
});

// Створення моделі Mongoose на основі схеми
export const Fox = model<IFox>('Fox', foxSchema);
export type { IFox }; // Експортуємо інтерфейс для використання в інших файлах
